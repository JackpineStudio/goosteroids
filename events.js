/*
 * Events
 */
function KeyEventHandler(key, action) {
	this.key = key;
	this.action = action;
}

function addKeyDownHandler(handler) {
	this.KEY_DOWN_EVENT_HANDLERS.push(handler);
}

function addKeyUpHandler(handler) {
	this.KEY_UP_EVENT_HANDLERS.push(handler);
}

function handleKeyDownEvent(event) {
	for (var i = 0; i < KEY_DOWN_EVENT_HANDLERS.length; i++) {
		var handler = KEY_DOWN_EVENT_HANDLERS[i];
		
		if (handler.key == event.which) {
			handler.action();
			event.preventDefault();
		}
	}
}

function handleKeyUpEvent(event) {
	for (var i = 0; i < KEY_UP_EVENT_HANDLERS.length; i++) {
		var handler = KEY_UP_EVENT_HANDLERS[i];
		
		if (handler.key == event.which) {
			handler.action();
			event.preventDefault();
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
	BULLETS.push(new Bullet(SHIP.position, SHIP.orientation, BULLET_SPEED, BULLET_LIFETIME));
}

function shiftDown() {
	SHIP.acceleration = TURBO_ACCELERATION;	
}

function shiftUp() {
	SHIP.acceleration = SHIP_ACCELERATION;	
}
