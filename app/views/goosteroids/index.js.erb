/* 
 * Constants
 */
var FPS 						= 30;					//30				Frames per second			
var DT 							= 1/FPS;				//1 / FPS 			Delta time		
var DT_2 					 	= DT * DT;				//DT * DT			Delta time squared
														//
var PI							= Math.PI				//					Pi	
var PI_2	 					= 2 * Math.PI;			//2 * PI			Twice pi
														//
var GRAVITY						= 30;					//30				Gravitational constant 
var GRAVITY_DROPOFF				= 0.001;				//0.001				Gravitational dropoff
														//
var GLOB_MAX_SPEED		 		= 400;					//400				Maxiumum particle velocity														//
var GLOB_EXPLOSION_MAGNITUDE	= 250;					//200				Explosion magnitude (particle max velocity)
var GLOB_BLAST_RADIUS			= 30;					//20				Radius of effect
var GLOB_BLAST_MAGNITUDE		= 700;					//300				Impulse to apply to globs in the radius of effect
														//
var GLOB_MASS					= 1;					//1 				Particle mass
var GLOB_CR						= 0.80;					//1.0				Coefficient of restitution
var GLOB_RADIUS					= 5;					//5					Particle radius
var GLOB_DAMPING				= 1;					//1.0				Glob velocity damping
														//
var MAX_ALPHA_THRESHOLD			= 200;					//200				Maximum alpha threshold
var MIN_ALPHA_THRESHOLD			= 150;					//150				Minimum alpha threshold
var GRADIENT_RADIUS 			= GLOB_RADIUS * 3;		//GLOB_RADIUS * 3	Gradient radius multiplier
var GRADIENT_STOP0				= "rgba(80, 80, 80, 1)";//					Gradient color stop 0
var GRADIENT_STOP1				= "rgba(80, 80, 80, 0)";//					Gradient color stop 1
														//
var GLOB_EXPLOSION_COLOR		= "#b0b0b0";			//"#999999"			Explosion color
														//
var BULLET_SPEED				= 650;					//650				Bullet speed
var BULLET_LIFETIME				= 20;					//20				Number of milliseconds bullet is alive
var BULLET_RADIUS				= 2;					//2					Bullet radius
var BULLET_COLOR				= "#ffffff";			//"#000000"			Bullet color
														//
var EXPLOSION_DAMPING			= 0.8;					//0.8				Particle velocity damping
var EXPLOSION_NUM_PARTICLES		= 15;					//15				Number of particles in an explosion
var EXPLOSION_PARTICLE_RADIUS	= 2;					//2					Particle radius
var EXPLOSION_PARTICLE_LIFETIME = 20;					//15				Particle lifetime
														//
var SHIP_EXPLOSION_MAGNITUDE	= 1000;					//1000				Explosion magnitude (particle max velocity)
var SHIP_EXPLOSION_BORDER_COLOR	= "black";				//"black"			Explosion border color 1
var SHIP_EXPLOSION_INTERIOR_COLOR = "white";			//"white"			Explosion interior 1
var SHIP_EXPLOSION_SPARK_COLOR1	= "yellow";				//"yellow"			Explosion spark color 1
var SHIP_EXPLOSION_SPARK_COLOR2	= "red";				//"red"				Explosion spark color 2
														//
var SHIP_GUN_COOLDOWN			= 6;					//5					Minimum time between shots
var SHIP_MAX_SPEED				= 400;					//400				Max ship speed
var SHIP_ACCELERATION			= 500;					//300				Ship acceleration magnitude
var SHIP_TURN_RATE				= PI_2 / (FPS * 0.04);	//
var SHIP_DAMPING				= 0.5;					//					Ship velocity damping
														//
var SHIP_MODEL					= [];					//[]				Ship model (array of vectors)
var SHIP_MODEL_BASE				= 15;					//15				Ship model base length
var SHIP_MODEL_HEIGHT			= 25;					//25				Ship model height
var SHIP_INTERIOR_COLOR 		= "#e95258";			//"#ffffff"			Ship interior color
var SHIP_BORDER_COLOR			= "#ffffff";			//"#000000"			Ship border color
var SHIP_BORDER_WIDTH			= 3;					//3					Ship border width
														//
var AB_ACCELERATION				= 6 * SHIP_ACCELERATION;//					Afterburner acceleration
var AB_FUEL_CONSUMPTION			= 5;					//5					Afterburner fuel consumption
var AB_FUEL_RECHARGE_RATE		= 2;					//3					Fuel recharge per tick
var AB_MAX_FUEL					= 100;					//100				Max afterburer fuel
var AB_COOLDOWN					= 60;					//60				Afterburner Cooldown
var AB_SHIP_MAX_SPEED			= 2.25 * SHIP_MAX_SPEED;//2.5x				Afterburner ship max speed 
														//
var FLAMES_COLOR  				= "blue";				//
var FLAMES_THICKNESS  			= 3;
var FLAMES_INTERIOR_COLOR  		= "#ffffff";			//
var FLAMES_MAGNITUDE			= 6;					//
var FLAMES_STEP					= 2;					//
var FLAMES_AB_MAGNITUDE			= 17;					//
var FLAMES_AB_STEP				= 3;					//
														//
var RESPAWN_DELAY				= 3 * FPS;				// 
var RESPAWN_FRAMES_REMAINING	= 0;					// 
														//
var CANVAS 						= null;					//null				Canvas
var TMP_CANVAS		 			= null;					//null				Temporary canvas
														//
var CTX 						= null;					//null				2D context
var TMP_CTX			 			= null;					//null				Temporary 2D context
														//
var SHIP						= null;					//null				Ship object
var GLOBS	 					= [];					//[]				Array of particles
var BULLETS						= [];					//[]				Bullets
var EXPLOSIONS					= [];					//[]				Array of explosions
														//
var KEY_DOWN_EVENT_HANDLERS		= [];					//					Key down event handlers
var KEY_UP_EVENT_HANDLERS		= [];					//					Key up event handlers													
														//
