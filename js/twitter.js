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
