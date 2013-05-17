/* 
 * Constants
 */
var FPS 				= 30;						//30				Frames per second			
var DT 					= 1 / FPS;					//1 / FPS 			Delta time		
var DT_2 			 	= DT * DT;					//DT * DT			Delta time squared
													//
var PI					= Math.PI					//					Pi	
var PI_2	 			= 2 * Math.PI;				//2 * PI			Twice pi
													//
var G 					= 20;						//20				Gravitational constant 
var G_DROPOFF			= 0.001;					//0.001				Gravitational dropoff
													//					
var GLOB_MASS			= 1;						//1 				Particle mass
var GLOB_CR				= 1.0;						//1.0				Coefficient of restitution
var GLOB_RADIUS			= 5;						//5					Particle radius
var GLOB_MAX_SPEED 		= 350;						//350				Maxiumum particle velocity
var GLOB_DAMPING		= 1.0						//1.0				Glob velocity damping
													//
var MAX_ALPHA_THRESHOLD	= 200;						//200				Maximum alpha threshold
var MIN_ALPHA_THRESHOLD	= 150;						//150				Minimum alpha threshold
var GRADIENT_RADIUS 	= GLOB_RADIUS * 3;			//GLOB_RADIUS * 3	Gradient radius multiplier
var GRADIENT_STOP0		= "rgba(80, 80, 80, 1)";	//					Gradient color stop 0
var GRADIENT_STOP1		= "rgba(80, 80, 80, 0)";	//
													//
var GLOBS	 			= [];						//[]				Array of particles
var NUM_GLOBS			= 20;						//20				Number of Particles	
													//
var BULLETS				= [];						//[]				Bullets
var NUM_BULLETS 		= 0;						//0					Number of bullets
var BULLET_SPEED		= 650;						//650				Bullet speed
var BULLET_LIFETIME		= 20;						//20				Number of milliseconds bullet is alive
var BULLET_RADIUS		= 2;						//2					Bullet radius
var BULLET_COLOR		= "#000000";				//"#000000"			Bullet color
													//
var EXPLOSIONS			= [];						//[]				Array of explosions
var EXPLOSION_MAGNITUDE	= 250;						//200				Explosion magnitude (particle max velocity)
var EXPLOSION_DAMPING	= 0.9						//0.9				Particle velocity damping
var EXPLOSION_COLOR		= "#999999";				//"#999999"			Explosion color
var NUM_PARTICLES		= 15;						//15				Particle radius
var PARTICLE_RADIUS		= 2;						//2					Particle radius
var PARTICLE_LIFETIME   = 8;						//10				Particle lifetime
													//
var SHIP				= null;						//null				Ship object
var SHIP_MAX_SPEED		= 400;						//400				Max ship speed
var SHIP_ACCELERATION	= 275;						//275				Ship acceleration magnitude
var SHIP_TURN_RATE		= PI_2 / (FPS * 0.04);		//
													//
var SHIP_MODEL			= [];						//[]				Ship model (array of vectors)
var SHIP_SIZE			= 20;						//20				Ship size
var SHIP_INTERIOR_COLOR = "#FFFFFF";				//"#FFFFFF"			Ship interior color
var SHIP_BORDER_COLOR	= "#000000";				//"#000000"			Ship border color
													//
var CANVAS 				= null;						//null				Canvas
var CTX 				= null;						//null				2D context
var TMP_CANVAS		 	= null;						//null				Temporary canvas
var TMP_CTX			 	= null;						//null				Temporary 2D context
													//
var KEY_DOWN_EVENT_HANDLERS	= [];					//					Key down event handlers
var KEY_UP_EVENT_HANDLERS	= [];					//					Key up event handlers													
													//
var KEY_UP_ARROW 		= 38;						//					Up arrow key code
var KEY_DOWN_ARROW 		= 40;						//					Down arrow key code
var KEY_LEFT_ARROW		= 37;						//					Left arrow key code
var KEY_RIGHT_ARROW		= 39;						//					Right arrow key code
var KEY_SPACE_BAR		= 32;						//					Space bar key code


/*
 * KeyEvent class
 */
function KeyEventHandler(key, action) {
	this.key = key;
	this.action = action;
}

