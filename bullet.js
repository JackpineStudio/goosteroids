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
			
			if (distance(bullet.position, glob.position) < glob.radius + BULLET_RADIUS + GRADIENT_RADIUS / 2) {
				bullets.splice(i, 1);
				GLOBS.splice(j, 1);
				EXPLOSIONS.push(new Explosion(glob.position, EXPLOSION_MAGNITUDE, NUM_PARTICLES, PARTICLE_LIFETIME));
				
				//apply impuses to surrounding globs
				for (var k = 0; k < GLOBS.length; k++) {
					var glob2 = GLOBS[k];
					
					if (j != k && (distance(glob.position, glob2.position) < glob2.radius + glob.radius + EXPLOSION_RADIUS)) {
						var direction = glob2.position.sub(glob.position).normalize();
						var impulse = direction.scale(BLAST_MAGNITUDE);
						glob2.addImpulse(impulse);
					}
				}
			}
		}
	}
}

function drawBullets(bullets) {
	for (var i = 0; i < bullets.length; i++) {
		drawCircle(CTX, bullets[i].position, BULLET_RADIUS, BULLET_COLOR);	
	}
}
