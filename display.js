/*
 * Display
 */
function drawScoreDisplay(canvas, ctx, score) {
	var displayPosition = new Vector (canvas.width - 90, 40);
	ctx.font = "bold 20px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText(score, displayPosition.x, displayPosition.y);
}

function drawAbDisplay(canvas, ctx, abFuel) {
	var displayPosition = new Vector(42, 20);
	
	ctx.save();

	//label
	ctx.font = "12px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText("Turbo", 4, 30);
	
	//fuel bar background
	ctx.beginPath();
	ctx.rect(displayPosition.x, displayPosition.y, 102, 10);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'black';
	ctx.stroke();
	
	//fuel bar
	ctx.beginPath();
	ctx.rect(displayPosition.x + 1, displayPosition.y + 1, abFuel, 8);
	ctx.fillStyle = 'grey';
	ctx.fill();
	
	ctx.restore();
}
