#!/bin/bash

cat goosteroids.js bullet.js display.js events.js explosion.js gravity.js greygoo.js particle.js settings.js ship.js utility.js vector.js > goosteroids-all.js
uglifyjs -mt goosteroids-all.js > goosteroids-min.js
