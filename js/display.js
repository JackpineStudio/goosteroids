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