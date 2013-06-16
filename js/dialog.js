function showDialog(title, message, buttons, prompt, onClose) {
	$("#dialog-title").text(title);
	$("#dialog-message").html(message);
	
	if (prompt) {
		$("#dialog-input").show();
	} else {
		$("#dialog-input").hide();
	}
	
	$("#dialog-footer").html("");
	
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
		
		$("#dialog-footer").append(buttonHTML);
		
		if (buttons[i].click) {
			$("button.dialog-button").eq(i).click(buttons[i].click);
		}
	}
	
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
			var name = $("#dialog-input").val();
			
			if (!name || name.trim().length == 0) {
				$("#dialog-message").html("Bragging requires a name!<br>Please enter your name below:<br><br>");
			} else {
				$.modal.close();
				
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
