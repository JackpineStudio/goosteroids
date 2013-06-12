/*
 * Gravity
 */
function gravForce(particle1, particle2, gravity, dropoff) {
	var r = distance(particle1.position, particle2.position);
	
	if (r < particle1.radius + particle2.radius) {
		return new Vector(0, 0);	
	} else {
		var c = (gravity * particle1.mass * particle2.mass) * Math.exp(-(dropoff) * r);		
		var d = particle2.position.sub(particle1.position).normalize();	
		return d.scale(c);
	}
}

function addGravity(particles) {
	for (var i = 0; i < particles.length; i++) {
		for (var j = 0; j < particles.length; j++) {
			if (i != j) {
				particles[i].addForce(gravForce(particles[i], particles[j], GRAVITY, GRAVITY_DROPOFF));	
			}
		}
	}
}
