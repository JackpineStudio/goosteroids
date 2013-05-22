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
var G 							= 60;					//25				Gravitational constant 
var G_DROPOFF					= 0.001;				//0.001				Gravitational dropoff
														//
var GLOBS	 					= [];					//[]				Array of particles
var NUM_GLOBS					= 20;					//20				Number of Particles
														//
var GLOB_EXPLOSION_MAGNITUDE	= 250;					//200				Explosion magnitude (particle max velocity)
var GLOB_EXPLOSION_RADIUS		= 20;					//20				Radius of effect
var GLOB_BLAST_MAGNITUDE		= 500;					//300				Impulse to apply to globs in the radius of effect
var GLOB_EXPLOSION_COLOR		= "#999999";			//"#999999"			Explosion color
														//
var GLOB_MASS					= 1;					//1 				Particle mass
var GLOB_CR						= 0.75;					//1.0				Coefficient of restitution
var GLOB_RADIUS					= 5;					//5					Particle radius
var GLOB_MAX_SPEED		 		= 400;					//350				Maxiumum particle velocity
var GLOB_DAMPING				= 1.0;					//1.0				Glob velocity damping
														//
var MAX_ALPHA_THRESHOLD			= 200;					//200				Maximum alpha threshold
var MIN_ALPHA_THRESHOLD			= 150;					//150				Minimum alpha threshold
var GRADIENT_RADIUS 			= GLOB_RADIUS * 3;		//GLOB_RADIUS * 3	Gradient radius multiplier
var GRADIENT_STOP0				= "rgba(80, 80, 80, 1)";//					Gradient color stop 0
var GRADIENT_STOP1				= "rgba(80, 80, 80, 0)";//					Gradient color stop 1
														//
var BULLETS						= [];					//[]				Bullets
														//
var BULLET_SPEED				= 650;					//650				Bullet speed
var BULLET_LIFETIME				= 20;					//20				Number of milliseconds bullet is alive
var BULLET_RADIUS				= 2;					//2					Bullet radius
var BULLET_COLOR				= "#000000";			//"#000000"			Bullet color
														//
var EXPLOSIONS					= [];					//[]				Array of explosions
var EXPLOSION_DAMPING			= 0.9					//0.9				Particle velocity damping
var EXPLOSION_NUM_PARTICLES		= 15;					//15				Number of particles in an explosion
var EXPLOSION_PARTICLE_RADIUS	= 2;					//2					Particle radius
var EXPLOSION_PARTICLE_LIFETIME = 9;					//10				Particle lifetime
														//
var SHIP_EXPLOSION_MAGNITUDE	= 2000;					//350				Explosion magnitude (particle max velocity)
var SHIP_EXPLOSION_COLOR1		= "red";				//"red"				Explosion color 1
var SHIP_EXPLOSION_COLOR2		= "yellow";				//"yellow"			Explosion color 2
														//
var SHIP						= null;					//null				Ship object
var SHIP_GUN_COOLDOWN			= 4;					//5					Minimum time between shots
var SHIP_MAX_SPEED				= 400;					//400				Max ship speed
var SHIP_ACCELERATION			= 500;					//300				Ship acceleration magnitude
var SHIP_TURN_RATE				= PI_2 / (FPS * 0.04);	//
var SHIP_DAMPING				= 0.5;					//					Ship velocity damping
														//
var SHIP_MODEL					= [];					//[]				Ship model (array of vectors)
var SHIP_MODEL_BASE				= 15;					//15				Ship model base length
var SHIP_MODEL_HEIGHT			= 25;					//25				Ship model height
var SHIP_INTERIOR_COLOR 		= "#ffffff";			//"#ffffff"			Ship interior color
var SHIP_BORDER_COLOR			= "#000000";			//"#000000"			Ship border color
														//
var AB_ACCELERATION				= 6 * SHIP_ACCELERATION;//					Afterburner acceleration
var AB_FUEL_CONSUMPTION			= 5;					//					Afterburner fuel consumption
var AB_FUEL_RECHARGE_RATE		= 2;					//3					Fuel recharge per tick
var AB_MAX_FUEL					= 100;					//100				Max afterburer fuel
var AB_COOLDOWN					= 30;					//30				Afterburner Cooldown
														//
var CANVAS 						= null;					//null				Canvas
var CANVAS_TMP		 			= null;					//null				Temporary canvas
														//
