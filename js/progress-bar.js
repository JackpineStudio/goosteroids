function progressBar(elementId, percent) {
	var progressBar = $(elementId);
	var width = percent * progressBar.width() / 100;
	progressBar.find("div").animate({ width: width }, 500);
}
