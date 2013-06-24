/*
 * Greygoo
 */
function drawGreyGoo(ctx, tmpCtx, particles) {
	tmpCtx.clearRect(0, 0, TMP_CANVAS.width, TMP_CANVAS.height);
	
	//draw gradients
	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		
		tmpCtx.beginPath();
		var gradient = tmpCtx.createRadialGradient(particle.position.x, particle.position.y, particle.radius, particle.position.x, particle.position.y, GRADIENT_RADIUS);
		gradient.addColorStop(0, GRADIENT_STOP0);
		gradient.addColorStop(1, GRADIENT_STOP1);
		tmpCtx.fillStyle = gradient;
		tmpCtx.arc(particle.position.x, particle.position.y, particle.radius + GRADIENT_RADIUS, 0, PI_2);
		tmpCtx.fill();
	}
	
	//filter alpha channel
	var image = tmpCtx.getImageData(0, 0, TMP_CANVAS.width, TMP_CANVAS.height);
	var imageData = image.data;
	
	for (var i = 0; i < imageData.length; i += 4) {
		var j = i + 3;

		if (imageData[j] < MIN_ALPHA_THRESHOLD) {
			imageData[j] = 0;	
		} else if (MIN_ALPHA_THRESHOLD <= imageData[j] && imageData[j] <= MAX_ALPHA_THRESHOLD) {
			imageData[j] = 255;	
		} else if (imageData[j] > MAX_ALPHA_THRESHOLD) {
			imageData[j] = 255;
		}
	}
	
	ctx.putImageData(image, 0, 0);
}


