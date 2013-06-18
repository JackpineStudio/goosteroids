function showDialog(title, message, buttons, prompt, onClose) {
	$("#dialogTitle").text(title);
	$("#dialogMessage").html(message);
	
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
			$(this).stop().animate({ backgroundColor: "#0000ff" }, "slow");
		},
		function() {
			$(this).stop().animate({ backgroundColor: "#e95258" }, "slow");
		}
	);
	
	if (onClose) {
		$("#dialog").modal( { onClose: onClose } );
	} else {
		$("#dialog").modal();
	}
}

function showErrorDialog(message, onClose) {
	var closeButton = { 
		label: "Close", 
		click:  function () { $.modal.close(); } 
	};
	
	showDialog("ERROR!", message, [ closeButton ], false, onClose);
}

function showHighScorePrompt(onClose) {
	var message = "Congratulations you got a high score!<br>Brag about it by entering your name below:<br><br>"
	
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
	
	showDialog("HIGH SCORE!", message, [ submitButton, cancelButton ], true);
}

function showTwitterPrompt() {
	var message = "Please enter your name below to tweet your score:<br><br>"
	
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
	
	showDialog("ENTER PLAYER NAME", message, [ submitButton, cancelButton ], true);
}
