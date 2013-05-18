/*
 * Greygoo
 */
function drawGreyGoo(particles) {
	TMP_CTX.clearRect(0, 0, CANVAS_TMP.width, CANVAS_TMP.height);
	
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
	var image = TMP_CTX.getImageData(0, 0, CANVAS_TMP.width, CANVAS_TMP.height);
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


