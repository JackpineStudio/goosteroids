#!/bin/bash

cat goosteroids.js ajax.js blobs.js bullet.js dialog.js display.js events.js explosion.js gravity.js greygoo.js particle.js ship.js sound.js twitter.js utility.js vector.js > goosteroids-full.js
uglifyjs -mt goosteroids-full.js > goosteroids-full-min.js