var KEY_UP_ARROW 				= 38;					//					Up arrow key code
var KEY_DOWN_ARROW 				= 40;					//					Down arrow key code
var KEY_LEFT_ARROW				= 37;					//					Left arrow key code
var KEY_RIGHT_ARROW				= 39;					//					Right arrow key code
var KEY_SPACE_BAR				= 32;					//					Space bar key code
var KEY_SHIFT					= 16;					//					Shift key						
														//
var PLAYER_NAME 				= "";					//											
														//
var STAGE						= 1;					//1					Stage
var SCORE						= 0;					//0					Score
var LIVES						= 3;					//3					Lives
var GLOBS_DESTROYED				= 0;					//					Number of globs destroyed this update
														//
var MAIN_LOOP_ID				= null;					//null
var UPDATE_LOOP_ID				= null;					//null
var UPDATE_LOOP_INTERVAL		= 10000;				//10 * 1000
														//
var SESSION_ID = "<%= @session_id %>";					//
var GAME_ID 					= 0;					//
														//
var SOUND_ENABLED				= true;					//
var SOUND_READY					= false;				//
var SOUND_MUSIC_VOLUME			= 0.4;					//
var SOUND_EFFECTS_VOLUME		= 1;					//
														//
var DEBUG_MODE 					= false;				//

/*
 * Game setup
 */
function spawnShip() {
	var canvasCenter = new Vector(CANVAS.width / 2, CANVAS.height / 2);
	SHIP = new Ship(canvasCenter, SHIP_MAX_SPEED, SHIP_DAMPING, SHIP_ACCELERATION, SHIP_TURN_RATE);
	SHIP.orientation = -PI / 2;
}

function respawn() {
	if (!SHIP.alive && RESPAWN_FRAMES_REMAINING > 0) {
		RESPAWN_FRAMES_REMAINING--;
		
		var secondsUntilRespawn = Math.ceil(RESPAWN_FRAMES_REMAINING / FPS);
		
		if (secondsUntilRespawn > 0) {
			displayRespawnMessage(CANVAS, CTX, secondsUntilRespawn);
		}
	} else if (!SHIP.alive && RESPAWN_FRAMES_REMAINING == 0) {
		spawnShip();
	}
}

/*
 * Main loop
 */
function mainLoop() {
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
	
	if (GLOBS.length == 0) {
		BULLETS = [];
		
		stageOver();
	}
	
	addGravity(GLOBS);
	
	updateBullets(BULLETS);
	updateParticles(GLOBS, GLOB_MAX_SPEED, GLOB_DAMPING, true);
	updateShip(SHIP, SHIP_MODEL);
	updateExplosions(EXPLOSIONS);
	
	drawGreyGoo(CTX, TMP_CTX, GLOBS);
	drawShip(CTX, SHIP, SHIP_MODEL, SHIP_INTERIOR_COLOR, SHIP_BORDER_COLOR, SHIP_BORDER_WIDTH);
	
	if (SHIP.accelerating && !SHIP.abActivated) {
		var flames = generateEngineFlames(SHIP_MODEL_BASE, SHIP_MODEL, FLAMES_STEP, FLAMES_MAGNITUDE);
		drawEngineFlames(CTX, SHIP, flames, null, FLAMES_COLOR, FLAMES_THICKNESS);
	}
	
	if (SHIP.accelerating && SHIP.abActivated && SHIP.abFuel > 0) {
		var flames = generateEngineFlames(SHIP_MODEL_BASE, SHIP_MODEL, FLAMES_AB_STEP, FLAMES_AB_MAGNITUDE);
		drawEngineFlames(CTX, SHIP, flames, null, FLAMES_COLOR, FLAMES_THICKNESS);		
	}
	
	drawBullets(CTX, BULLETS);
	drawExplosions(CTX, EXPLOSIONS);
	
	drawAbDisplay(CANVAS, CTX, SHIP.abFuel);
	drawStageDisplay(CANVAS, CTX, STAGE);
	drawLivesDisplay(CANVAS, CTX, LIVES);
	
	drawScoreDisplay(CANVAS, CTX, SCORE);
	
	//end game if player is out of lives
	if (LIVES < 0) {
		gameOver();
		return;
	}
	
	//if ship is dead and cooldown is over then respawn ship
	respawn();
}

function startGameLoop() {
	MAIN_LOOP_ID = setInterval(mainLoop, 1000 / FPS);
}

function stopGameLoop() {
	clearInterval(MAIN_LOOP_ID);
}

/*
 * Update loop
 */
function updateLoop() {	
	updateGame(GLOBS_DESTROYED);
	GLOBS_DESTROYED	= 0;
}

function startUpdateLoop() {
	UPDATE_LOOP_ID = setInterval(updateLoop, UPDATE_LOOP_INTERVAL);
}

function stopUpdateLoop() {
	clearInterval(UPDATE_LOOP_ID);
}

/*
 * Game actions
 */

function showInstructions() {
	$("#introduction").fadeOut(2000);
	$("#instructions").fadeIn(2000);
}

function playMusic() {
	playSound("music-1", 0.5, 0, function () {
		pla
	});
}

function playGame() {
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
	
	PLAYER_NAME = "";
	
	SCORE = 0;
	STAGE = 1;
	LIVES = 3;
	
	GLOBS_DESTROYED	= 0;
	
	GLOBS = [];
	BULLETS	= [];
	EXPLOSIONS = [];
	
	spawnShip();
	
	enableEventHandlers();
	
	playMusic();
	
	$("#instructions").stop();
	
	$('#stageMessage').html("Stage " + STAGE);
	
	$("#instructions:visible").fadeOut(2000);
	
	$('#stage').fadeIn(2000, function () {
		setTimeout(function () {
			$('#game').show();
			
			$('#stage').fadeOut(2000, function () {
				newGame(function (data) {
					GAME_ID = data.game_id;
					loadSettings(function () {
						startGameLoop();
						startUpdateLoop();
						
					});
				});
			});
		}, 500);
	});	
}

