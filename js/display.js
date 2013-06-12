/*
 * Display
 */
function drawScoreDisplay(canvas, ctx, score) {
	var displayPosition = new Vector (canvas.width - 90, 40);
	
	ctx.save();
	
	ctx.font = "bold 20px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText(score, displayPosition.x, displayPosition.y);
	
	ctx.restore();
}

function drawLivesDisplay(canvas, ctx, lives) {
	ctx.save();
	
	ctx.font = "12px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText("Lives  " + lives, 20, 55);

	ctx.restore();
}

function drawAbDisplay(canvas, ctx, abFuel) {
	var displayPosition = new Vector(20, 34);
	
	ctx.save();

	//label
	ctx.font = "12px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText("Turbo", displayPosition.x, displayPosition.y);
	
	//fuel bar background
	ctx.beginPath();
	ctx.rect(displayPosition.x + 40, displayPosition.y - 9, 102, 10);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'black';
	ctx.stroke();
	
	//fuel bar
	ctx.beginPath();
	ctx.rect(displayPosition.x + 41, displayPosition.y - 8, (abFuel / AB_MAX_FUEL) * 100, 8);
	ctx.fillStyle = 'grey';
	ctx.fill();
	
	ctx.restore();
}

function displayRespawnMessage(canvas, ctx, secondsRemaining) {
	var canvasCenter = new Vector(canvas.width / 2, canvas.height / 2);

	ctx.save();

	ctx.font = "bold 16px sans-serif";
	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	ctx.fillText("Respawn in " + secondsRemaining, canvasCenter.x - 15, canvasCenter.y);
	
	ctx.restore();	
}
