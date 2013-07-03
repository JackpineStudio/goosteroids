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
		::::::::   ::::::::   ::::::::   :::::::: ::::::::::: :::::::::: :::::::::   :::::::: ::::::::::: :::::::::   :::::::: 
		:+:    :+: :+:    :+: :+:    :+: :+:    :+:    :+:     :+:        :+:    :+: :+:    :+:    :+:     :+:    :+: :+:    :+: 
	+:+        +:+    +:+ +:+    +:+ +:+           +:+     +:+        +:+    +:+ +:+    +:+    +:+     +:+    +:+ +:+         
	:#:        +#+    +:+ +#+    +:+ +#++:++#++    +#+     +#++:++#   +#++:++#:  +#+    +:+    +#+     +#+    +:+ +#++:++#++   
	+#+   +#+# +#+    +#+ +#+    +#+        +#+    +#+     +#+        +#+    +#+ +#+    +#+    +#+     +#+    +#+        +#+    
	#+#    #+# #+#    #+# #+#    #+# #+#    #+#    #+#     #+#        #+#    #+# #+#    #+#    #+#     #+#    #+# #+#    #+#     
	########   ########   ########   ########     ###     ########## ###    ###  ######## ########### #########   ########       
*/

/*
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$                                                                                 $$$$$$$$
	$$$$$$$$     $$$$$\  $$$$$$\   $$$$$$\  $$\   $$\ $$$$$$$\ $$$$$$\ $$\   $$\ $$$$$$$$\   $$$$$$$$
	$$$$$$$$     \__$$ |$$  __$$\ $$  __$$\ $$ | $$  |$$  __$$\\_$$  _|$$$\  $$ |$$  _____|  $$$$$$$$
	$$$$$$$$        $$ |$$ /  $$ |$$ /  \__|$$ |$$  / $$ |  $$ | $$ |  $$$$\ $$ |$$ |        $$$$$$$$
	$$$$$$$$        $$ |$$$$$$$$ |$$ |      $$$$$  /  $$$$$$$  | $$ |  $$ $$\$$ |$$$$$\      $$$$$$$$
	$$$$$$$$  $$\   $$ |$$  __$$ |$$ |      $$  $$<   $$  ____/  $$ |  $$ \$$$$ |$$  __|     $$$$$$$$
	$$$$$$$$  $$ |  $$ |$$ |  $$ |$$ |  $$\ $$ |\$$\  $$ |       $$ |  $$ |\$$$ |$$ |        $$$$$$$$
	$$$$$$$$  \$$$$$$  |$$ |  $$ |\$$$$$$  |$$ | \$$\ $$ |     $$$$$$\ $$ | \$$ |$$$$$$$$\   $$$$$$$$
	$$$$$$$$   \______/ \__|  \__| \______/ \__|  \__|\__|     \______|\__|  \__|\________|  $$$$$$$$
	$$$$$$$$                                                                                 $$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                                   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    THIS IS NO PART-TIME HUSTLE    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                                   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/

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
var UPDATE_LOOP_INTERVAL		= 7500;					//
														//
var SESSION_ID = "<%= @session_id %>";					//
var GAME_ID 					= 0;					//
														//
var SOUND_ENABLED				= true;					//
var SOUND_READY					= false;				//
var SOUND_MUSIC_VOLUME			= 1;					//
var SOUND_EFFECTS_VOLUME		= 1;					//
var SOUND_MUTED					= false;				//
														//
var DEBUG_MODE 					= false;				//
var GAME_RUNNING				= false;
var GOD_MODE_FRAMES_REMAINING   = 0;
var BLINK 						= false;

/*
 * Game setup
 */
function spawnShip() {
	var canvasCenter = new Vector(CANVAS.width / 2, CANVAS.height / 2);
	SHIP = new Ship(canvasCenter, SHIP_MAX_SPEED, SHIP_DAMPING, SHIP_ACCELERATION, SHIP_TURN_RATE);
	SHIP.orientation = -PI / 2;
	GOD_MODE_FRAMES_REMAINING = 40;
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
		GOD_MODE_FRAMES_REMAINING = 40;
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
	
	if (!BLINK) {
		drawShip(CTX, SHIP, SHIP_MODEL, SHIP_INTERIOR_COLOR, SHIP_BORDER_COLOR, SHIP_BORDER_WIDTH);
	}
	
	if (GOD_MODE_FRAMES_REMAINING > 0) {
		BLINK = !BLINK;
	} else {
		BLINK = false;
	}
	
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
	GAME_RUNNING = true;
}

function stopGameLoop() {
	clearInterval(MAIN_LOOP_ID);
	GAME_RUNNING = false;
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

function playGame() {
	playMusic();
	
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
	
	$("#instructions").stop();
	
	$('#stageMessage').html("Stage " + STAGE);
	
	$("#instructions:visible").fadeOut(2000);
	
	$('#stage').fadeIn(2000, function () {
		setTimeout(function () {
			$('#game').show();
			
			resizeCanvas();
			
			$('#stage').fadeOut(2000, function () {
				newGame(function (data) {
					GAME_ID = data.game_id;
					loadSettings(function () {
						enableEventHandlers();
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
	
	endStage(GLOBS_DESTROYED, function () {
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

	GLOBS_DESTROYED	= 0;
}

function gameOver() {
	stopSounds();
	
	disableEventHandlers();
	stopUpdateLoop();
	stopGameLoop();
	
	endGame(GLOBS_DESTROYED, function (data) {
		$("#gameOver").show();
		$('#game').fadeOut(2000, function () {
			if (data.high_score) {
				showHighScorePrompt(highScores);
			} else {
				highScores();	
			}
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
		
		return;
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

function resizeCanvas() {
	var i = 1;
	
	while($("canvas").height() + 94 + 90 + 15 > $(window).height() && $("#canvas").height() > 584) {
		$("#canvas").attr("width", $("#canvas").width() - 4*i);
		$("#canvas").attr("height", $("#canvas").height() - 3*i);	
		i++;
	}
	
	i = 1;
	
	while($("canvas").height() + 94 + 90 + 15 < $(window).height() && $("canvas").height() < 768) {
		$("#canvas").attr("width", $("#canvas").width() + 4*i);
		$("#canvas").attr("height", $("#canvas").height() + 3*i);	
		i++;
	}
}

$(document).ready(function () {
	jQuery.browser = {};
	jQuery.browser.mozilla = /mozilla/i.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.webkit = /webkit/i.test(navigator.userAgent.toLowerCase());
	jQuery.browser.opera = /opera/i.test(navigator.userAgent.toLowerCase());
	jQuery.browser.msie = /msie/i.test(navigator.userAgent.toLowerCase());
	jQuery.browser.chrome = /chrome/i.test(navigator.userAgent.toLowerCase());
		
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		alert("Sorry, mobile devices not supported.");
		$("#progressBar").hide();
	} else if (!$.browser.chrome || $.browser.msie) {
		showChromeDialog(function () {
			$("#progressBar").hide();
		});
	} else {
		$("#progressBar").show();
		
		initSound(function () {
			initGame(function () {
				setTimeout(showInstructions, 2000);
			});
		});
	
		window.onresize = function(event) {
			if (GAME_RUNNING) {
				resizeCanvas();
			}
		};
	}
});
