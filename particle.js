
/*
 * Particles
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

function drawParticles(particles, color) {
	for (var i = 0; i < particles.length; i++) {
		drawCircle(particles[i].position, particles[i].radius, color);
	}
}