function addKeyDownHandler(handler) {
	this.KEY_DOWN_EVENT_HANDLERS.push(handler);
}

function addKeyUpHandler(handler) {
	this.KEY_UP_EVENT_HANDLERS.push(handler);
}

function handleKeyDownEvent(event) {
	for (var i = 0; i < KEY_DOWN_EVENT_HANDLERS.length; i++) {
		var handler = KEY_DOWN_EVENT_HANDLERS[i];
		
		if (handler.key == event.which) {
			handler.action();	
		}
	}
	
	event.preventDefault();
}

function handleKeyUpEvent(event) {
	for (var i = 0; i < KEY_UP_EVENT_HANDLERS.length; i++) {
		var handler = KEY_UP_EVENT_HANDLERS[i];
		
		if (handler.key == event.which) {
			handler.action();	
		}
	}

	event.preventDefault();
}

/*
 * Vector class
 */
 
function Vector(x, y) {
	this.x = x;
	this.y = y;	
}
 
function PolarVector(angle, length) {
	return new Vector(length * Math.cos(angle), length * Math.sin(angle));
}

Vector.prototype.add = function (v) {
	return new Vector(this.x + v.x, this.y + v.y);	
}

Vector.prototype.sub = function (v) {
	return new Vector(this.x - v.x, this.y - v.y);	
}

Vector.prototype.scale = function (c) {
	return new Vector(c * this.x, c * this.y);
}

Vector.prototype.dot = function (v) {
	return this.x * v.x + this.y * v.y;	
}

Vector.prototype.angle = function () {
	return Math.atan(this.y, this.x);	
}

Vector.prototype.norm = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);	
}

Vector.prototype.normalize = function () {
	var c = this.norm();

	if (c == 0) {
		return this;
	} else {
		return this.scale(1 / c);		
	}
}

Vector.prototype.toString = function () {
	return "Vector(" + this.x + ", " + this.y + ")";	
}

function distance(v1, v2) {
	return v1.sub(v2).norm();
}
 
/*
 * Particle class
 */
function Particle(mass, radius, position, velocity) {
	this.radius = radius;
	this.mass = mass;
	this.position = position;
	this.velocity = velocity;
	this.acceleration = new Vector(0, 0);
	this.forces = [];
}

Particle.prototype.inverseMass = function () {
	return (1.0 / this.mass);	
}

Particle.prototype.applyForces = function () {
	var netForce = new Vector(0, 0);
	
	for (var i = 0; i < this.forces.length; i++) {
		netForce = netForce.add(this.forces[i]);
	}
	
	this.acceleration = netForce.scale(this.inverseMass());
}

Particle.prototype.addForce = function (force) {
	this.forces.push(force);
}

Particle.prototype.clearForces = function () {
	this.forces = [];
}

Particle.prototype.addImpulse = function (impulse) {
	this.velocity = this.velocity.add(impulse.scale(this.inverseMass()));
}

/*
 * Particle collision contact
 */
function ParticleContact(particle1, particle2) {
	this.particle1 = particle1;
	this.particle2 = particle2;
	this.contactNormal = particle2.position.sub(particle1.position).normalize();
	this.interpenetrationDepth = particle1.radius + particle2.radius - distance(particle1.position, particle2.position);
}

ParticleContact.prototype.resolveInterpenetration = function () {
	var totalInverseMass = this.particle1.inverseMass() + this.particle2.inverseMass();
	this.particle1.position = this.particle1.position.add(this.contactNormal.scale(-1.0 * (this.particle1.mass * totalInverseMass) * this.interpenetrationDepth));
	this.particle2.position = this.particle2.position.add(this.contactNormal.scale((this.particle2.mass * totalInverseMass) * this.interpenetrationDepth));
}

ParticleContact.prototype.resolveVelocity = function() {
	var relativeVelocity = this.particle2.velocity.sub(this.particle1.velocity); 
	var separatingVelocity = relativeVelocity.dot(this.contactNormal);
	
	if (separatingVelocity > 0) {
		return;	
	}
	
	var newSeparatingVelocity = -1.0 * GLOB_CR * separatingVelocity;
	var deltaSeparatingVelocity = newSeparatingVelocity - separatingVelocity;
	
	var totalInverseMass = this.particle1.inverseMass() + this.particle2.inverseMass();
	var impulse = deltaSeparatingVelocity / totalInverseMass;
	
	var impulseVelocity = this.contactNormal.scale(impulse);
	
	this.particle1.addImpulse(impulseVelocity.scale(-1.0));
	this.particle2.addImpulse(impulseVelocity);
}

