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
