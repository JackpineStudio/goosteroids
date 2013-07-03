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