/*
 * Bullet class
 */
function Bullet(position, angle, speed, lifetime) {
	this.position = position;
	this.velocity = PolarVector(angle, speed);
	this.lifetime = lifetime;
	this.age = 0;
	this.lifetime = lifetime;
}

/*
 * Explosion class
 */
function explosion(position, magnitude, particleMass, particleRadius, numParticles, collisions) {
	var particles = [];
	
	for (var i = 0; i < numParticles; i++) {
		var velocity = new PolarVector(Math.random() * PI_2, Math.random() * magnitude);
		var particle = new Particle(particleMass, particleRadius, position.add(velocity.scale(DT)), velocity);	
		particles.push(particle);
	}
	
	return particles;
} 
 
function Explosion(position, magnitude, numParticles, lifetime) {
	this.position = position;
	this.particles = explosion(position, magnitude, 1.0, PARTICLE_RADIUS, numParticles, false);
	this.age = 0;
	this.lifetime = lifetime;
}

/*
 * Ship class
 */
function Ship(position, maxSpeed, acceleration, turnRate) {
	this.position = position;
	this.orientation = 0;				//angle
	this.velocity = new Vector(0, 0);
	this.maxSpeed = maxSpeed;
	this.damping = 1.0;
	this.acceleration = acceleration;	//acceleration magnitude
	this.turnRate = turnRate;			//radians per frame
	this.turning = 0;					//turning coefficient
	this.accelerating = 0;				//acceleration coefficient
}

/*
 * Physics
 */
function clamp(c, min, max) {
	if (c < min)
		return min;
	else if (c > max)
		return max
	else
		return c;
}

function updateParticles(particles, maxSpeed, velocityDamping, collisions) {
	var width = CANVAS.width - 1;
	var height = CANVAS.height - 1;
	var contacts = [];
	
	
	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		
		//apply forces
		particle.applyForces();
		
		//clear forces
		particle.clearForces();
		
		//update position/velocity
		particle.velocity = particle.velocity.scale(Math.pow(velocityDamping, DT)).add(particle.acceleration.scale(DT));	
		particle.velocity = particle.velocity.normalize().scale(clamp(particle.velocity.norm(), 0, maxSpeed));
		particle.position = particle.position.add(particle.velocity.scale(DT)).add(particle.acceleration.scale(DT_2));
		
		//bounds check
		if (particle.position.x > width) {
			particle.position.x = 0;
			particle.position.y = clamp(height - particle.position.y, 0, height);
		}
		
		if (particle.position.x < 0) {
			particle.position.x = width;
			particle.position.y = clamp(height - particle.position.y, 0, height);
		}
		
		if (particle.position.y > height) {
			particle.position.y = 0;
			particle.position.x = clamp(width - particle.position.x, 0, width);
		}
		
		if (particle.position.y < 0) {
			particle.position.y = height;
			particle.position.x = clamp(width - particle.position.x, 0, width);
		}
		
		if (collisions) {			
			//collision detection: contact generation (check all pairs of particles)
			for (var j = i + 1; j < particles.length; j++) {
				var particle2 = particles[j];
				
				if (distance(particle.position, particle2.position) < particle.radius + particle2.radius) {
					contacts.push(new ParticleContact(particle, particle2));
				}
			}
		}
	}
	
	if (collisions) {			
		//velocity and interpenetration resolution
		for (var j = 0; j < contacts.length; j++) {
			contacts[j].resolveInterpenetration();
			contacts[j].resolveVelocity();	
		}
	}
}