function stageOver() {
	stopUpdateLoop();
	stopGameLoop();
	
	updateGame(GLOBS_DESTROYED, function () {
		endStage(function () {
			$('#stageMessage').html("Stage " + STAGE);
			
			$('#stage').fadeIn(2000, function () {
				setTimeout(function () {
					$('#stage').fadeOut(2000);
					$('#game').fadeIn(2000);
					
					loadSettings(function () {
						spawnShip();
						startGameLoop();
						startUpdateLoop();
					});
					
				}, 500);
			});
		});
	});
	
	GLOBS_DESTROYED	= 0;
}

function gameOver() {
	disableEventHandlers();
	stopUpdateLoop();
	stopGameLoop();
	
	updateGame(GLOBS_DESTROYED, function () {
		endGame(function (data) {
			$("#gameOver").show();
			$('#game').fadeOut(2000, function () {
				if (data.high_score) {
					showHighScorePrompt(highScores);
				} else {
					highScores();	
				}
			});
		});
	});
	
	GLOBS_DESTROYED	= 0;
}

function highScores() {
	getHighScores(function (data) {
		var high_scores = data.high_scores;
		
		$("#score").text(SCORE);
		
		$("table.highScores tr:not(.table-header)").remove();
		
		for (var i = 0; i < high_scores.length; i++) {
			var rowHTML = "<tr>";
			
			rowHTML += "<td>" + high_scores[i].player_name + "</td>";
			rowHTML += "<td>" + high_scores[i].stage + "</td>";
			rowHTML += "<td>" + high_scores[i].score + "</td>";
			rowHTML += "<td>" + high_scores[i].time + "</td>";
			
			rowHTML += "</tr>";
			
			$("table.highScores").append(rowHTML);
		}
		
		$("#highScores").show();
		$("#gameOver").fadeOut(2000);
	});
}

/*
 * Initialize game
 */
function initGame(callback) {
	if (SOUND_ENABLED && !SOUND_READY) {
		setTimeout(function () {
			initGame(callback);
		}, 1000);	
	}
	
 	//setup canvas	 
 	CANVAS = document.getElementById("canvas");
	CTX = CANVAS.getContext("2d");
	
	//setup temporary canvase
	TMP_CANVAS = document.createElement("canvas");
	TMP_CANVAS.width = CANVAS.width;
	TMP_CANVAS.height = CANVAS.height;
	TMP_CTX = TMP_CANVAS.getContext("2d");	
	
	//setup game
	SHIP_MODEL = generateShipModel(SHIP_MODEL_BASE, SHIP_MODEL_HEIGHT);
	
	//spawn ship	
	spawnShip();
	
	//setup events
	$("body").focus();
	
	$("body").keydown(function (event) {
		handleKeyDownEvent(event);
	});
	
	$("body").keyup(function (event) {
		handleKeyUpEvent(event);
	});
	
	//register event handlers
	addKeyDownHandler(new KeyEventHandler(KEY_UP_ARROW, upArrowDown));
	addKeyUpHandler(new KeyEventHandler(KEY_UP_ARROW, upArrowUp));

	addKeyDownHandler(new KeyEventHandler(KEY_LEFT_ARROW, leftArrowDown));
	addKeyUpHandler(new KeyEventHandler(KEY_LEFT_ARROW, leftArrowUp));

	addKeyDownHandler(new KeyEventHandler(KEY_RIGHT_ARROW, rightArrowDown));
	addKeyUpHandler(new KeyEventHandler(KEY_RIGHT_ARROW, rightArrowUp));
	
	addKeyDownHandler(new KeyEventHandler(KEY_SPACE_BAR, spaceBarDown));
	addKeyUpHandler(new KeyEventHandler(KEY_SPACE_BAR, spaceBarUp));
		
	addKeyDownHandler(new KeyEventHandler(KEY_SHIFT, shiftDown));
	addKeyUpHandler(new KeyEventHandler(KEY_SHIFT, shiftUp));
	
	callback.call(this);
}

$(document).ready(function () {
	initSound(function () {
		initGame(function () {
			setTimeout(showInstructions, 2000);
		});
	});
});
var UPDATING = false;

function error(data) {
	return data.type.valueOf() == "error";
}

function handleError(data) {
	if (data.type.valueOf() == "error") {
		stopUpdateLoop();
		stopGameLoop();
		
		var message = data.error_message; 
		
		if (DEBUG_MODE) {
			console.log(message);
		}
		
		showErrorDialog(message, function () {
			window.location="/";	
		});
	}
}

function handleAjaxFailure(textStatus, errorThrown) {
	stopUpdateLoop();
	stopGameLoop();
	
	var message = "Ajax failure: " + textStatus + " (" + errorThrown + ")";
	
	if (DEBUG_MODE) {
		console.log(message);
	}
	
	showErrorDialog(message, function () {
		window.location="/";	
	});
}

function sendAjaxRequest(url, data, callback) {
	data.session_id = SESSION_ID;
	
	if (DEBUG_MODE) {
		console.log("ajax request: " + url + ", data: " + strHash(data));
	}
	
	var request = $.ajax({
		url: url,
		type: "POST",
		timeout: 2000,
		dataType: "json",
		cache: false,
		data: data
	});

	request.done(function(data, textStatus, jqXHR) {
		if (DEBUG_MODE) {
			console.log("ajax response: " + url + ", status: " + textStatus + ", data: " + strHash(data));
		}
		
		if (error(data)) {
			handleError(data);
		} else {
			if (callback) {
				callback.call(this, data);
			}
		}
	});
	
	request.fail(function(jqXHR, textStatus, errorThrown) {
		if (DEBUG_MODE) {
			console.log("ajax response: " + url + ", status: " + textStatus + ", error: " + errorThrown);
		}
		
		handleAjaxFailure(textStatus, errorThrown);
	});
}

function newGame(callback) {
	sendAjaxRequest("goosteroids/new_game.json", {}, callback);
}

