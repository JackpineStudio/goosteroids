var SOUNDS = [
	{
		id: "laser",
		url: "sounds/effects/laser.mp3",
		volume: 50
	},
	
	{
		id: "gameplay-music",
		url: "sounds/music/gameplay/SycamoreDrive-Moves.mp3",
		volume: 50
	}
]

function loadSound(index, callback) {
	if (index < SOUNDS.length) {
		soundManager.createSound({
			id: SOUNDS[index].id,
			url: SOUNDS[index].url,
			volume: SOUNDS[index].url,
			autoLoad: true,
			autoPlay: false,
			onload: function () {			
				if (callback) {
					callback.call(this, index + 1, loadSound);	
				}
			}
		});
	} else {
		SOUND_READY = true;
	}
}

function initSound() {
	soundManager.setup({
		url: "js/soundmanager/swf",
		flashVersion: 9,
		preferFlash: false,
		onready: function () {
			loadSound(0, loadSound);
		}
	});
}

function setSoundVolume(id, volume) {
	var sound = soundManager.getSoundById(id);
	
	if (sound) {
		sound.volume = volume;	
	}
}

function playSound(id, loop) {
	if (SOUND_ENABLED) {
		if (loop) {
			soundManager.play(id, { 
				onfinish: function () {
					playSound(id, loop);
				}
			});
		} else {
			soundManager.play(id);
		}
	}
}

function stopSound(id) {
	if (SOUND_ENABLED) {
		soundManager.stop();
	}
}

function stopAllSounds(id) {
	if (SOUND_ENABLED) {
		soundManager.stopAll();
	}
}

function fadeInSound(id, volume, callback) {
	var sound = soundManager.getSoundById(id);
	
	if (sound) {
		if (sound.volume >= volume) {
			if (callback) {
				callback.call(this);
			}
		} else {
			sound.volume = Math.min(volume, sound.volume + 5);
			
			setTimeout(function() {
				fadeInSound(id, volume, callback);
			}, 20);
		}
	}
}

function fadeOutSound(id, callback) {
	var sound = soundManager.getSoundById(id);
	
	if (sound) {
		if (sound.volume == 0) {
			if (callback) {
				sound.stop();
				callback.call(this);	
			}
		} else {
			sound.volume = Math.max(0, sound.volume - 5);
			
			setTimeout(function() {
				fadeOutSound(id, callback);
			}, 20);
		}
	}
}

