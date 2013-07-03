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


