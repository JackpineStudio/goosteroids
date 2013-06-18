var MUSIC_PLAYING = false;

var SOUNDS_MP3 = [
	{
		id: "laser",
		src: "sounds/mp3/laser.mp3",
	},
	{
		id: "pop",
		src: "sounds/mp3/pop.mp3",
	},
	{
		id: "explosion",
		src: "sounds/mp3/explosion.mp3",
	},	
	{
		id: "music1",
		src: "sounds/mp3/music1.mp3",
	},
	{
		id: "music2",
		src: "sounds/mp3/music2.mp3",
	},
	{
		id: "music3",
		src: "sounds/mp3/music3.mp3",
	}
];

var SOUNDS_OGG = [
	{
		id: "laser",
		src: "sounds/ogg/laser.ogg",
	},
	{
		id: "pop",
		src: "sounds/ogg/pop.ogg",
	},
	{
		id: "explosion",
		src: "sounds/ogg/explosion.ogg",
	},	
	{
		id: "music1",
		src: "sounds/ogg/music1.ogg",
	},
	{
		id: "music2",
		src: "sounds/ogg/music2.ogg",
	},
	{
		id: "music3",
		src: "sounds/ogg/music3.ogg",
	}
];

function loadSounds(complete) {
	var queue = new createjs.LoadQueue();
	
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", complete);
	
	queue.addEventListener("progress", function (data) {
		progressBar("#progressBar", data.progress * 100);
	});
	
	var cap = createjs.Sound.getCapabilities();
	
	if (cap.mp3) {
		queue.loadManifest(SOUNDS_MP3);
	} else if (cap.ogg) {
		queue.loadManifest(SOUNDS_OGG);	 
	} else {
		SOUND_ENABLED = false;	
	}
}

function initSound(callback) {
	if (SOUND_ENABLED) {
		if (!createjs.Sound.isReady()) {
			createjs.Sound.registerPlugins([ createjs.WebAudioPlugin, createjs.HTMLAudioPlugin ]);
			
			setTimeout(function () {
				initSound(callback);
			}, 1000);
			
			return;
		} else {
			loadSounds(function () {
				SOUND_READY = true;
			});
		}
	}
	
	if (callback) {
		callback.call(this);
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

function stopSounds() {
	if (SOUND_ENABLED) {
		createjs.Sound.stop();
	}
}

function playMusic() {
	if (SOUND_ENABLED) {
		var trackNum = randomInteger(1, 3);
		playSound("music" + trackNum, playMusic);
	}
}
