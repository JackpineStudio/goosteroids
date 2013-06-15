#!/bin/bash

cat goosteroids.js ajax.js bullet.js display.js events.js explosion.js gravity.js greygoo.js particle.js settings.js ship.js utility.js vector.js > goosteroids-full.js
uglifyjs -mt goosteroids-full.js > goosteroids-full-min.js
