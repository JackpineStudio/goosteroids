./concatenate.sh
./obfuscate.pl goosteroids-full.js > goosteroids-obfuscated.js
cp goosteroids-obfuscated.js ../app/views/goosteroids/index.js.erb
#cp goosteroids-full.js ../app/views/goosteroids/index.js.erb
#cp goosteroids-obfuscated-pretty.js ../app/views/goosteroids/index.js.erb