var CTX 						= null;					//null				2D context
var TMP_CTX			 			= null;					//null				Temporary 2D context
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
var SCORE						= 0;					//0					Score
var LIVES						= 1;					//3					Lives
var MAIN_LOOP_INTERVAL_ID		= null;					//null
														//
var RESPAWN_DELAY				= 3 * FPS;				// 
var RESPAWN_FRAMES_REMAINING	= 0;					// 
														//
var FLAMES_COLOR  				= "blue";				//	
var FLAMES_INTERIOR_COLOR  		= "#ffffff";			//
var FLAMES_MAGNITUDE			= 6;					//
var FLAMES_STEP					= 2;					//
var FLAMES_AB_MAGNITUDE			= 20;					//
var FLAMES_AB_STEP				= 3;					//


/*
 * Game setup
 */
function spawnShip() {
	var canvasCenter = new Vector(CANVAS.width / 2, CANVAS.height / 2);
	SHIP = new Ship(canvasCenter, SHIP_MAX_SPEED, SHIP_DAMPING, SHIP_ACCELERATION, SHIP_TURN_RATE);
	SHIP.orientation = -PI / 2;
}

function endGame() {
	clearInterval(MAIN_LOOP_INTERVAL_ID);
	$('#gameContainer').fadeOut(1000)
	$('#gameOverContainer').fadeIn(4000);
}

function respawn() {
	if (!SHIP.alive && RESPAWN_FRAMES_REMAINING) {
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
	addGravity(GLOBS);
	
	updateBullets(BULLETS);
	updateParticles(GLOBS, GLOB_MAX_SPEED, GLOB_DAMPING, true);
	updateShip(SHIP, SHIP_MODEL);
	updateExplosions(EXPLOSIONS);
	
	drawGreyGoo(CTX, TMP_CTX, GLOBS);
	drawShip(CTX, SHIP, SHIP_MODEL, SHIP_INTERIOR_COLOR, SHIP_BORDER_COLOR);
	
	if (SHIP.accelerating && !SHIP.abActivated) {
		var flames = generateEngineFlames(SHIP_MODEL_BASE, SHIP_MODEL, FLAMES_STEP, FLAMES_MAGNITUDE);
		drawEngineFlames(CTX, SHIP, flames, null, FLAMES_COLOR);
	}
	
	if (SHIP.accelerating && SHIP.abActivated && SHIP.abFuel > 0) {
		var flames = generateEngineFlames(SHIP_MODEL_BASE, SHIP_MODEL, FLAMES_AB_STEP, FLAMES_AB_MAGNITUDE);
		drawEngineFlames(CTX, SHIP, flames, null, FLAMES_COLOR);		
	}
	
	drawBullets(CTX, BULLETS);
	drawExplosions(CTX, EXPLOSIONS);
	
	drawAbDisplay(CANVAS, CTX, SHIP.abFuel);
	drawScoreDisplay(CANVAS, CTX, SCORE);
	drawLivesDisplay(CANVAS, CTX, LIVES);
	
	//end game if player is out of lives
	if (LIVES < 0) {
		endGame();
		return;
	}
	
	//if ship is dead and cooldown is over then respawn ship
	respawn();
}

 /*
  * Init
  */
 $(document).ready(function () {	 
 	//setup canvas	 
 	CANVAS = document.getElementById("canvas");
	CTX = CANVAS.getContext("2d");
	
	CANVAS_TMP = document.createElement("canvas");
	CANVAS_TMP.width = CANVAS.width;
	CANVAS_TMP.height = CANVAS.height;
	TMP_CTX = CANVAS_TMP.getContext("2d");	
	
	//setup game
	GLOBS = explosion(new Vector(100, 100), GLOB_EXPLOSION_MAGNITUDE, GLOB_MASS, GLOB_RADIUS, NUM_GLOBS, 0, true);
	
	SHIP_MODEL = generateShipModel(SHIP_MODEL_BASE, SHIP_MODEL_HEIGHT);
		
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
	
	addKeyDownHandler(new KeyEventHandler(KEY_SHIFT, shiftDown));
	addKeyUpHandler(new KeyEventHandler(KEY_SHIFT, shiftUp));
	
	//run main loop
	MAIN_LOOP_INTERVAL_ID = setInterval(mainLoop, 1000 / FPS);
});