function updateBullets(bullets) {
	var width = CANVAS.width - 1;
	var height = CANVAS.height - 1;
	
	for (var i = 0; i < bullets.length; i++) {
		var bullet = bullets[i];
		
		//increase bullet age and destroy bullet if past lifetime
		bullet.age++;
		
		if (bullet.lifetime > 0 && bullet.age > bullet.lifetime) {
			bullets.splice(i, 1);
		} else {
			bullet.position = bullet.position.add(bullet.velocity.scale(DT));
			
			//bounds check
			if (bullet.position.x > width) {
				bullet.position.x = 0;
				bullet.position.y = clamp(height - bullet.position.y, 0, height);
			}
			
			if (bullet.position.x < 0) {
				bullet.position.x = width;
				bullet.position.y = clamp(height - bullet.position.y, 0, height);
			}
			
			if (bullet.position.y > height) {
				bullet.position.y = 0;
				bullet.position.x = clamp(width - bullet.position.x, 0, width);
			}
			
			if (bullet.position.y < 0) {
				bullet.position.y = height;
				bullet.position.x = clamp(width - bullet.position.x, 0, width);
			}
		}
		
		for (var j = 0; j < GLOBS.length; j++) {
			var glob = GLOBS[j];
			
			if (distance(bullet.position, glob.position) < glob.radius + GRADIENT_RADIUS / 2 + BULLET_RADIUS) {
				bullets.splice(i, 1);
				GLOBS.splice(j, 1);
				EXPLOSIONS.push(new Explosion(glob.position, EXPLOSION_MAGNITUDE, NUM_PARTICLES, PARTICLE_LIFETIME));
			}
		}
	}
}

function updateExplosions(explosions) {
	for (var i = 0; i < explosions.length; i++) {
		var explosion = explosions[i];
		
		//increase explosion age and destroy explosion if past lifetime
		explosion.age++;
		
		if (explosion.lifetime > 0 && explosion.age > explosion.lifetime) {
			explosions.particles = [];
			explosions.splice(i, 1);
		} else {
			updateParticles(explosion.particles, EXPLOSION_MAGNITUDE, EXPLOSION_DAMPING, false);
		}
	}
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

/*
 * Graphics
 */
function drawCircle(position, radius, color) {
	CTX.beginPath();
	CTX.fillStyle = color;
	CTX.arc(position.x, position.y, radius, 0, PI_2);
	CTX.closePath();
	CTX.fill();
}

function drawGreyGoo(particles) {
	TMP_CTX.clearRect(0, 0, TMP_CANVAS.width, TMP_CANVAS.height);
	
	//draw gradients
	for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		
		TMP_CTX.beginPath();
		var gradient = TMP_CTX.createRadialGradient(particle.position.x, particle.position.y, particle.radius, particle.position.x, particle.position.y, GRADIENT_RADIUS);
		gradient.addColorStop(0, GRADIENT_STOP0);
		gradient.addColorStop(1, GRADIENT_STOP1);
		TMP_CTX.fillStyle = gradient;
		TMP_CTX.arc(particle.position.x, particle.position.y, particle.radius + GRADIENT_RADIUS, 0, PI_2);
		TMP_CTX.fill();
	}
	
	//filter alpha channel
	var image = TMP_CTX.getImageData(0, 0, TMP_CANVAS.width, TMP_CANVAS.height);
	var imageData = image.data;
	
	for (var i = 0; i < imageData.length; i += 4) {
		j = i + 3;

		if (imageData[j] < MIN_ALPHA_THRESHOLD) {
			imageData[j] = 0;	
		} else if (MIN_ALPHA_THRESHOLD <= imageData[j] && imageData[j] <= MAX_ALPHA_THRESHOLD) {
			imageData[j] = 255;	
		} else if (imageData[j] > MAX_ALPHA_THRESHOLD) {
			imageData[j] = 255;
		}
	}
	
	CTX.putImageData(image, 0, 0);
}


function drawBullets(bullets) {
	for (var i = 0; i < bullets.length; i++) {
		drawCircle(bullets[i].position, BULLET_RADIUS, BULLET_COLOR);	
	}
}

function drawParticles(particles, color) {
	for (var i = 0; i < particles.length; i++) {
		drawCircle(particles[i].position, particles[i].radius, color);
	}
}

