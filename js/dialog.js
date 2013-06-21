function showDialog(title, msg, buttons, prompt, onClose) {
	$("#dialogTitle").text(title);
	$("#dialogMessage").html(msg);
	
	if (prompt) {
		$("#dialogInput").show();
		$("#dialogInput").val("");
	} else {
		$("#dialogInput").hide();
	}
	
	$("#dialogFooter").html("");
	
	for (var i = 0; i < buttons.length; i++) {
		var buttonHTML = "";
		
		if (buttons.length == 2 && i == 0) {
			buttonHTML = "<div class='dialog-button' style='text-align:right;'>";
		} else if (buttons.length == 2 && i == 1) {
			buttonHTML = "<div class='dialog-button' style='text-align:left;'>";
		} else {
			buttonHTML = "<div class='dialog-button'>";
		}
		
		buttonHTML += "<button class='dialog-button'>" + buttons[i].label + "</button></div>";
		
		$("#dialogFooter").append(buttonHTML);
		
		if (buttons[i].click) {
			$("button.dialog-button").eq(i).click(buttons[i].click);
		}
	}
	
	$("button.dialog-button").hover(
		function() {
			$(this).stop().animate( { backgroundColor: "#0000ff" }, "slow");
		},
		function() {
			$(this).stop().animate( { backgroundColor: "#e95258" }, "slow");
		}
	);
	
	if (onClose) {
		$("#dialog").modal( { onClose: onClose } );
	} else {
		$("#dialog").modal();
	}
}

function showErrorDialog(msg) {
	var closeButton = { 
		label: "Close", 
		click:  function () {
			$.modal.close();
			window.location="/";
		} 
	};
	
	showDialog("ERROR!", msg, [ closeButton ], false);
}

function showHighScorePrompt(onClose) {
	var msg = "Congratulations you got a high score!<br>Brag about it by entering your name below:<br><br>"
	
	var submitButton = { 
		label: "Submit",
		click:  function () {
			var name = $("#dialogInput").val();
			
			if (!name || name.trim().length == 0) {
				$("#dialogMessage").html("Bragging requires a name!<br>Please enter your name below:<br><br>");
			} else {
				$.modal.close();
				
				PLAYER_NAME = name;
				
				setPlayerName(name, function () {
					if (onClose) {
						onClose();
					}
				});
			}
		}
	};
	
	var cancelButton = { 
		label: "Cancel", 
		click:  function () {
			$.modal.close();
			
			if (onClose) {
				onClose();
			}
		} 
	};
	
	showDialog("HIGH SCORE!", msg, [ submitButton, cancelButton ], true);
}

function showTwitterPrompt() {
	var msg = "Please enter your name below to tweet your score:<br><br>"
	
	var submitButton = { 
		label: "Submit",
		click:  function () {
			var name = $("#dialogInput").val();
			
			if (!name || name.trim().length == 0) {
				$("#dialogMessage").html("Names contain characters silly!<br>Please enter your name below to tweet your score:<br><br>");
			} else {
				var text = name + " got a score of " + SCORE + " playing";
				openTwitterWindow(text, "Goosteroids");
				
				$.modal.close();
				
				setPlayerName(name);
			}
		}
	};
	
	var cancelButton = { 
		label: "Cancel", 
		click:  function () {
			$.modal.close();
		} 
	};
	
	showDialog("ENTER PLAYER NAME", msg, [ submitButton, cancelButton ], true);
}

function showAboutDialog(onClose) {
	var msg = "The <a href='http://jackpine.co/work.php#greygoo' target='_blank'>\"grey goo\"</a> of the Internet has come alive in this remake of the classic <a href='http://en.wikipedia.org/wiki/Asteroids_(video_game)' target='_blank'>Asteroids game</a>! Globs of goo are attracted to one another and clump together to form blobs. You must destroy these globs and blobs - by shooting them with your spaceship's laser - before they take over the entire universe! Blobs fly apart when shot, and the force of attraction between the globs results in fast, crazy, and unpredictable motion!";
	
	var closeButton = { 
		label: "Close", 
		click:  function () { $.modal.close(); } 
	};
	
	showDialog("ABOUT", msg, [ closeButton ], false, onClose);
}

function showCreditsDialog(onClose) {
	var msg = "<b>Programming:</b> James McLean<br><b>Design:</b> Liam Mooney, Tom Jansen, Taulant Sulko<br><b>Music:</b> Placeholder<br><b>Sound effects:</b> Mike Koenig";
	
	var closeButton = { 
		label: "Close", 
		click:  function () { $.modal.close(); } 
	};
	
	showDialog("CREDITS", msg, [ closeButton ], false, onClose);
}
