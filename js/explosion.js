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
