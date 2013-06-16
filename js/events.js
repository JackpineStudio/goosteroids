/*
 * Events
 */
var KEY_EVENTS_ENABLED = false;

function enableKeyEvents() {
	KEY_EVENTS_ENABLED = true;
}

function disableKeyEvents() {
	KEY_EVENTS_ENABLED = false;
}

function KeyEventHandler(key, action) {
	this.key = key;
	this.action = action;
}

function addKeyDownHandler(handler) {
	KEY_DOWN_EVENT_HANDLERS.push(handler);
}

function addKeyUpHandler(handler) {
	KEY_UP_EVENT_HANDLERS.push(handler);
}

function handleKeyDownEvent(event) {
	if (KEY_EVENTS_ENABLED) {
		for (var i = 0; i < KEY_DOWN_EVENT_HANDLERS.length; i++) {
			var handler = KEY_DOWN_EVENT_HANDLERS[i];
			
			if (handler.key == event.which) {
				handler.action();
				event.preventDefault();
			}
		}
	}
}

function handleKeyUpEvent(event) {
	if (KEY_EVENTS_ENABLED) {
		for (var i = 0; i < KEY_UP_EVENT_HANDLERS.length; i++) {
			var handler = KEY_UP_EVENT_HANDLERS[i];
			
			if (handler.key == event.which) {
				handler.action();
				event.preventDefault();
			}
		}
	}
}

/*
 * Event Handlers
 */
function upArrowDown() {
	SHIP.accelerating = 1;
}

function upArrowUp() {
	SHIP.accelerating = 0;
}

function leftArrowDown() {
	SHIP.turning = -1;
}

function leftArrowUp() {
	SHIP.turning = 0;
}

function rightArrowDown() {
	SHIP.turning = 1;
}

function rightArrowUp() {
	SHIP.turning = 0;
}

function spaceBarDown() {
	SHIP.gunFiring = true;
}

function spaceBarUp() {
	SHIP.gunFiring = false;
}

function shiftDown() {
	SHIP.abActivated = true;	
}

function shiftUp() {
	SHIP.abActivated = false;
	SHIP.abCooldown = AB_COOLDOWN;
}
