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

