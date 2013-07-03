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