function loadSettings(callback) {
	var data = { game_id: GAME_ID };
	
	sendAjaxRequest("goosteroids/get_settings.json", data, function (data) {
		GRAVITY					= data.settings.gravity;
		GRAVITY_DROPOFF			= data.settings.gravity_dropoff;
		GLOB_MAX_SPEED			= data.settings.glob_max_speed;
		GLOB_BLAST_RADIUS		= data.settings.glob_blast_radius;
		GLOB_BLAST_MAGNITUDE	= data.settings.glob_blast_magnitude;		
		GLOB_CR					= data.settings.glob_cr;	
		
		addBlobs(data.settings.blobs);
	
		if (callback) {
			callback.call(this, data);
		}
	});
}

function updateGame(globsDestroyed, callback) {
	if (!UPDATING) {
		UPDATING = true;
		
		var data = { game_id: GAME_ID, lives: LIVES, globs_destroyed: globsDestroyed, client_time: toUTC(new Date()) };
		
		sendAjaxRequest("goosteroids/update_game.json", data, function (data) {
			UPDATING = false;
			
			if (callback) {
				callback.call(this, data);
			}
		});
	} else {
		setTimeout(function () {
			updateGame(callback);		
		}, 1000);
	}
}

function endStage(callback) {	
	var data = { game_id: GAME_ID };
	sendAjaxRequest("goosteroids/end_stage.json", data, function (data) {
		STAGE++;
		GLOBS_DESTROYED = 0;
		
		if (callback) {
			callback.call(this, data);
		}
	});
}

function endGame(callback) {	
	var data = { game_id: GAME_ID };
	sendAjaxRequest("goosteroids/end_game.json", data, callback);
}

function setPlayerName(name, callback) {
	var data = { game_id: GAME_ID, name: name };
	sendAjaxRequest("goosteroids/set_player_name.json", data, callback);
}

function getHighScores(callback) {
	sendAjaxRequest("goosteroids/get_high_scores.json", {}, callback);
}
/*
 * Blobs
 */
function createBlob(numGlobs, position, orientation, speed) {
	var globs = explosion(position, GLOB_EXPLOSION_MAGNITUDE, GLOB_MASS, GLOB_RADIUS, numGlobs, true);
	
	for (var i = 0; i < globs.length; i++) {
		globs[i].velocity = PolarVector(orientation, speed);
	}
	
	return globs;
}

function addBlobs(blobs) {
	for (var i = 0; i < blobs.length; i++) {
		var blob = createBlob(blobs[i].size, new Vector(random(0, $("#canvas").width()-1), random(0, $("#canvas").height()-1)),
	 					  	  random(0, PI_2),
	 					  	  blobs[i].speed);
	 				      
	 	for (var j = 0; j < blob.length; j++) {
	 		GLOBS.push(blob[j]);
	 	}
	}
}

/*
 * Bullets
 */
function Bullet(position, angle, speed, lifetime) {
	this.position = position;
	this.velocity = PolarVector(angle, speed);
	this.lifetime = lifetime;
	this.age = 0;
	this.lifetime = lifetime;
}

function updateBullets(bullets) {
	var width = CANVAS.width - 1;
	var height = CANVAS.height - 1;
	
	for (var i = 0; i < bullets.length; i++) {
		var bullet = bullets[i];
		
		//increase bullet age and destroy bullet if past lifetime
		bullet.age++;
		
		if (bullet.lifetime > 0 && bullet.age > bullet.lifetime) {
			bullets.splice(i, 1);
		} else {
			bullet.position = bullet.position.add(bullet.velocity.scale(DT));
			
			//bounds check
			if (bullet.position.x > width) {
				bullet.position.x = 0;
			}
			
			if (bullet.position.x < 0) {
				bullet.position.x = width;
			}
			
			if (bullet.position.y > height) {
				bullet.position.y = 0;
			}
			
			if (bullet.position.y < 0) {
				bullet.position.y = height;
			}
		}
		
		for (var j = 0; j < GLOBS.length; j++) {
			var glob = GLOBS[j];
			
			if (distance(bullet.position, glob.position) < glob.radius + BULLET_RADIUS + GRADIENT_RADIUS / 2) {
				GLOBS_DESTROYED++;
				
				bullets.splice(i, 1);
				
				GLOBS.splice(j, 1);
				
				EXPLOSIONS.push(new Explosion(glob.position, GLOB_EXPLOSION_MAGNITUDE, EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, GLOB_EXPLOSION_COLOR));
				
				SCORE += 10;
				
				//apply impuses to surrounding globs
				for (var k = 0; k < GLOBS.length; k++) {
					var glob2 = GLOBS[k];
					
					if (j != k && (distance(glob.position, glob2.position) < glob2.radius + glob.radius + GLOB_BLAST_RADIUS)) {
						var direction = glob2.position.sub(glob.position).normalize();
						var impulse = direction.scale(GLOB_BLAST_MAGNITUDE);
						glob2.addImpulse(impulse);
					}
				}
			}
		}
	}
}

function drawBullets(ctx, bullets) {
	for (var i = 0; i < bullets.length; i++) {
		drawCircle(ctx, bullets[i].position, BULLET_RADIUS, BULLET_COLOR);	
	}
}
function showDialog(title, message, buttons, prompt, onClose) {
	$("#dialogTitle").text(title);
	$("#dialogMessage").html(message);
	
	if (prompt) {
		$("#dialogInput").show();
		$("#dialogInput").val("");
	} else {
		$("#dialogInput").hide();
	}
	
	$("#dialogFooter").html("");
	
	for (var i = 0; i < buttons.length; i++) {
		var buttonHTML = "";
		
		if (buttons.length == 2 && i == 0) {
			buttonHTML = "<div class='dialog-button' style='text-align:right;'>";
		} else if (buttons.length == 2 && i == 1) {
			buttonHTML = "<div class='dialog-button' style='text-align:left;'>";
		} else {
			buttonHTML = "<div class='dialog-button'>";
		}
		
		buttonHTML += "<button class='dialog-button'>" + buttons[i].label + "</button></div>";
		
		$("#dialogFooter").append(buttonHTML);
		
		if (buttons[i].click) {
			$("button.dialog-button").eq(i).click(buttons[i].click);
		}
	}
	
	if (onClose) {
		$("#dialog").modal( { onClose: onClose } );
	} else {
		$("#dialog").modal();
	}
}

