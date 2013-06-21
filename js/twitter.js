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
	var text = name + " got a score of " + score + " playing Goosteroids! Play now at";
	openTwitterWindow(text, "http://goosteroids.com", "Goosteroids");
}
