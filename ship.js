/*
 * Ship
 */
function Ship(position, maxSpeed, damping, acceleration, turnRate) {
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

function updateShip(ship) {
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
		ship.position.y = clamp(height - ship.position.y, 0, height);
	}
	
	if (ship.position.x < 0) {
		ship.position.x = width;
		ship.position.y = clamp(height - ship.position.y, 0, height);
	}
	
	if (ship.position.y > height) {
		ship.position.y = 0;
		ship.position.x = clamp(width - ship.position.x, 0, width);
	}
	
	if (ship.position.y < 0) {
		ship.position.y = height;
		ship.position.x = clamp(width - ship.position.x, 0, width);
	}
}

function drawShip(ship, model, interiorColor, borderColor) {
	CTX.save();
	
	CTX.translate(ship.position.x, ship.position.y);
	CTX.rotate(ship.orientation - PI / 2);
	
	CTX.beginPath();
	
	CTX.moveTo(model[0].x, model[0].y);
	
	for (var i = 1; i < model.length; i++) {
		CTX.lineTo(model[i].x, model[i].y);
	}
	
	CTX.lineTo(model[0].x, model[0].y);
	
	CTX.closePath();
	CTX.lineWidth = 3;
	CTX.fillStyle = interiorColor;
	CTX.fill();
	CTX.strokeStyle = borderColor;
	CTX.stroke();	
	
	CTX.restore();
}

function generateShipModel(size) {
	var center = PolarVector(PI / 6, size / (2 * Math.cos(PI / 6)));
	var v1 = new Vector(0, 0).sub(center);
	var v2 = PolarVector(PI / 3, size).sub(center); 
	var v3 = PolarVector(0, size).sub(center);
	return [ v1, v2, v3 ];
}