function showErrorDialog(message, onClose) {
	var closeButton = { 
		label: "Close", 
		click:  function () { $.modal.close(); } 
	};
	
	showDialog("ERROR!", message, [ closeButton ], false, onClose);
}

function showHighScorePrompt(onClose) {
	var message = "Congratulations you got a high score!<br>Brag about it by entering your name below:<br><br>"
	
	var submitButton = { 
		label: "Submit",
		click:  function () {
			var name = $("#dialogInput").val();
			
			if (!name || name.trim().length == 0) {
				$("#dialogMessage").html("Bragging requires a name!<br>Please enter your name below:<br><br>");
			} else {
				$.modal.close();
				
				PLAYER_NAME = name;
				
				setPlayerName(name, function () {
					if (onClose) {
						onClose();
					}
				});
			}
		}
	};
	
	var cancelButton = { 
		label: "Cancel", 
		click:  function () {
			$.modal.close();
			
			if (onClose) {
				onClose();
			}
		} 
	};
	
	showDialog("HIGH SCORE!", message, [ submitButton, cancelButton ], true);
}

function showTwitterPrompt() {
	var message = "Please enter your name below to tweet your score:<br><br>"
	
	var submitButton = { 
		label: "Submit",
		click:  function () {
			var name = $("#dialogInput").val();
			
			if (!name || name.trim().length == 0) {
				$("#dialogMessage").html("Names contain characters silly!<br>Please enter your name below to tweet your score:<br><br>");
			} else {
				var text = name + " got a score of " + SCORE + " playing";
				openTwitterWindow(text, "Goosteroids");
				
				$.modal.close();
				
				setPlayerName(name);
			}
		}
	};
	
	var cancelButton = { 
		label: "Cancel", 
		click:  function () {
			$.modal.close();
		} 
	};
	
	showDialog("ENTER PLAYER NAME", message, [ submitButton, cancelButton ], true);
}
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
/*
 * Events
 */
var KEY_EVENTS_ENABLED = false;

function enableEventHandlers() {
	KEY_EVENTS_ENABLED = true;
}

function disableEventHandlers() {
	KEY_EVENTS_ENABLED = false;
}

function KeyEventHandler(key, action) {
	this.key = key;
	this.action = action;
}

function addKeyDownHandler(handler) {
	KEY_DOWN_EVENT_HANDLERS.push(handler);
}

function addKeyUpHandler(handler) {
	KEY_UP_EVENT_HANDLERS.push(handler);
}

function handleKeyDownEvent(event) {
	if (KEY_EVENTS_ENABLED) {
		for (var i = 0; i < KEY_DOWN_EVENT_HANDLERS.length; i++) {
			var handler = KEY_DOWN_EVENT_HANDLERS[i];
			
			if (handler.key == event.which) {
				handler.action();
				event.preventDefault();
			}
		}
	}
}

function handleKeyUpEvent(event) {
	if (KEY_EVENTS_ENABLED) {
		for (var i = 0; i < KEY_UP_EVENT_HANDLERS.length; i++) {
			var handler = KEY_UP_EVENT_HANDLERS[i];
			
			if (handler.key == event.which) {
				handler.action();
				event.preventDefault();
			}
		}
	}
}

/*
 * Event Handlers
 */
function upArrowDown() {
	SHIP.accelerating = 1;
}

function upArrowUp() {
	SHIP.accelerating = 0;
}

function leftArrowDown() {
	SHIP.turning = -1;
}

function leftArrowUp() {
	SHIP.turning = 0;
}

function rightArrowDown() {
	SHIP.turning = 1;
}

function rightArrowUp() {
	SHIP.turning = 0;
}

function spaceBarDown() {
	SHIP.gunFiring = true;
}

function spaceBarUp() {
	SHIP.gunFiring = false;
}

function shiftDown() {
	SHIP.abActivated = true;	
}

function shiftUp() {
	SHIP.abActivated = false;
	SHIP.abCooldown = AB_COOLDOWN;
}
/*
 * Explosions
 */
function explosion(position, magnitude, particleMass, particleRadius, numParticles, collisions) {
	var particles = [];
	
	for (var i = 0; i < numParticles; i++) {
		var velocity = new PolarVector(Math.random() * PI_2, Math.random() * magnitude);
		var particle = new Particle(particleMass, particleRadius, position.add(velocity.scale(DT)), velocity);	
		particles.push(particle);
	}
	
	return particles;
}

function Explosion(position, magnitude, numParticles, lifetime, color) {
	this.position = position;
	this.particles = explosion(position, magnitude, 1.0, EXPLOSION_PARTICLE_RADIUS, numParticles, false);
	this.age = 0;
	this.lifetime = lifetime;
	this.color = color;
}

function updateExplosions(explosions) {
	for (var i = 0; i < explosions.length; i++) {
		var explosion = explosions[i];
		
		//increase explosion age and destroy explosion if past lifetime
		explosion.age++;
		
		if (explosion.lifetime > 0 && explosion.age > explosion.lifetime) {
			explosion.particles = [];
			explosions.splice(i, 1);
		} else {
			updateParticles(explosion.particles, GLOB_EXPLOSION_MAGNITUDE, EXPLOSION_DAMPING, false);
		}
	}
}

function drawExplosions(ctx, explosions) {	
	for (var i = 0; i < explosions.length; i++) {
		drawParticles(ctx, explosions[i].particles, explosions[i].color);	
	}
}
/*
 * Gravity
 */
function gravForce(particle1, particle2, gravity, dropoff) {
	var r = distance(particle1.position, particle2.position);
	
	if (r < particle1.radius + particle2.radius) {
		return new Vector(0, 0);	
	} else {
		var c = (gravity * particle1.mass * particle2.mass) * Math.exp(-(dropoff) * r);		
		var d = particle2.position.sub(particle1.position).normalize();	
		return d.scale(c);
	}
}

