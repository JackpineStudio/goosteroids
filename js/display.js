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
 * Display
 */
function drawScoreDisplay(canvas, ctx, score) {
	var displayPosition = new Vector (canvas.width - 100, 50);
	
	ctx.save();
	
	ctx.font = "bold 24px Arial";
	ctx.fillStyle = "white";
	ctx.fillText(score, displayPosition.x, displayPosition.y);
	
	ctx.restore();
}

function drawStageDisplay(canvas, ctx, stage) {
	ctx.save();
	
	ctx.font = "bold 10px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("STAGE", 20, 55);
	ctx.fillText(stage, 60, 55);

	ctx.restore();	
}

function drawLivesDisplay(canvas, ctx, lives) {
	ctx.save();
	
	ctx.font = "bold 10px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("LIVES", 20, 75);
	ctx.fillText(lives, 60, 75);

	ctx.restore();
}

function drawAbDisplay(canvas, ctx, abFuel) {
	var displayPosition = new Vector(20, 34);
	
	ctx.save();

	//label
	ctx.font = "bold 10px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("TURBO", displayPosition.x, displayPosition.y);
	
	//fuel bar background
	ctx.beginPath();
	ctx.rect(displayPosition.x + 43, displayPosition.y - 9, 102, 10);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'white';
	ctx.stroke();
	
	//fuel bar
	ctx.beginPath();
	ctx.rect(displayPosition.x + 44, displayPosition.y - 8, (abFuel / AB_MAX_FUEL) * 100, 8);
	ctx.fillStyle = 'blue';
	ctx.fill();
	
	ctx.restore();
}

function displayRespawnMessage(canvas, ctx, secondsRemaining) {
	var canvasCenter = new Vector(canvas.width / 2, canvas.height / 2);

	ctx.save();

	ctx.font = "bold 18px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = 'center';
	ctx.fillText("RESPAWNING IN " + secondsRemaining, canvasCenter.x, canvasCenter.y);
	
	ctx.restore();	
}