function drawExplosions(explosions) {	
	for (var i = 0; i < explosions.length; i++) {
		drawParticles(explosions[i].particles, EXPLOSION_COLOR);	
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

/*
 * Gravitational force
 */
function gravForce(particle1, particle2, dropoff) {
	var r = distance(particle1.position, particle2.position);
	
	if (r < particle1.radius + particle2.radius) {
		return new Vector(0, 0);	
	} else {
		var c = (G * particle1.mass * particle2.mass) * Math.exp(-(dropoff) * r);		
		var d = particle2.position.sub(particle1.position).normalize();	
		return d.scale(c);
	}
}

function addGravity(particles) {
	for (var i = 0; i < particles.length; i++) {
		for (var j = 0; j < particles.length; j++) {
			if (i != j) {
				particles[i].addForce(gravForce(particles[i], particles[j], G_DROPOFF));	
			}
		}
	}
}

/*
 * Ship model generation (equilateral triangle)
 */
function generateShipModel(size) {
	var center = PolarVector(PI / 6, size / (2 * Math.cos(PI / 6)));
	var v1 = new Vector(0, 0).sub(center);
	var v2 = PolarVector(PI / 3, size).sub(center); 
	var v3 = PolarVector(0, size).sub(center);
	return [ v1, v2, v3 ];
}

/*
 * Event Handlers
 */
function upArrowDown() {
	SHIP.accelerating = 1;
}

function upArrowUp() {
	SHIP.accelerating = 0;
}

function leftArrowDown() {
	SHIP.turning = -1;
}

function leftArrowUp() {
	SHIP.turning = 0;
}

function rightArrowDown() {
	SHIP.turning = 1;
}

function rightArrowUp() {
	SHIP.turning = 0;
}

function spaceBarDown() {
	BULLETS.push(new Bullet(SHIP.position, SHIP.orientation, BULLET_SPEED, BULLET_LIFETIME));
}

/*
 * Main loop
 */
function mainLoop() {
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
	addGravity(GLOBS);
	
	updateBullets(BULLETS);
	updateParticles(GLOBS, GLOB_MAX_SPEED, GLOB_DAMPING, true);
	updateShip(SHIP);
	updateExplosions(EXPLOSIONS);
	
	drawGreyGoo(GLOBS);
	drawShip(SHIP, SHIP_MODEL, SHIP_INTERIOR_COLOR, SHIP_BORDER_COLOR);
	drawBullets(BULLETS);
	drawExplosions(EXPLOSIONS);
}

 /*
  * Init
  */
 $(document).ready(function () {	 
 	//setup canvas	 
 	CANVAS = document.getElementById("canvas");
	CTX = CANVAS.getContext("2d");
	
	TMP_CANVAS = document.createElement("canvas");
	TMP_CANVAS.width = CANVAS.width;
	TMP_CANVAS.height = CANVAS.height;
	TMP_CTX = TMP_CANVAS.getContext("2d");	
	
	//setup game
	var canvasCenter = new Vector(CANVAS.width / 2, CANVAS.height / 2);
	
	GLOBS = explosion(canvasCenter, EXPLOSION_MAGNITUDE, GLOB_MASS, GLOB_RADIUS, NUM_GLOBS, 0, true);
	SHIP_MODEL = generateShipModel(SHIP_SIZE);
	
	SHIP = new Ship(canvasCenter, SHIP_MAX_SPEED, SHIP_ACCELERATION, SHIP_TURN_RATE);
	
	//setup events	
	$("body").focus();
	
	$("body").keydown(function (event) {
			handleKeyDownEvent(event);
	});
	
	$("body").keyup(function (event) {
			handleKeyUpEvent(event);
	});
	
	addKeyDownHandler(new KeyEventHandler(KEY_UP_ARROW, upArrowDown));
	addKeyUpHandler(new KeyEventHandler(KEY_UP_ARROW, upArrowUp));

	addKeyDownHandler(new KeyEventHandler(KEY_LEFT_ARROW, leftArrowDown));
	addKeyUpHandler(new KeyEventHandler(KEY_LEFT_ARROW, leftArrowUp));

	addKeyDownHandler(new KeyEventHandler(KEY_RIGHT_ARROW, rightArrowDown));
	addKeyUpHandler(new KeyEventHandler(KEY_RIGHT_ARROW, rightArrowUp));
	
	addKeyDownHandler(new KeyEventHandler(KEY_SPACE_BAR, spaceBarDown));
	
	//run main loop
	setInterval(mainLoop, 1000 / FPS);
});