function addGravity(particles) {
	for (var i = 0; i < particles.length; i++) {
		for (var j = 0; j < particles.length; j++) {
			if (i != j) {
				particles[i].addForce(gravForce(particles[i], particles[j], GRAVITY, GRAVITY_DROPOFF));	
			}
		}
	}
}
/*
 * Greygoo
 */
function drawGreyGoo(ctx, tmpCtx, particles) {
	tmpCtx.clearRect(0, 0, TMP_CANVAS.width, TMP_CANVAS.height);
	
	//draw gradients
	for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		
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



/*
 * Particles
 */
function Particle(mass, radius, position, velocity) {
	this.radius = radius;
	this.mass = mass;
	this.position = position;
	this.velocity = velocity;
	this.acceleration = new Vector(0, 0);
	this.forces = [];
}

Particle.prototype.inverseMass = function () {
	return (1.0 / this.mass);	
}

Particle.prototype.applyForces = function () {
	var netForce = new Vector(0, 0);
	
	for (var i = 0; i < this.forces.length; i++) {
		netForce = netForce.add(this.forces[i]);
	}
	
	this.acceleration = netForce.scale(this.inverseMass());
}

Particle.prototype.addForce = function (force) {
	this.forces.push(force);
}

Particle.prototype.clearForces = function () {
	this.forces = [];
}

Particle.prototype.addImpulse = function (impulse) {
	this.velocity = this.velocity.add(impulse.scale(this.inverseMass()));
}

/*
 * Particle collision contact
 */
function ParticleContact(particle1, particle2) {
	this.particle1 = particle1;
	this.particle2 = particle2;
	this.contactNormal = particle2.position.sub(particle1.position).normalize();
	this.interpenetrationDepth = particle1.radius + particle2.radius - distance(particle1.position, particle2.position);
}

ParticleContact.prototype.resolveInterpenetration = function () {
	var totalInverseMass = this.particle1.inverseMass() + this.particle2.inverseMass();
	this.particle1.position = this.particle1.position.add(this.contactNormal.scale(-1.0 * (this.particle1.mass * totalInverseMass) * this.interpenetrationDepth));
	this.particle2.position = this.particle2.position.add(this.contactNormal.scale((this.particle2.mass * totalInverseMass) * this.interpenetrationDepth));
}

ParticleContact.prototype.resolveVelocity = function() {
	var relativeVelocity = this.particle2.velocity.sub(this.particle1.velocity); 
	var separatingVelocity = relativeVelocity.dot(this.contactNormal);
	
	if (separatingVelocity > 0) {
		return;
	}
	
	var newSeparatingVelocity = -1.0 * GLOB_CR * separatingVelocity;
	var deltaSeparatingVelocity = newSeparatingVelocity - separatingVelocity;
	
	var totalInverseMass = this.particle1.inverseMass() + this.particle2.inverseMass();
	var impulseMagnitude = deltaSeparatingVelocity / totalInverseMass;
	
	var impulse = this.contactNormal.scale(impulseMagnitude);
	
	this.particle1.addImpulse(impulse.scale(-1.0));
	this.particle2.addImpulse(impulse);
}


function updateParticles(particles, maxSpeed, velocityDamping, collisions) {
	var width = CANVAS.width - 1;
	var height = CANVAS.height - 1;
	var contacts = [];
	
	
	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		
		//apply forces
		particle.applyForces();
		
		//clear forces
		particle.clearForces();
		
		//update position/velocity
		particle.velocity = particle.velocity.scale(Math.pow(velocityDamping, DT)).add(particle.acceleration.scale(DT));	
		particle.velocity = particle.velocity.normalize().scale(clamp(particle.velocity.norm(), 0, maxSpeed));
		particle.position = particle.position.add(particle.velocity.scale(DT)).add(particle.acceleration.scale(DT_2));
		
		//bounds check
		if (particle.position.x > width) {
			particle.position.x = 0;
		}
		
		if (particle.position.x < 0) {
			particle.position.x = width;
		}
		
		if (particle.position.y > height) {
			particle.position.y = 0;
		}
		
		if (particle.position.y < 0) {
			particle.position.y = height;
		}
		
		if (collisions) {			
			//collision detection: contact generation (check all pairs of particles)
			for (var j = i + 1; j < particles.length; j++) {
				var particle2 = particles[j];
				
				if (distance(particle.position, particle2.position) < particle.radius + particle2.radius) {
					contacts.push(new ParticleContact(particle, particle2));
				}
			}
		}
	}
	
	if (collisions) {			
		//velocity and interpenetration resolution
		for (var j = 0; j < contacts.length; j++) {
			contacts[j].resolveInterpenetration();
			contacts[j].resolveVelocity();	
		}
	}
}

function drawParticles(ctx, particles, color) {
	for (var i = 0; i < particles.length; i++) {
		drawCircle(ctx, particles[i].position, particles[i].radius, color);
	}
}
/*
 * Ship
 */
function Ship(position, maxSpeed, damping, acceleration, turnRate) {
	this.alive = true;					//true if ship is alive
	this.gunFiring = false;
	this.gunCooldown = 0;				//gun cooldown
	this.abActivated = false;			//afterburner is activated
	this.abCooldown = 0;				//afterburner cooldown
	this.abFuel = AB_MAX_FUEL;			//afterburner fuel
	this.position = position;
	this.orientation = 0;				//angle
	this.velocity = new Vector(0, 0);
	this.maxSpeed = maxSpeed;
	this.damping = damping;
	this.acceleration = acceleration;	//acceleration magnitude
	this.turnRate = turnRate;			//radians per frame
	this.turning = 0;					//turning coefficient
	this.accelerating = 0;				//acceleration coefficient
}

