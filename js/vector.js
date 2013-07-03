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
