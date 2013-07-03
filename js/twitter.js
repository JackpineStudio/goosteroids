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

function openTwitterWindow(text, url, hashTags) {
	var	href = "https://twitter.com/intent/tweet?hashtags=" + encodeURIComponent(hashTags + ",") + "&url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text) + "&tw_p=tweetbutton";
	window.open(href);
}

function tweetScore() {
	if (!PLAYER_NAME || PLAYER_NAME.length == 0) {
		showTwitterPrompt();
	} else {
		sendTweet(PLAYER_NAME, SCORE);	
	}
}

function sendTweet(name, score) {
	var text = name + " got a score of " + score + " playing Goosteroids! A game by @JackpineCo. Play now at";
	openTwitterWindow(text, "http://goosteroids.com", "Goosteroids");
}
