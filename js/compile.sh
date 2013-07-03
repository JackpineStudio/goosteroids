#!/bin/bash
cat goosteroids.js ajax.js blobs.js bullet.js dialog.js display.js events.js explosion.js gravity.js greygoo.js particle.js progress-bar.js ship.js sound.js twitter.js utility.js vector.js > goosteroids-full.js
./obfuscate.pl goosteroids-full.js > goosteroids-obfuscated.js
cp goosteroids-obfuscated.js ../app/views/goosteroids/index.js.erb
#cp goosteroids-full.js ../app/views/goosteroids/index.js.erb
