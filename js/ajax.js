var UPDATING = false;

function error(data) {
	return data.type.valueOf() == "error";
}

function handleError(data) {
	if (data.type.valueOf() == "error") {
		stopUpdateLoop();
		stopGameLoop();
		
		var message = data.error_message; 
		console.log(message);
		
		showErrorDialog(message, function () {
			window.location="/";	
		});
	}
}

function handleAjaxFailure(textStatus, errorThrown) {
	stopUpdateLoop();
	stopGameLoop();
	
	var message = "Ajax failure: " + textStatus + " (" + errorThrown + ")";
	console.log(message);
	
	showErrorDialog(message, function () {
		window.location="/";	
	});
}

function sendAjaxRequest(url, data, callback) {
	data.session_id = SESSION_ID;
	
	console.log("ajax request: " + url + ", data: " + strHash(data))
	
	var request = $.ajax({
		url: url,
		type: "POST",
		timeout: 2000,
		dataType: "json",
		cache: false,
		data: data
	});

	request.done(function(data, textStatus, jqXHR) {
		console.log("ajax response: " + url + ", status: " + textStatus + ", data: " + strHash(data));
		
		if (error(data)) {
			handleError(data);
		} else {
			if (callback) {
				callback.call(this, data);
			}
		}
	});
	
	request.fail(function(jqXHR, textStatus, errorThrown) {
		console.log("ajax response: " + url + ", status: " + textStatus + ", error: " + errorThrown);
		handleAjaxFailure(textStatus, errorThrown);
	});
}

function newGame(callback) {
	sendAjaxRequest("goosteroids/new_game.json", {}, callback);
}

function loadSettings(callback) {
	var data = { game_id: GAME_ID };
	
	sendAjaxRequest("goosteroids/get_settings.json", data, function (data) {
		GRAVITY					= data.settings.gravity;
		GRAVITY_DROPOFF			= data.settings.gravity_dropoff;
		GLOB_MAX_SPEED			= data.settings.glob_max_speed;
		GLOB_BLAST_RADIUS		= data.settings.glob_blast_radius;
		GLOB_BLAST_MAGNITUDE	= data.settings.glob_blast_magnitude;		
		GLOB_CR					= data.settings.glob_cr;	
		
		addBlobs(data.settings.blobs);
	
		if (callback) {
			callback.call(this, data);
		}
	});
}

function updateGame(callback) {
	if (!UPDATING) {
		UPDATING = true;
		
		var data = { game_id: GAME_ID, lives: LIVES, globs_destroyed: GLOBS_DESTROYED, client_time: toUTC(new Date()) };
		
		sendAjaxRequest("goosteroids/update_game.json", data, function (data) {
			GLOBS_DESTROYED = 0;
			
			if (callback) {
				callback.call(this, data);
			}
			
			UPDATING = false;
		});
	} else {
		setTimeout(function () {
			updateGame(callback);		
		}, 1000);
	}
}

function endStage(callback) {	
	var data = { game_id: GAME_ID };
	sendAjaxRequest("goosteroids/end_stage.json", data, function (data) {
		STAGE++;
		GLOBS_DESTROYED = 0;
		
		if (callback) {
			callback.call(this, data);
		}
	});
}

function endGame(callback) {	
	var data = { game_id: GAME_ID };
	sendAjaxRequest("goosteroids/end_game.json", data, callback);
}

function setPlayerName(name, callback) {
	var data = { game_id: GAME_ID, name: name };
	sendAjaxRequest("goosteroids/set_player_name.json", data, callback);
}

function getHighScores(callback) {
	sendAjaxRequest("goosteroids/get_high_scores.json", {}, callback);
}