function updateShip(ship, shipModel) {
	if (ship.alive) {
		var width = CANVAS.width - 1;
		var height = CANVAS.height - 1;
		
		var acceleration = PolarVector(ship.orientation, 1).scale(ship.accelerating * ship.acceleration);
		
		ship.velocity = ship.velocity.scale(Math.pow(ship.damping, DT)).add(acceleration.scale(DT));
		ship.velocity = ship.velocity.normalize().scale(clamp(ship.velocity.norm(), 0, ship.maxSpeed));
		ship.position = ship.position.add(ship.velocity.scale(DT)).add(acceleration.scale(DT_2));
		ship.orientation += ship.turning * ship.turnRate * DT;
		
		//bounds check
		if (ship.position.x > width) {
			ship.position.x = 0;
		}
		
		if (ship.position.x < 0) {
			ship.position.x = width;
		}
		
		if (ship.position.y > height) {
			ship.position.y = 0;
		}
		
		if (ship.position.y < 0) {
			ship.position.y = height;
		}
		
		//check if ship has collided with glob(s)
		for (var i = 0; i < GLOBS.length; i++) {
			var glob = GLOBS[i];
			
			//write glob position in ship's coordinate frame
			var globPosition = glob.position.sub(ship.position);
			globPosition = PolarVector(globPosition.angle() - ship.orientation + PI / 2, globPosition.norm());
			
			if (circleIntersectTriangle(globPosition, glob.radius + (1/4) * GRADIENT_RADIUS, shipModel[0], shipModel[1], shipModel[2])) {
				ship.alive = false;
				LIVES--;
				RESPAWN_FRAMES_REMAINING = RESPAWN_DELAY;
				EXPLOSIONS.push(new Explosion(ship.position, 5*SHIP_EXPLOSION_MAGNITUDE, 1.5*EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_BORDER_COLOR));
				EXPLOSIONS.push(new Explosion(ship.position, 2*SHIP_EXPLOSION_MAGNITUDE, 5*EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_INTERIOR_COLOR));
				EXPLOSIONS.push(new Explosion(ship.position, SHIP_EXPLOSION_MAGNITUDE/3, EXPLOSION_NUM_PARTICLES, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_SPARK_COLOR1));
				EXPLOSIONS.push(new Explosion(ship.position, SHIP_EXPLOSION_MAGNITUDE/3, EXPLOSION_NUM_PARTICLES/2, EXPLOSION_PARTICLE_LIFETIME, SHIP_EXPLOSION_SPARK_COLOR2));
				return;
			}
		}
		
		//update gun
		if (ship.gunCooldown > 0) {
			ship.gunCooldown--;	
		}
		
		//if gun is firing and gun is ready to fire
		if (ship.gunFiring && ship.gunCooldown == 0) {
			//find position of front of ship
			var shipBow = SHIP_MODEL[1];
			shipBow = PolarVector(shipBow.angle() + ship.orientation - PI/2, shipBow.norm() + 2*SHIP_BORDER_WIDTH);
			shipBow = shipBow.add(ship.position);
			
			//fire bullet
			BULLETS.push(new Bullet(shipBow, ship.orientation, BULLET_SPEED, BULLET_LIFETIME));
			playSound("laser");
			
			//set cooldown
			ship.gunCooldown = SHIP_GUN_COOLDOWN;
		}
		
		//update afterburner
		if (ship.abCooldown > 0) {
			ship.abCooldown--;
		}
		
		//reminder: everytime the shift button is pressed, the cooldown is activated
		if (ship.abActivated) {
			//afterburner is activated
			
			//there is fuel in the tank
			if (ship.abFuel > 0) {
				//engines set to turbo acceleration and max velocity
				//drain the fuel a bit
				ship.acceleration = AB_ACCELERATION;
				ship.maxSpeed = AB_SHIP_MAX_SPEED;
				ship.abFuel -= AB_FUEL_CONSUMPTION;
				ship.abFuel = clamp(ship.abFuel, 0, AB_MAX_FUEL);
			} else if (ship.abFuel == 0) {
				//afterburner is off
				//set engines to default acceleration and max speed
				ship.acceleration = SHIP_ACCELERATION;
				ship.maxSpeed = SHIP_MAX_SPEED;
			}
		} else {
			//afterburner is off
			//engines set to default acceleration and max speed
			ship.acceleration = SHIP_ACCELERATION;
			ship.maxSpeed = SHIP_MAX_SPEED;
			
			//the cooldown period is over and we are below maximum fuel
			if (ship.abCooldown == 0 && ship.abFuel < AB_MAX_FUEL) {
				//fill the fuel a bit
				ship.abFuel += AB_FUEL_RECHARGE_RATE;
				ship.abFuel = clamp(ship.abFuel, 0, AB_MAX_FUEL);
			}
		}
	}
}

function drawShip(ctx, ship, model, interiorColor, borderColor, borderWidth) {
	if (ship.alive) {
		ctx.save();
		
		ctx.translate(ship.position.x, ship.position.y);
		ctx.rotate(ship.orientation - PI / 2);
		
		drawPolyLine(ctx, model, interiorColor, borderColor, borderWidth);
		
		ctx.restore();
	}
}

function drawEngineFlames(ctx, ship, model, interiorColor, borderColor, borderWidth) {
	if (ship.alive) {
		ctx.save();
		
		ctx.translate(ship.position.x, ship.position.y);
		ctx.rotate(ship.orientation - PI / 2);
		
		drawPolyLine(ctx, model, interiorColor, borderColor, borderWidth);
		
		ctx.restore();	
	}
}

/*
 * Generates the vertices of an isoceles triangle
 */
function generateShipModel(base, height) {
	var hypotenuse = Math.sqrt(height * height + (1/4) * base * base);
	var theta = Math.atan((2 * height) / base);
	
	var v1 = new Vector(0, 0);
	var v2 = PolarVector(theta, hypotenuse);
	var v3 = PolarVector(0, base);
	
	var center = v1.add(v2.add(v3)).scale(1/3);
	v1 = v1.sub(center);
	v2 = v2.sub(center);
	v3 = v3.sub(center);
	
	return [ v1, v2, v3, v1 ];
}

/*
 * Generates engine flames
 */
