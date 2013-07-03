/*
	Goosteroids: A fight for the future of the internet!

    Copyright (C) 2013 James McLean

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
 * Ship
 */
function Ship(position, maxSpeed, damping, acceleration, turnRate) {
	this.alive = true;					//true if ship is alive
	this.gunFiring = false;
	this.gunCooldown = 0;				//gun cooldown
	this.abActivated = false;			//afterburner is activated
	this.abCooldown = 0;				//afterburner cooldown
	this.abFuel = AB_MAX_FUEL;			//afterburner fuel
	this.position = position;
	this.orientation = 0;				//angle
	this.velocity = new Vector(0, 0);
	this.maxSpeed = maxSpeed;
	this.damping = damping;
	this.acceleration = acceleration;	//acceleration magnitude
	this.turnRate = turnRate;			//radians per frame
	this.turning = 0;					//turning coefficient
	this.accelerating = 0;				//acceleration coefficient
}

function updateShip(ship, shipModel) {
	if (ship.alive) {
		if (GOD_MODE_FRAMES_REMAINING > 0) {
			GOD_MODE_FRAMES_REMAINING--;
		}
		
		var width = CANVAS.width - 1;
		var height = CANVAS.height - 1;
		
		var acceleration = PolarVector(ship.orientation, 1).scale(ship.accelerating * ship.acceleration);
		
		ship.velocity = ship.velocity.scale(Math.pow(ship.damping, DT)).add(acceleration.scale(DT));
		ship.velocity = ship.velocity.normalize().scale(clamp(ship.velocity.norm(), 0, ship.maxSpeed));
		ship.position = ship.position.add(ship.velocity.scale(DT)).add(acceleration.scale(DT_2));
		ship.orientation += ship.turning * ship.turnRate * DT;
		
		//bounds check
		if (ship.position.x > width) {
			ship.position.x = 0;
		}
		
		if (ship.position.x < 0) {
			ship.position.x = width;
		}
		
		if (ship.position.y > height) {
			ship.position.y = 0;
		}
		
		if (ship.position.y < 0) {
			ship.position.y = height;
		}
		
		//check if ship has collided with glob(s)
		for (var i = 0; i < GLOBS.length; i++) {
			var glob = GLOBS[i];
			
			//write glob position in ship's coordinate frame
			var globPosition = glob.position.sub(ship.position);
			globPosition = PolarVector(globPosition.angle() - ship.orientation + PI / 2, globPosition.norm());
			
			if (circleIntersectTriangle(globPosition, glob.radius + (1/4) * GRADIENT_RADIUS, shipModel[0], shipModel[1], shipModel[2]) && GOD_MODE_FRAMES_REMAINING == 0) {
				playSound("explosion");
				ship.alive = false;
				LIVES--;
				RESPAWN_FRAMES_REMAINING = RESPAWN_DELAY;
				EXPLOSIONS.push(new Explosion(ship.position, 5*SHIP_EXPLOSION_MAGNITUDE, 1.5*EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_BORDER_COLOR));
				EXPLOSIONS.push(new Explosion(ship.position, 2*SHIP_EXPLOSION_MAGNITUDE, 5*EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_INTERIOR_COLOR));
				EXPLOSIONS.push(new Explosion(ship.position, SHIP_EXPLOSION_MAGNITUDE/3, EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_SPARK_COLOR1));
				EXPLOSIONS.push(new Explosion(ship.position, SHIP_EXPLOSION_MAGNITUDE/3, EXPLOSION_NUM_PARTICLES/2, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_SPARK_COLOR2));
				return;
			}
		}
		
		//update gun
		if (ship.gunCooldown > 0) {
			ship.gunCooldown--;	
		}
		
		//if gun is firing and gun is ready to fire
		if (ship.gunFiring && ship.gunCooldown == 0) {
			//find position of front of ship
			var shipBow = SHIP_MODEL[1];
			shipBow = PolarVector(shipBow.angle() + ship.orientation - PI/2, shipBow.norm() + 2*SHIP_BORDER_WIDTH);
			shipBow = shipBow.add(ship.position);
			
			//fire bullet
			BULLETS.push(new Bullet(shipBow, ship.orientation, BULLET_SPEED, BULLET_LIFETIME));
			playSound("laser");
			
			//set cooldown
			ship.gunCooldown = SHIP_GUN_COOLDOWN;
		}
		
		//update afterburner
		if (ship.abCooldown > 0) {
			ship.abCooldown--;
		}
		
		//reminder: everytime the shift button is pressed, the cooldown is activated
		if (ship.abActivated) {
			//afterburner is activated
			
			//there is fuel in the tank
			if (ship.abFuel > 0) {
				//engines set to turbo acceleration and max velocity
				//drain the fuel a bit
				ship.acceleration = AB_ACCELERATION;
				ship.maxSpeed = AB_SHIP_MAX_SPEED;
				ship.abFuel -= AB_FUEL_CONSUMPTION;
				ship.abFuel = clamp(ship.abFuel, 0, AB_MAX_FUEL);
			} else if (ship.abFuel == 0) {
				//afterburner is off
				//set engines to default acceleration and max speed
				ship.acceleration = SHIP_ACCELERATION;
				ship.maxSpeed = SHIP_MAX_SPEED;
			}
		} else {
			//afterburner is off
			//engines set to default acceleration and max speed
			ship.acceleration = SHIP_ACCELERATION;
			ship.maxSpeed = SHIP_MAX_SPEED;
			
			//the cooldown period is over and we are below maximum fuel
			if (ship.abCooldown == 0 && ship.abFuel < AB_MAX_FUEL) {
				//fill the fuel a bit
				ship.abFuel += AB_FUEL_RECHARGE_RATE;
				ship.abFuel = clamp(ship.abFuel, 0, AB_MAX_FUEL);
			}
		}
	}
}

