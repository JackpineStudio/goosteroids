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

function random(min, max) {
	return min + Math.random() * (max - min);
}

function drawCircle(ctx, position, radius, color) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(position.x, position.y, radius, 0, PI_2);
	ctx.closePath();
	ctx.fill();
}

function drawPolyLine(ctx, vertices, interiorColor, borderColor, borderWidth, isClosed) {
	ctx.beginPath();
	
	ctx.moveTo(vertices[0].x, vertices[0].y);
	
	for (var i = 1; i < vertices.length; i++) {
		ctx.lineTo(vertices[i].x, vertices[i].y);
	}
	
	if (interiorColor) {
		ctx.fillStyle = interiorColor;
		ctx.fill();
	}
	
	if (borderColor) {
		ctx.lineWidth = borderWidth;
		ctx.strokeStyle = borderColor;
		
		if (isClosed) {
			ctx.closePath();
			ctx.stroke();
		} else {
			ctx.stroke();
		}
	}
	
	
}

function chomp(str, search, replace) {
	return str.replace(new RegExp(search + "$"), replace);
}

function strHash(hash) {
	return JSON.stringify(hash, null, " ");
}

function toUTC(date) {
	return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());	
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;	
}

