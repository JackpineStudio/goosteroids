#!/bin/bash
cat goosteroids.js ajax.js blobs.js bullet.js dialog.js display.js events.js explosion.js gravity.js greygoo.js particle.js progress-bar.js ship.js sound.js twitter.js utility.js vector.js > goosteroids-full.js
./compress.pl goosteroids-full.js > goosteroids-full-min.js
cp goosteroids-full-min.js ../app/views/goosteroids/index.js.erb
#cp goosteroids-full.js ../app/views/goosteroids/index.js.erb
