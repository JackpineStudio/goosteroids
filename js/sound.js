var SOUNDS = [
	{
		id: "laser",
		src: "sounds/laser.mp3",
	},
	{
		id: "music1",
		src: "sounds/music1.mp3",
	},
	{
		id: "music2",
		src: "sounds/music2.mp3",
	},
	{
		id: "music3",
		src: "sounds/music3.mp3",
	}
]

function loadSounds(callback) {
	 var queue = new createjs.LoadQueue();
	 
	 queue.installPlugin(createjs.Sound);
	 queue.addEventListener("complete", callback);
	 
	 for (var i = 0; i < SOUNDS.length; i++) {
	 	 queue.loadManifest(SOUNDS);
	 }
}

function initSound(callback) {
	if (SOUND_ENABLED) {
		loadSounds(function () {
			if (callback) {
				callback.call(this);	
			}
				
			SOUND_READY = true;
		});
	}
}

function playSound(id, volume, loop, callback) {
	if (SOUND_ENABLED) {
		volume = (volume == undefined) ? 1 : volume; 
		
		var sound = null;
		
		if (loop) {
			sound = createjs.Sound.play(id, createjs.Sound.INTERRUPT_NONE, 0, 0, -1, volume, 0);
		} else {
			sound = createjs.Sound.play(id, createjs.Sound.INTERRUPT_NONE, 0, 0, 0, volume, 0);
		}
	
		if (callback) {
			sound.addEventListener("complete", callback);
		}
	}
}

function stopSounds(id) {
	if (SOUND_ENABLED) {
		createjs.Sound.stop();	
	}
}

function playMusic() {
	console.log("music1");
	
	playSound("music1", SOUND_MUSIC_VOLUME, 0, function () {
		
		console.log("music2");		
		playSound("music2", SOUND_MUSIC_VOLUME, 0, function () {
		
			console.log("music3");
			playSound("music3", SOUND_MUSIC_VOLUME, 0, playMusic);		
		});
	});
}
