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
 * Bullets
 */
function Bullet(position, angle, speed, lifetime) {
	this.position = position;
	this.velocity = PolarVector(angle, speed);
	this.lifetime = lifetime;
	this.age = 0;
	this.lifetime = lifetime;
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
			}
			
			if (bullet.position.x < 0) {
				bullet.position.x = width;
			}
			
			if (bullet.position.y > height) {
				bullet.position.y = 0;
			}
			
			if (bullet.position.y < 0) {
				bullet.position.y = height;
			}
		}
		
		for (var j = 0; j < GLOBS.length; j++) {
			var glob = GLOBS[j];
			
			if (distance(bullet.position, glob.position) < glob.radius + BULLET_RADIUS + GRADIENT_RADIUS / 2) {
				playSound("pop");
				
				GLOBS_DESTROYED++;
				
				bullets.splice(i, 1);
				
				GLOBS.splice(j, 1);
				
				EXPLOSIONS.push(new Explosion(glob.position, GLOB_EXPLOSION_MAGNITUDE, EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, GLOB_EXPLOSION_COLOR));
				
				SCORE += 10;
				
				//apply impuses to surrounding globs
				for (var k = 0; k < GLOBS.length; k++) {
					var glob2 = GLOBS[k];
					
					if (j != k && (distance(glob.position, glob2.position) < glob2.radius + glob.radius + GLOB_BLAST_RADIUS)) {
						var direction = glob2.position.sub(glob.position).normalize();
						var impulse = direction.scale(GLOB_BLAST_MAGNITUDE);
						glob2.addImpulse(impulse);
					}
				}
			}
		}
	}
}

function drawBullets(ctx, bullets) {
	for (var i = 0; i < bullets.length; i++) {
		drawCircle(ctx, bullets[i].position, BULLET_RADIUS, BULLET_COLOR);	
	}
}
