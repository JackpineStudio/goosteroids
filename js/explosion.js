/*
 * Explosions
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

function Explosion(position, magnitude, numParticles, lifetime, color) {
	this.position = position;
	this.particles = explosion(position, magnitude, 1.0, EXPLOSION_PARTICLE_RADIUS, numParticles, false);
	this.age = 0;
	this.lifetime = lifetime;
	this.color = color;
}

function updateExplosions(explosions) {
	for (var i = 0; i < explosions.length; i++) {
		var explosion = explosions[i];
		
		//increase explosion age and destroy explosion if past lifetime
		explosion.age++;
		
		if (explosion.lifetime > 0 && explosion.age > explosion.lifetime) {
			explosion.particles = [];
			explosions.splice(i, 1);
		} else {
			updateParticles(explosion.particles, GLOB_EXPLOSION_MAGNITUDE, EXPLOSION_DAMPING, false);
		}
	}
}

function drawExplosions(ctx, explosions) {	
	for (var i = 0; i < explosions.length; i++) {
		drawParticles(ctx, explosions[i].particles, explosions[i].color);	
	}
}
