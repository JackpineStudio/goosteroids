/*
 * Utility functions
 */
function clamp(c, min, max) {
	if (c < min)
		return min;
	else if (c > max)
		return max
	else
		return c;
}

function drawCircle(ctx, position, radius, color) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(position.x, position.y, radius, 0, PI_2);
	ctx.closePath();
	ctx.fill();
}
