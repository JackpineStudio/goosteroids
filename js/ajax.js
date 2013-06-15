var GET = "GET";
var POST = "POST";

var METHOD = "GET";
var TIMEOUT = 2000;

function error(data) {
	return data.type.valueOf() == "error";
}

function handleError(data) {
	if (data.type.valueOf() == "error") {
		var msg = "Error: " + data.error_message; 
		alert(msg);
		console.log(msg);
		//window.location="/";
	}
}

function handleAjaxFailure(textStatus, errorThrown) {
	var msg = "Ajax failure: " + textStatus + " (" + errorThrown + ")";
	alert(msg);
	console.log(msg);
	//window.location="/";
}

function sendAjaxRequest(url, method, timeout, data, success, error) {
	var request = $.ajax({
		url: url,
		type: method,
		dataType: "json",
		cache: false,
		data: data
	});

	request.done(function(data, textStatus, jqXHR) {
		success(data, textStatus);
	});
	
	request.fail(function(jqXHR, textStatus, errorThrown) {
		error(textStatus, errorThrown);
	});
}

function newGame(sessionId, callback) {
	console.log("ajax: newGame")
	
	var game_id = -1;
	var data = { session_id: sessionId };
	
	sendAjaxRequest("goosteroids/new.json", 
		METHOD, TIMEOUT, data,
		
		function (data, textStatus) {
			console.log("textStatus: " + textStatus);
			console.log("data: " + strHash(data));
			
			if (error(data)) {
				handleError(data);
			} else {				
				if (callback) {
					callback.call(this, data.game_id);
				}
			}
		},
		
		function (textStatus, errorThrown) {
			handleAjaxFailure(textStatus, errorThrown);
		}
	);
}

function updateGame(sessionId, gameId, totalScore, stage, callback) {
	console.log("ajax: updateGame")
	
	var data = { session_id: sessionId, game_id: gameId, score: totalScore, stage: stage, client_timestamp: toUTC(new Date()) };
	
	sendAjaxRequest("goosteroids/update.json",
		METHOD, TIMEOUT, data,
		
		function (data, textStatus) { //Success
			console.log("textStatus: " + textStatus);
			console.log("data: " + strHash(data));
			
			if (error(data)) {
				handleError(data);
			} else {	
				if (callback) {
					callback.call(this);
				}
			}
		},
		
		function (textStatus, errorThrown) { //Error
			handleAjaxFailure(textStatus, errorThrown);
		}
	);
}

function endGame(sessionId, gameId, callback) {
	console.log("ajax: endGame")
	
	var data = { session_id: sessionId, game_id: gameId };
	
	sendAjaxRequest("goosteroids/end_game.json",
		METHOD, TIMEOUT, data,
		
		function (data, textStatus) { //Success
			console.log("textStatus: " + textStatus);
			console.log("data: " + strHash(data));
			
			if (error(data)) {
				handleError(data);
			} else {	
				if (callback) {
					callback.call(this);
				}
			}
		},
		
		function (textStatus, errorThrown) { //Error
			handleAjaxFailure(textStatus, errorThrown);
		}
	);
}