function generateEngineFlames(shipBase, shipModel, flameStep, flameMagnitude) {
	var start = shipModel[0];
	
	var flames = [ start ];
	
	for (var dist = flameStep; dist < shipBase; dist += flameStep) {
		flames.push(new Vector(start.x + dist, start.y - random(0, flameMagnitude) - 2));
	}
	
	flames.push(shipModel[shipModel.length - 2]);
	
	return flames;
}

/*
 * Tests if p1 and p2 are on the same side of the line l(x) = v1 + x(v2 - v1)
 */
function sameSide(p1, p2, v1, v2) {
	var cp1 = p1.sub(v1).cross(v2.sub(v1));
	var cp2 = p2.sub(v1).cross(v2.sub(v1));
	return (cp1 * cp2 >= 0);
}

/*
 * Tests if p is in the triangle [v1, v2, v3]
 */
function inTriangle(p, v1, v2, v3) {
	return (sameSide(p, v3, v1, v2) && 
			sameSide(p, v1, v2, v3) && 
			sameSide(p, v2, v3, v1));
}

/*
 * Computes the orthogonal projection of p onto the line l(x) = v1 + x(v2 - v1) 
 */
function orthoProjection(p, v1, v2) {
	var t = p.sub(v1).dot(v2.sub(v1)) / v2.sub(v1).dot(v2.sub(v1));
	var op = v1.add(v2.sub(v1).scale(t));
	return { t : t, op : op };
}

/*
 * Tests if the circle (center, radius) is in the triangle [v1, v2, v3]
 */
function circleIntersectTriangle(center, radius, v1, v2, v3) {
	if (inTriangle(center, v1, v2, v3))
		return true;
	
	if (distance(center, v1) < radius ||
		distance(center, v2) < radius ||
		distance(center, v3) < radius)
		return true;
		
	var projection = orthoProjection(center, v1, v2);
	
	if (0 < projection.t && projection.t < 1 && distance(center, projection.op) < radius)
		return true;
	
	projection = orthoProjection(center, v2, v3);
	
	if (0 < projection.t && projection.t < 1 && distance(center, projection.op) < radius)
		return true;
	
	projection = orthoProjection(center, v3, v1);
	
	if (0 < projection.t && projection.t < 1 && distance(center, projection.op) < radius)
		return true;
	
	return false;
}

var SOUNDS = [
	{
		id: "laser",
		src: "sounds/laser.mp3",
	},
	{
		id: "music1",
		src: "sounds/music1.mp3",
	},
	{
		id: "music2",
		src: "sounds/music2.mp3",
	},
	{
		id: "music3",
		src: "sounds/music3.mp3",
	}
]

function loadSounds(callback) {
	 var queue = new createjs.LoadQueue();
	 
	 queue.installPlugin(createjs.Sound);
	 queue.addEventListener("complete", callback);
	 
	 for (var i = 0; i < SOUNDS.length; i++) {
	 	 queue.loadManifest(SOUNDS);
	 }
}

function initSound(callback) {
	if (SOUND_ENABLED) {
		loadSounds(function () {
			if (callback) {
				callback.call(this);	
			}
				
			SOUND_READY = true;
		});
	}
}

function playSound(id, volume, loop, callback) {
	if (SOUND_ENABLED) {
		volume = (volume == undefined) ? 1 : volume; 
		
		var sound = null;
		
		if (loop) {
			sound = createjs.Sound.play(id, createjs.Sound.INTERRUPT_NONE, 0, 0, -1, volume, 0);
		} else {
			sound = createjs.Sound.play(id, createjs.Sound.INTERRUPT_NONE, 0, 0, 0, volume, 0);
		}
	
		if (callback) {
			sound.addEventListener("complete", callback);
		}
	}
}

function stopSounds(id) {
	if (SOUND_ENABLED) {
		createjs.Sound.stop();	
	}
}

function playMusic() {
	console.log("music1");
	
	playSound("music1", SOUND_MUSIC_VOLUME, 0, function () {
		
		console.log("music2");		
		playSound("music2", SOUND_MUSIC_VOLUME, 0, function () {
		
			console.log("music3");
			playSound("music3", SOUND_MUSIC_VOLUME, 0, playMusic);		
		});
	});
}
function openTwitterWindow(text, hashTag) {
	var href = "https://twitter.com/intent/tweet?hashtags=" + hashTag + "%2C&text=" + encodeURIComponent(text) + "&tw_p=tweetbutton";
	window.open(href);
}

function tweetScore() {
	if (!PLAYER_NAME || PLAYER_NAME.length == 0) {
		showTwitterPrompt();
	} else {
		var text = PLAYER_NAME + " got a score of " + SCORE + " playing";
		openTwitterWindow(text, "Goosteroids");
	}
}
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

function drawPolyLine(ctx, vertices, interiorColor, borderColor, borderWidth) {
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
		ctx.stroke();
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


/*
 * Vector class
 */
 
function Vector(x, y) {
	this.x = x;
	this.y = y;	
}

Vector.prototype.add = function (v) {
	return new Vector(this.x + v.x, this.y + v.y);	
}

Vector.prototype.sub = function (v) {
	return new Vector(this.x - v.x, this.y - v.y);	
}

Vector.prototype.scale = function (c) {
	return new Vector(c * this.x, c * this.y);
}

Vector.prototype.dot = function (v) {
	return this.x * v.x + this.y * v.y;	
}

Vector.prototype.cross = function (v) {
	return this.x * v.y - this.y * v.x;	
}

Vector.prototype.angle = function () {
	return Math.atan(this.y, this.x);	
}

Vector.prototype.norm = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);	
}

Vector.prototype.normalize = function () {
	var c = this.norm();

	if (c == 0) {
		return this;
	} else {
		return this.scale(1 / c);		
	}
}

Vector.prototype.toString = function () {
	return "Vector(" + this.x + ", " + this.y + ")";	
}

/*
 * Create vector in polar form
 */
function PolarVector(angle, length) {
	return new Vector(length * Math.cos(angle), length * Math.sin(angle));
}

/*
 * Distance between two points
 */
function distance(v1, v2) {
	return v1.sub(v2).norm();
}
