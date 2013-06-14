/*
 * Settings
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
 
function level1Settings() {
	GRAVITY						= 40;					//30				Gravitational constant
	GRAVITY_DROPOFF				= 0.001;				//0.001				Gravitational dropoff

	GLOB_MAX_SPEED		 		= 400;					//400				Maxiumum particle velocity														//

	GLOB_BLAST_RADIUS			= 30;					//30				Radius of effect
	GLOB_BLAST_MAGNITUDE		= GLOB_MAX_SPEED / 2;	//400				Impulse to apply to globs in the radius of effect

	GLOB_CR						= 0.80;					//1.0				Coefficient of restitution

	var blobs = [ { size: 20, speed: GLOB_MAX_SPEED / 2 } ];
	 
	addBlobs(blobs);
}

function level2Settings() {
	GRAVITY						= 30;					//40				Gravitational constant
	GRAVITY_DROPOFF				= 0.005;				//0.001				Gravitational dropoff

	GLOB_MAX_SPEED		 		= 400;					//400				Maxiumum particle velocity														//

	GLOB_BLAST_RADIUS			= 30;					//20				Radius of effect
	GLOB_BLAST_MAGNITUDE		= GLOB_MAX_SPEED / 2;	//400				Impulse to apply to globs in the radius of effect

	GLOB_CR						= 0.80;					//1.0				Coefficient of restitution
	
	var blobs = [ { size: 20, speed: GLOB_MAX_SPEED / 2 }, { size: 10, speed: GLOB_MAX_SPEED } ];
	 
	addBlobs(blobs);
}

function level3Settings() {
	GRAVITY						= 100;					//40				Gravitational constant
	GRAVITY_DROPOFF				= 0.01;					//0.001				Gravitational dropoff

	GLOB_MAX_SPEED		 		= 500;					//500				Maxiumum particle velocity														//

	GLOB_BLAST_RADIUS			= 30;					//20				Radius of effect
	GLOB_BLAST_MAGNITUDE		= GLOB_MAX_SPEED;		//400				Impulse to apply to globs in the radius of effect
	
	GLOB_CR						= 0.80;					//1.0				Coefficient of restitution	

	var blobs = [ { size: 20, speed: GLOB_MAX_SPEED / 3 }, { size: 15, speed: GLOB_MAX_SPEED / 2 }, { size: 20, speed: 2 * GLOB_MAX_SPEED / 3 } ];
	 
	addBlobs(blobs);
}

function loadSettings(stage) {
	switch (stage) {
	case 1:
		level1Settings();
		break;
	case 2:
		level2Settings();
		break;
	case 3:
		level3Settings();
		break;
	default:
		level3Settings();
	}
}