function drawShip(ctx, ship, model, interiorColor, borderColor, borderWidth) {
	if (ship.alive) {
		ctx.save();
		
		ctx.translate(ship.position.x, ship.position.y);
		ctx.rotate(ship.orientation - PI / 2);
		
		drawPolyLine(ctx, model, interiorColor, borderColor, borderWidth, true);
		
		ctx.restore();
	}
}

function drawEngineFlames(ctx, ship, model, interiorColor, borderColor, borderWidth) {
	if (ship.alive) {
		ctx.save();
		
		ctx.translate(ship.position.x, ship.position.y);
		ctx.rotate(ship.orientation - PI / 2);
		
		drawPolyLine(ctx, model, interiorColor, borderColor, borderWidth);
		
		ctx.restore();	
	}
}

/*
 * Generates the vertices of an isoceles triangle
 */
function generateShipModel(base, height) {
	var hypotenuse = Math.sqrt(height * height + (1/4) * base * base);
	var theta = Math.atan((2 * height) / base);
	
	var v1 = new Vector(0, 0);
	var v2 = PolarVector(theta, hypotenuse);
	var v3 = PolarVector(0, base);
	
	var center = v1.add(v2.add(v3)).scale(1/3);
	v1 = v1.sub(center);
	v2 = v2.sub(center);
	v3 = v3.sub(center);
	
	return [ v1, v2, v3 ];
}

/*
 * Generates engine flames
 */
function generateEngineFlames(shipBase, shipModel, flameStep, flameMagnitude) {
	var start = shipModel[0];
	
	var flames = [ start ];
	
	for (var dist = flameStep; dist < shipBase; dist += flameStep) {
		flames.push(new Vector(start.x + dist, start.y - random(0, flameMagnitude) - 2));
	}
	
	flames.push(shipModel[shipModel.length - 1]);
	
	return flames;
}

/*
 * Tests if p1 and p2 are on the same side of the line l(x) = v1 + x(v2 - v1)
 */
function sameSide(p1, p2, v1, v2) {
	var cp1 = p1.sub(v1).cross(v2.sub(v1));
	var cp2 = p2.sub(v1).cross(v2.sub(v1));
	return (cp1 * cp2 >= 0);
}

/*
 * Tests if p is in the triangle [v1, v2, v3]
 */
function inTriangle(p, v1, v2, v3) {
	return (sameSide(p, v3, v1, v2) && 
			sameSide(p, v1, v2, v3) && 
			sameSide(p, v2, v3, v1));
}

/*
 * Computes the orthogonal projection of p onto the line l(x) = v1 + x(v2 - v1) 
 */
function orthoProjection(p, v1, v2) {
	var t = p.sub(v1).dot(v2.sub(v1)) / v2.sub(v1).dot(v2.sub(v1));
	var op = v1.add(v2.sub(v1).scale(t));
	return { t : t, op : op };
}

/*
 * Tests if the circle (center, radius) is in the triangle [v1, v2, v3]
 */
function circleIntersectTriangle(center, radius, v1, v2, v3) {
	if (inTriangle(center, v1, v2, v3))
		return true;
	
	if (distance(center, v1) < radius ||
		distance(center, v2) < radius ||
		distance(center, v3) < radius)
		return true;
		
	var projection = orthoProjection(center, v1, v2);
	
	if (0 < projection.t && projection.t < 1 && distance(center, projection.op) < radius)
		return true;
	
	projection = orthoProjection(center, v2, v3);
	
	if (0 < projection.t && projection.t < 1 && distance(center, projection.op) < radius)
		return true;
	
	projection = orthoProjection(center, v3, v1);
	
	if (0 < projection.t && projection.t < 1 && distance(center, projection.op) < radius)
		return true;
	
	return false;
}

