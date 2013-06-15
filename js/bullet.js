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
				bullets.splice(i, 1);
				GLOBS.splice(j, 1);
				EXPLOSIONS.push(new Explosion(glob.position, GLOB_EXPLOSION_MAGNITUDE, EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, GLOB_EXPLOSION_COLOR));
				SCORE += 10;
				TOTAL_SCORE += 10;
				
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
