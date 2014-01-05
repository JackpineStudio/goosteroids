
var X20GJRZ9B=30;var X0CKSXM63=1/X20GJRZ9B;var XU8YIOBEU=X0CKSXM63*X0CKSXM63;var PI=Math.PI
var XAE4936RY=2*Math.PI;var XPJH60KMO=30;var XPJH60KMO_DROPOFF=0.001;var X2BTZ1OJW=400;var XNEBM50BO=250;var X8Y1IN9CY=30;var X27K8BGL8=700;var X2EK2CM0U=1;var XGQH1QM80=0.80;var X2517EHT1=5;var XSY22FK8G=1;var XXXE0ALL1=200;var XOI2QX58Z=150;var XRM41K3WI=X2517EHT1*3;var XULND4OZR="rgba(80, 80, 80, 1)";var XDXIHUH20="rgba(80, 80, 80, 0)";var XXZGCIF4M="#b0b0b0";var XP1URRJ35=650;var XCI5KA1AX=20;var XGG6LJKDH=2;var XEL5SOPNG="#ffffff";var XDMPH5TTC=0.8;var XRMQ1G5UK=15;var XLOGNXQFI=2;var X8QEPJ4SI=20;var XWNE3PT2E=1000;var XNVFH4JV7="black";var XEZYLGDR8="white";var X86NRHRML="yellow";var XTV671PUA="red";var XZWFY7TK3=6;var XY6SB110Q=400;var XNR7GLNMN=500;var XY36FCRT1=XAE4936RY/(X20GJRZ9B*0.04);var X36HJL6H7=0.5;var XE6QQAEL5=[];var XE6QQAEL5_BASE=15;var XE6QQAEL5_HEIGHT=25;var XWC9746X5="#e95258";var XTPQBTG0V="#ffffff";var X6DGR6KC1_BORDER_WIX0CKSXM63H=3;var XSS1C3Y0U=6*XNR7GLNMN;var XVL6ZLSFV=5;var X5K1GVJ91=2;var XDWKC8JKJ=100;var XU85ST5BD=60;var AB_XY6SB110Q=2.25*XY6SB110Q;var X7MVYBX14="blue";var XWUCZV8O3=3;var X5X33EDOM="#ffffff";var XRPKYAF08=6;var XS8LGX9RF=2;var XR1YONCDB=17;var XARMAZKQV=3;var XHRPOJJRK=3*X20GJRZ9B;var XHNK11NEX=0;var XY7VVMBAN=null;var XZCD5TQGD=null;var XUI8KWEXA=null;var XOT4NXJ31=null;var X6DGR6KC1=null;var X8RHLVBN6=[];var X2FS92X15=[];var X9TVUHQRK=[];var XWNBPJAF1=[];var XNJM45WW3=[];var X8DGO0CTJ=38;var XGP2MH9J3=40;var XL5K431AI=37;var XR2S35MIE=39;var XD3CMJ6SH=32;var XWJR03TAT=16;var X82F2WD1J="";var STAGE=1;var SCORE=0;var LIVES=3;var XOGG3EU7C=0;var XN6M62H2K=null;var XZW469NEX=null;var XF1MQMTYD=7500;var XP9O8HELR="<%= @session_id %>";var XZJ78Q6HC=0;var XWVAHIEL8=true;var XTTVQZ7WD=false;var X6PYU7A2K=1;var XPGBP35VP=1;var SOUND_MUTED=false;var X2LKW1VB4=false;var GAME_RUNNING=false;var X6NR3OMEO=0;var X7K2KOEPC=false;function spawnShip(){var canvasCenter=new Vector(XY7VVMBAN.width/2,XY7VVMBAN.height/2);X6DGR6KC1=new Ship(canvasCenter,XY6SB110Q,X36HJL6H7,XNR7GLNMN,XY36FCRT1);X6DGR6KC1.orientation=-PI/2;X6NR3OMEO=40;}
function respawn(){if(!X6DGR6KC1.alive&&XHNK11NEX>0){XHNK11NEX--;var secondsUntilRespawn=Math.ceil(XHNK11NEX/X20GJRZ9B);if(secondsUntilRespawn>0){displayRespawnMessage(XY7VVMBAN,XUI8KWEXA,secondsUntilRespawn);}}else if(!X6DGR6KC1.alive&&XHNK11NEX==0){spawnShip();X6NR3OMEO=40;}}
function mainLoop(){XUI8KWEXA.clearRect(0,0,XY7VVMBAN.width,XY7VVMBAN.height);if(X8RHLVBN6.length==0){X2FS92X15=[];stageOver();}
addGravity(X8RHLVBN6);updateBullets(X2FS92X15);updateParticles(X8RHLVBN6,X2BTZ1OJW,XSY22FK8G,true);updateShip(X6DGR6KC1,XE6QQAEL5);updateExplosions(X9TVUHQRK);drawGreyGoo(XUI8KWEXA,XOT4NXJ31,X8RHLVBN6);if(!X7K2KOEPC){drawShip(XUI8KWEXA,X6DGR6KC1,XE6QQAEL5,XWC9746X5,XTPQBTG0V,X6DGR6KC1_BORDER_WIX0CKSXM63H);}
if(X6NR3OMEO>0){X7K2KOEPC=!X7K2KOEPC;}else{X7K2KOEPC=false;}
if(X6DGR6KC1.accelerating&&!X6DGR6KC1.abActivated){var flames=generateEngineFlames(XE6QQAEL5_BASE,XE6QQAEL5,XS8LGX9RF,XRPKYAF08);drawEngineFlames(XUI8KWEXA,X6DGR6KC1,flames,null,X7MVYBX14,XWUCZV8O3);}
if(X6DGR6KC1.accelerating&&X6DGR6KC1.abActivated&&X6DGR6KC1.abFuel>0){var flames=generateEngineFlames(XE6QQAEL5_BASE,XE6QQAEL5,XARMAZKQV,XR1YONCDB);drawEngineFlames(XUI8KWEXA,X6DGR6KC1,flames,null,X7MVYBX14,XWUCZV8O3);}
drawBullets(XUI8KWEXA,X2FS92X15);drawExplosions(XUI8KWEXA,X9TVUHQRK);drawAbDisplay(XY7VVMBAN,XUI8KWEXA,X6DGR6KC1.abFuel);drawStageDisplay(XY7VVMBAN,XUI8KWEXA,STAGE);drawLivesDisplay(XY7VVMBAN,XUI8KWEXA,LIVES);drawScoreDisplay(XY7VVMBAN,XUI8KWEXA,SCORE);if(LIVES<0){gameOver();return;}
respawn();}
function startGameLoop(){XN6M62H2K=setInterval(mainLoop,1000/X20GJRZ9B);GAME_RUNNING=true;}
function stopGameLoop(){clearInterval(XN6M62H2K);GAME_RUNNING=false;}
function updateLoop(){updateGame(XOGG3EU7C);XOGG3EU7C=0;}
function startUpdateLoop(){XZW469NEX=setInterval(updateLoop,XF1MQMTYD);}
function stopUpdateLoop(){clearInterval(XZW469NEX);}
function showInstructions(){$("#introduction").fadeOut(2000);$("#instructions").fadeIn(2000);}
function playGame(){playMusic();XUI8KWEXA.clearRect(0,0,XY7VVMBAN.width,XY7VVMBAN.height);X82F2WD1J="";SCORE=0;STAGE=1;LIVES=3;XOGG3EU7C=0;X8RHLVBN6=[];X2FS92X15=[];X9TVUHQRK=[];spawnShip();$("#instructions").stop();$('#stageMessage').html("Stage "+STAGE);$("#instructions:visible").fadeOut(2000);$('#stage').fadeIn(2000,function(){setTimeout(function(){$('#game').show();resizeCanvas();$('#stage').fadeOut(2000,function(){newGame(function(data){XZJ78Q6HC=data.game_id;loadSettings(function(){enableEventHandlers();startGameLoop();startUpdateLoop();});});});},500);});}
function stageOver(){stopUpdateLoop();stopGameLoop();endStage(XOGG3EU7C,function(){$('#stageMessage').html("Stage "+STAGE);$('#stage').fadeIn(2000,function(){setTimeout(function(){$('#stage').fadeOut(2000);$('#game').fadeIn(2000);loadSettings(function(){spawnShip();startGameLoop();startUpdateLoop();});},500);});});XOGG3EU7C=0;}
function gameOver(){stopSounds();disableEventHandlers();stopUpdateLoop();stopGameLoop();endGame(XOGG3EU7C,function(data){$("#gameOver").show();$('#game').fadeOut(2000,function(){if(data.high_score){showHighScorePrompt(highScores);}else{highScores();}});});XOGG3EU7C=0;}
function highScores(){getHighScores(function(data){var high_scores=data.high_scores;$("#score").text(SCORE);$("table.highScores tr:not(.table-header)").remove();for(var i=0;i<high_scores.length;i++){var rowHTML="<tr>";rowHTML+="<td>"+high_scores[i].player_name+"</td>";rowHTML+="<td>"+high_scores[i].stage+"</td>";rowHTML+="<td>"+high_scores[i].score+"</td>";rowHTML+="<td>"+high_scores[i].time+"</td>";rowHTML+="</tr>";$("table.highScores").append(rowHTML);}
$("#highScores").show();$("#gameOver").fadeOut(2000);});}
function initGame(callback){if(XWVAHIEL8&&!XTTVQZ7WD){setTimeout(function(){initGame(callback);},1000);return;}
XY7VVMBAN=document.getElementById("canvas");XUI8KWEXA=XY7VVMBAN.getContext("2d");XZCD5TQGD=document.createElement("canvas");XZCD5TQGD.width=XY7VVMBAN.width;XZCD5TQGD.height=XY7VVMBAN.height;XOT4NXJ31=XZCD5TQGD.getContext("2d");XE6QQAEL5=generateShipModel(XE6QQAEL5_BASE,XE6QQAEL5_HEIGHT);spawnShip();$("body").focus();$("body").keydown(function(event){handleKeyDownEvent(event);});$("body").keyup(function(event){handleKeyUpEvent(event);});addKeyDownHandler(new KeyEventHandler(X8DGO0CTJ,upArrowDown));addKeyUpHandler(new KeyEventHandler(X8DGO0CTJ,upArrowUp));addKeyDownHandler(new KeyEventHandler(XL5K431AI,leftArrowDown));addKeyUpHandler(new KeyEventHandler(XL5K431AI,leftArrowUp));addKeyDownHandler(new KeyEventHandler(XR2S35MIE,rightArrowDown));addKeyUpHandler(new KeyEventHandler(XR2S35MIE,rightArrowUp));addKeyDownHandler(new KeyEventHandler(XD3CMJ6SH,spaceBarDown));addKeyUpHandler(new KeyEventHandler(XD3CMJ6SH,spaceBarUp));addKeyDownHandler(new KeyEventHandler(XWJR03TAT,shiftDown));addKeyUpHandler(new KeyEventHandler(XWJR03TAT,shiftUp));callback.call(this);}
function resizeCanvas(){var i=1;while($("canvas").height()+94+90+15>$(window).height()&&$("#canvas").height()>584){$("#canvas").attr("width",$("#canvas").width()-4*i);$("#canvas").attr("height",$("#canvas").height()-3*i);i++;}
i=1;while($("canvas").height()+94+90+15<$(window).height()&&$("canvas").height()<768){$("#canvas").attr("width",$("#canvas").width()+4*i);$("#canvas").attr("height",$("#canvas").height()+3*i);i++;}}
$(document).ready(function(){jQuery.browser={};jQuery.browser.mozilla=/mozilla/i.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());jQuery.browser.webkit=/webkit/i.test(navigator.userAgent.toLowerCase());jQuery.browser.opera=/opera/i.test(navigator.userAgent.toLowerCase());jQuery.browser.msie=/msie/i.test(navigator.userAgent.toLowerCase());jQuery.browser.chrome=/chrome/i.test(navigator.userAgent.toLowerCase());if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){alert("Sorry, mobile devices not supported.");$("#progressBar").hide();}else if($.browser.msie){showBrowserNotSupportedDialog(function(){$("#progressBar").hide();});}else{$("#progressBar").show();initSound(function(){initGame(function(){setTimeout(showInstructions,2000);});});window.onresize=function(event){if(GAME_RUNNING){resizeCanvas();}};}});var UPDATING=false;function error(data){return data.type.valueOf()=="error";}
function handleError(data){if(data.type.valueOf()=="error"){stopUpdateLoop();stopGameLoop();var msg=data.error_message;if(X2LKW1VB4){console.log("Error: "+msg);}
showErrorDialog(msg);}}
function handleAjaxFailure(textStatus,errorThrown){stopUpdateLoop();stopGameLoop();var msg="Ajax failure: "+textStatus+" ("+errorThrown+")";if(X2LKW1VB4){console.log(msg);}
showErrorDialog(msg);}
function sendAjaxRequest(url,data,callback){data.session_id=XP9O8HELR;if(X2LKW1VB4){console.log("ajax request: "+url+", data: "+strHash(data));}
var request=$.ajax({url:url,type:"POST",timeout:3000,dataType:"json",cache:false,data:data});request.done(function(data,textStatus,jqXHR){if(X2LKW1VB4){console.log("ajax response: "+url+", status: "+textStatus+", data: "+strHash(data));}
if(error(data)){handleError(data);}else{if(callback){callback.call(this,data);}}});request.fail(function(jqXHR,textStatus,errorThrown){if(X2LKW1VB4){console.log("ajax response: "+url+", status: "+textStatus+", error: "+errorThrown);}
handleAjaxFailure(textStatus,errorThrown);});}
function newGame(callback){sendAjaxRequest("goosteroids/new_game.json",{},callback);}
function loadSettings(callback){var data={game_id:XZJ78Q6HC};sendAjaxRequest("goosteroids/get_settings.json",data,function(data){XPJH60KMO=data.settings.gravity;XPJH60KMO_DROPOFF=data.settings.gravity_dropoff;X2BTZ1OJW=data.settings.glob_max_speed;X8Y1IN9CY=data.settings.glob_blast_radius;X27K8BGL8=data.settings.glob_blast_magnitude;XGQH1QM80=data.settings.glob_cr;addBlobs(data.settings.blobs);if(callback){callback.call(this,data);}});}
function updateGame(globsDestroyed,callback){if(!UPDATING){UPDATING=true;var data={game_id:XZJ78Q6HC,lives:LIVES,globs_destroyed:globsDestroyed};sendAjaxRequest("goosteroids/update_game.json",data,function(data){UPDATING=false;if(callback){callback.call(this,data);}});}else{setTimeout(function(){updateGame(callback);},1000);}}
function endStage(globsDestroyed,callback){var data={game_id:XZJ78Q6HC,globs_destroyed:globsDestroyed};sendAjaxRequest("goosteroids/end_stage.json",data,function(data){STAGE++;if(callback){callback.call(this,data);}});}
function endGame(globsDestroyed,callback){var data={game_id:XZJ78Q6HC,globs_destroyed:globsDestroyed};sendAjaxRequest("goosteroids/end_game.json",data,callback);}
function setPlayerName(name,callback){var data={game_id:XZJ78Q6HC,name:name};sendAjaxRequest("goosteroids/set_player_name.json",data,callback);}
function getHighScores(callback){sendAjaxRequest("goosteroids/get_high_scores.json",{},callback);}
function createBlob(numGlobs,position,orientation,speed){var globs=explosion(position,XNEBM50BO,X2EK2CM0U,X2517EHT1,numGlobs,true);for(var i=0;i<globs.length;i++){globs[i].velocity=PolarVector(orientation,speed);}
return globs;}
function addBlobs(blobs){for(var i=0;i<blobs.length;i++){var blob=createBlob(blobs[i].size,new Vector(random(0,$("#canvas").width()-1),random(0,$("#canvas").height()-1)),random(0,XAE4936RY),blobs[i].speed);for(var j=0;j<blob.length;j++){X8RHLVBN6.push(blob[j]);}}}
function Bullet(position,angle,speed,lifetime){this.position=position;this.velocity=PolarVector(angle,speed);this.lifetime=lifetime;this.age=0;this.lifetime=lifetime;}
function updateBullets(bullets){var width=XY7VVMBAN.width-1;var height=XY7VVMBAN.height-1;for(var i=0;i<bullets.length;i++){var bullet=bullets[i];bullet.age++;if(bullet.lifetime>0&&bullet.age>bullet.lifetime){bullets.splice(i,1);}else{bullet.position=bullet.position.add(bullet.velocity.scale(X0CKSXM63));if(bullet.position.x>width){bullet.position.x=0;}
if(bullet.position.x<0){bullet.position.x=width;}
if(bullet.position.y>height){bullet.position.y=0;}
if(bullet.position.y<0){bullet.position.y=height;}}
for(var j=0;j<X8RHLVBN6.length;j++){var glob=X8RHLVBN6[j];if(distance(bullet.position,glob.position)<glob.radius+XGG6LJKDH+XRM41K3WI/2){playSound("pop");XOGG3EU7C++;bullets.splice(i,1);X8RHLVBN6.splice(j,1);X9TVUHQRK.push(new Explosion(glob.position,XNEBM50BO,XRMQ1G5UK,X8QEPJ4SI,XXZGCIF4M));SCORE+=10;for(var k=0;k<X8RHLVBN6.length;k++){var glob2=X8RHLVBN6[k];if(j!=k&&(distance(glob.position,glob2.position)<glob2.radius+glob.radius+X8Y1IN9CY)){var direction=glob2.position.sub(glob.position).normalize();var impulse=direction.scale(X27K8BGL8);glob2.addImpulse(impulse);}}}}}}
function drawBullets(ctx,bullets){for(var i=0;i<bullets.length;i++){drawCircle(ctx,bullets[i].position,XGG6LJKDH,XEL5SOPNG);}}
function showDialog(title,msg,buttons,prompt,onClose){$("#dialogTitle").text(title);$("#dialogMessage").html(msg);if(prompt){$("#dialogInput").show();$("#dialogInput").val("");}else{$("#dialogInput").hide();}
$("#dialogFooter").html("");for(var i=0;i<buttons.length;i++){var buttonHTML="";if(buttons.length==2&&i==0){buttonHTML="<div class='dialog-button' style='text-align:right;'>";}else if(buttons.length==2&&i==1){buttonHTML="<div class='dialog-button' style='text-align:left;'>";}else{buttonHTML="<div class='dialog-button'>";}
buttonHTML+="<button class='dialog-button'>"+buttons[i].label+"</button></div>";$("#dialogFooter").append(buttonHTML);if(buttons[i].click){$("button.dialog-button").eq(i).click(buttons[i].click);}}
$("button.dialog-button").hover(function(){$(this).stop().animate({backgroundColor:"#0000ff"},"slow");},function(){$(this).stop().animate({backgroundColor:"#e95258"},"slow");});if(onClose){$("#dialog").modal({onClose:onClose});}else{$("#dialog").modal();}}
function showErrorDialog(msg){var closeButton={label:"Close",click:function(){$.modal.close();window.location="/";}};showDialog("ERROR!",msg,[closeButton],false);}
function showHighScorePrompt(onClose){var msg="Congratulations you got a high score!<br>Brag about it by entering your name below:<br><br>"
var submitButton={label:"Submit",click:function(){var name=$("#dialogInput").val();if(!name||name.trim().length==0){$("#dialogMessage").html("Bragging requires a name!<br>Please enter your name below:<br><br>");}else{$.modal.close();X82F2WD1J=name;setPlayerName(name,function(){if(onClose){onClose();}});}}};var cancelButton={label:"Cancel",click:function(){$.modal.close();if(onClose){onClose();}}};showDialog("HIGH SCORE!",msg,[submitButton,cancelButton],true);}
function showTwitterPrompt(){var msg="Please enter your name below to tweet your score:<br><br>"
var submitButton={label:"Submit",click:function(){var name=$("#dialogInput").val();if(!name||name.trim().length==0){$("#dialogMessage").html("Names contain characters silly!<br>Please enter your name below to tweet your score:<br><br>");}else{$.modal.close();setPlayerName(name);sendTweet(name,SCORE);}}};var cancelButton={label:"Cancel",click:function(){$.modal.close();}};showDialog("ENTER PLAYER NAME",msg,[submitButton,cancelButton],true);}
function showAboutDialog(onClose){var msg="The <a href='http://jackpine.co/work.php#greygoo' target='_blank'>\"grey goo\"</a> of the Internet has come alive in this remake of the classic <a href='http://en.wikipedia.org/wiki/Asteroids_(video_game)' target='_blank'>Asteroids game</a>! Globs of goo are attracted to one another and clump together to form blobs. You must destroy these globs and blobs - by shooting them with your spaceship's laser - before they take over the entire universe! Blobs fly apart when shot, and the force of attraction between the globs results in fast, crazy, and unpredictable motion!";var closeButton={label:"Close",click:function(){$.modal.close();}};showDialog("ABOUT",msg,[closeButton],false,onClose);}
function showCreditsDialog(onClose){var msg="<b>Programming:</b> James McLean<br><b>Design:</b> Liam Mooney, Tom Jansen, Taulant Sulko<br><b>Music:</b> Sycamore Drive, RushJet1, Rocco Wouters<br><b>Sound effects:</b> Mike Koenig";var closeButton={label:"Close",click:function(){$.modal.close();}};showDialog("CREDITS",msg,[closeButton],false,onClose);}
function showBrowserNotSupportedDialog(onClose){var msg="Please download <a href='http://www.google.com/chrome' target='_blank'>Google Chrome</a> or <a href='https://www.mozilla.org/firefox' target='_blank'>Firefox</a> to play.";var closeButton={label:"Close",click:function(){$.modal.close();}};showDialog("ERROR: BROWSER NOT SUPPORTED",msg,[closeButton],false,onClose);}
function drawScoreDisplay(canvas,ctx,score){var displayPosition=new Vector(canvas.width-100,50);ctx.save();ctx.font="bold 24px Arial";ctx.fillStyle="white";ctx.fillText(score,displayPosition.x,displayPosition.y);ctx.restore();}
function drawStageDisplay(canvas,ctx,stage){ctx.save();ctx.font="bold 10px Arial";ctx.fillStyle="white";ctx.fillText("STAGE",20,55);ctx.fillText(stage,60,55);ctx.restore();}
function drawLivesDisplay(canvas,ctx,lives){ctx.save();ctx.font="bold 10px Arial";ctx.fillStyle="white";ctx.fillText("LIVES",20,75);ctx.fillText(lives,60,75);ctx.restore();}
function drawAbDisplay(canvas,ctx,abFuel){var displayPosition=new Vector(20,34);ctx.save();ctx.font="bold 10px Arial";ctx.fillStyle="white";ctx.fillText("TURBO",displayPosition.x,displayPosition.y);ctx.beginPath();ctx.rect(displayPosition.x+43,displayPosition.y-9,102,10);ctx.fillStyle='white';ctx.fill();ctx.lineWidth=2;ctx.strokeStyle='white';ctx.stroke();ctx.beginPath();ctx.rect(displayPosition.x+44,displayPosition.y-8,(abFuel/XDWKC8JKJ)*100,8);ctx.fillStyle='blue';ctx.fill();ctx.restore();}
function displayRespawnMessage(canvas,ctx,secondsRemaining){var canvasCenter=new Vector(canvas.width/2,canvas.height/2);ctx.save();ctx.font="bold 18px Arial";ctx.fillStyle="white";ctx.textAlign='center';ctx.fillText("RESPAWNING IN "+secondsRemaining,canvasCenter.x,canvasCenter.y);ctx.restore();}
var KEY_EVENTS_ENABLED=false;function enableEventHandlers(){KEY_EVENTS_ENABLED=true;}
function disableEventHandlers(){KEY_EVENTS_ENABLED=false;}
function KeyEventHandler(key,action){this.key=key;this.action=action;}
function addKeyDownHandler(handler){XWNBPJAF1.push(handler);}
function addKeyUpHandler(handler){XNJM45WW3.push(handler);}
function handleKeyDownEvent(event){if(KEY_EVENTS_ENABLED){for(var i=0;i<XWNBPJAF1.length;i++){var handler=XWNBPJAF1[i];if(handler.key==event.which){handler.action();event.preventDefault();}}}}
function handleKeyUpEvent(event){if(KEY_EVENTS_ENABLED){for(var i=0;i<XNJM45WW3.length;i++){var handler=XNJM45WW3[i];if(handler.key==event.which){handler.action();event.preventDefault();}}}}
function upArrowDown(){X6DGR6KC1.accelerating=1;}
function upArrowUp(){X6DGR6KC1.accelerating=0;}
function leftArrowDown(){X6DGR6KC1.turning=-1;}
function leftArrowUp(){X6DGR6KC1.turning=0;}
function rightArrowDown(){X6DGR6KC1.turning=1;}
function rightArrowUp(){X6DGR6KC1.turning=0;}
function spaceBarDown(){X6DGR6KC1.gunFiring=true;}
function spaceBarUp(){X6DGR6KC1.gunFiring=false;}
function shiftDown(){X6DGR6KC1.abActivated=true;}
function shiftUp(){X6DGR6KC1.abActivated=false;X6DGR6KC1.abCooldown=XU85ST5BD;}
function explosion(position,magnitude,particleMass,particleRadius,numParticles,collisions){var particles=[];for(var i=0;i<numParticles;i++){var velocity=new PolarVector(Math.random()*XAE4936RY,Math.random()*magnitude);var particle=new Particle(particleMass,particleRadius,position.add(velocity.scale(X0CKSXM63)),velocity);particles.push(particle);}
return particles;}
function Explosion(position,magnitude,numParticles,lifetime,color){this.position=position;this.particles=explosion(position,magnitude,1.0,XLOGNXQFI,numParticles,false);this.age=0;this.lifetime=lifetime;this.color=color;}
function updateExplosions(explosions){for(var i=0;i<explosions.length;i++){var explosion=explosions[i];explosion.age++;if(explosion.lifetime>0&&explosion.age>explosion.lifetime){explosion.particles=[];explosions.splice(i,1);}else{updateParticles(explosion.particles,XNEBM50BO,XDMPH5TTC,false);}}}
function drawExplosions(ctx,explosions){for(var i=0;i<explosions.length;i++){drawParticles(ctx,explosions[i].particles,explosions[i].color);}}
function gravForce(particle1,particle2,gravity,dropoff){var r=distance(particle1.position,particle2.position);if(r<particle1.radius+particle2.radius){return new Vector(0,0);}else{var c=(gravity*particle1.mass*particle2.mass)*Math.exp(-(dropoff)*r);var d=particle2.position.sub(particle1.position).normalize();return d.scale(c);}}
function addGravity(particles){for(var i=0;i<particles.length;i++){for(var j=0;j<particles.length;j++){if(i!=j){particles[i].addForce(gravForce(particles[i],particles[j],XPJH60KMO,XPJH60KMO_DROPOFF));}}}}
function drawGreyGoo(ctx,tmpCtx,particles){tmpCtx.clearRect(0,0,XZCD5TQGD.width,XZCD5TQGD.height);for(var i=0;i<particles.length;i++){var particle=particles[i];tmpCtx.beginPath();var gradient=tmpCtx.createRadialGradient(particle.position.x,particle.position.y,particle.radius,particle.position.x,particle.position.y,XRM41K3WI);gradient.addColorStop(0,XULND4OZR);gradient.addColorStop(1,XDXIHUH20);tmpCtx.fillStyle=gradient;tmpCtx.arc(particle.position.x,particle.position.y,particle.radius+XRM41K3WI,0,XAE4936RY);tmpCtx.fill();}
var image=tmpCtx.getImageData(0,0,XZCD5TQGD.width,XZCD5TQGD.height);var imageData=image.data;for(var i=0;i<imageData.length;i+=4){var j=i+3;if(imageData[j]<XOI2QX58Z){imageData[j]=0;}else if(XOI2QX58Z<=imageData[j]&&imageData[j]<=XXXE0ALL1){imageData[j]=255;}else if(imageData[j]>XXXE0ALL1){imageData[j]=255;}}
ctx.putImageData(image,0,0);}
function Particle(mass,radius,position,velocity){this.radius=radius;this.mass=mass;this.position=position;this.velocity=velocity;this.acceleration=new Vector(0,0);this.forces=[];}
Particle.prototype.inverseMass=function(){return(1.0/this.mass);}
Particle.prototype.applyForces=function(){var netForce=new Vector(0,0);for(var i=0;i<this.forces.length;i++){netForce=netForce.add(this.forces[i]);}
this.acceleration=netForce.scale(this.inverseMass());}
Particle.prototype.addForce=function(force){this.forces.push(force);}
Particle.prototype.clearForces=function(){this.forces=[];}
Particle.prototype.addImpulse=function(impulse){this.velocity=this.velocity.add(impulse.scale(this.inverseMass()));}
function ParticleContact(particle1,particle2){this.particle1=particle1;this.particle2=particle2;this.contactNormal=particle2.position.sub(particle1.position).normalize();this.interpenetrationDepth=particle1.radius+particle2.radius-distance(particle1.position,particle2.position);}
ParticleContact.prototype.resolveInterpenetration=function(){var totalInverseMass=this.particle1.inverseMass()+this.particle2.inverseMass();this.particle1.position=this.particle1.position.add(this.contactNormal.scale(-1.0*(this.particle1.mass*totalInverseMass)*this.interpenetrationDepth));this.particle2.position=this.particle2.position.add(this.contactNormal.scale((this.particle2.mass*totalInverseMass)*this.interpenetrationDepth));}
ParticleContact.prototype.resolveVelocity=function(){var relativeVelocity=this.particle2.velocity.sub(this.particle1.velocity);var separatingVelocity=relativeVelocity.dot(this.contactNormal);if(separatingVelocity>0){return;}
var newSeparatingVelocity=-1.0*XGQH1QM80*separatingVelocity;var deltaSeparatingVelocity=newSeparatingVelocity-separatingVelocity;var totalInverseMass=this.particle1.inverseMass()+this.particle2.inverseMass();var impulseMagnitude=deltaSeparatingVelocity/totalInverseMass;var impulse=this.contactNormal.scale(impulseMagnitude);this.particle1.addImpulse(impulse.scale(-1.0));this.particle2.addImpulse(impulse);}
function updateParticles(particles,maxSpeed,velocityDamping,collisions){var width=XY7VVMBAN.width-1;var height=XY7VVMBAN.height-1;var contacts=[];for(var i=0;i<particles.length;i++){var particle=particles[i];particle.applyForces();particle.clearForces();particle.velocity=particle.velocity.scale(Math.pow(velocityDamping,X0CKSXM63)).add(particle.acceleration.scale(X0CKSXM63));particle.velocity=particle.velocity.normalize().scale(clamp(particle.velocity.norm(),0,maxSpeed));particle.position=particle.position.add(particle.velocity.scale(X0CKSXM63)).add(particle.acceleration.scale(XU8YIOBEU));if(particle.position.x>width){particle.position.x=0;}
if(particle.position.x<0){particle.position.x=width;}
if(particle.position.y>height){particle.position.y=0;}
if(particle.position.y<0){particle.position.y=height;}
if(collisions){for(var j=i+1;j<particles.length;j++){var particle2=particles[j];if(distance(particle.position,particle2.position)<particle.radius+particle2.radius){contacts.push(new ParticleContact(particle,particle2));}}}}
if(collisions){for(var j=0;j<contacts.length;j++){contacts[j].resolveInterpenetration();contacts[j].resolveVelocity();}}}
function drawParticles(ctx,particles,color){for(var i=0;i<particles.length;i++){drawCircle(ctx,particles[i].position,particles[i].radius,color);}}
function progressBar(elementId,percent){var progressBar=$(elementId);var width=percent*progressBar.width()/100;progressBar.find("div").animate({width:width},500);}
function Ship(position,maxSpeed,damping,acceleration,turnRate){this.alive=true;this.gunFiring=false;this.gunCooldown=0;this.abActivated=false;this.abCooldown=0;this.abFuel=XDWKC8JKJ;this.position=position;this.orientation=0;this.velocity=new Vector(0,0);this.maxSpeed=maxSpeed;this.damping=damping;this.acceleration=acceleration;this.turnRate=turnRate;this.turning=0;this.accelerating=0;}
function updateShip(ship,shipModel){if(ship.alive){if(X6NR3OMEO>0){X6NR3OMEO--;}
var width=XY7VVMBAN.width-1;var height=XY7VVMBAN.height-1;var acceleration=PolarVector(ship.orientation,1).scale(ship.accelerating*ship.acceleration);ship.velocity=ship.velocity.scale(Math.pow(ship.damping,X0CKSXM63)).add(acceleration.scale(X0CKSXM63));ship.velocity=ship.velocity.normalize().scale(clamp(ship.velocity.norm(),0,ship.maxSpeed));ship.position=ship.position.add(ship.velocity.scale(X0CKSXM63)).add(acceleration.scale(XU8YIOBEU));ship.orientation+=ship.turning*ship.turnRate*X0CKSXM63;if(ship.position.x>width){ship.position.x=0;}
if(ship.position.x<0){ship.position.x=width;}
if(ship.position.y>height){ship.position.y=0;}
if(ship.position.y<0){ship.position.y=height;}
for(var i=0;i<X8RHLVBN6.length;i++){var glob=X8RHLVBN6[i];var globPosition=glob.position.sub(ship.position);globPosition=PolarVector(globPosition.angle()-ship.orientation+PI/2,globPosition.norm());if(circleIntersectTriangle(globPosition,glob.radius+(1/4)*XRM41K3WI,shipModel[0],shipModel[1],shipModel[2])&&X6NR3OMEO==0){playSound("explosion");ship.alive=false;LIVES--;XHNK11NEX=XHRPOJJRK;X9TVUHQRK.push(new Explosion(ship.position,5*XWNE3PT2E,1.5*XRMQ1G5UK,X8QEPJ4SI,XNVFH4JV7));X9TVUHQRK.push(new Explosion(ship.position,2*XWNE3PT2E,5*XRMQ1G5UK,X8QEPJ4SI,XEZYLGDR8));X9TVUHQRK.push(new Explosion(ship.position,XWNE3PT2E/3,XRMQ1G5UK,X8QEPJ4SI,X86NRHRML));X9TVUHQRK.push(new Explosion(ship.position,XWNE3PT2E/3,XRMQ1G5UK/2,X8QEPJ4SI,XTV671PUA));return;}}
if(ship.gunCooldown>0){ship.gunCooldown--;}
if(ship.gunFiring&&ship.gunCooldown==0){var shipBow=XE6QQAEL5[1];shipBow=PolarVector(shipBow.angle()+ship.orientation-PI/2,shipBow.norm()+2*X6DGR6KC1_BORDER_WIX0CKSXM63H);shipBow=shipBow.add(ship.position);X2FS92X15.push(new Bullet(shipBow,ship.orientation,XP1URRJ35,XCI5KA1AX));playSound("laser");ship.gunCooldown=XZWFY7TK3;}
if(ship.abCooldown>0){ship.abCooldown--;}
if(ship.abActivated){if(ship.abFuel>0){ship.acceleration=XSS1C3Y0U;ship.maxSpeed=AB_XY6SB110Q;ship.abFuel-=XVL6ZLSFV;ship.abFuel=clamp(ship.abFuel,0,XDWKC8JKJ);}else if(ship.abFuel==0){ship.acceleration=XNR7GLNMN;ship.maxSpeed=XY6SB110Q;}}else{ship.acceleration=XNR7GLNMN;ship.maxSpeed=XY6SB110Q;if(ship.abCooldown==0&&ship.abFuel<XDWKC8JKJ){ship.abFuel+=X5K1GVJ91;ship.abFuel=clamp(ship.abFuel,0,XDWKC8JKJ);}}}}
function drawShip(ctx,ship,model,interiorColor,borderColor,borderWidth){if(ship.alive){ctx.save();ctx.translate(ship.position.x,ship.position.y);ctx.rotate(ship.orientation-PI/2);drawPolyLine(ctx,model,interiorColor,borderColor,borderWidth,true);ctx.restore();}}
function drawEngineFlames(ctx,ship,model,interiorColor,borderColor,borderWidth){if(ship.alive){ctx.save();ctx.translate(ship.position.x,ship.position.y);ctx.rotate(ship.orientation-PI/2);drawPolyLine(ctx,model,interiorColor,borderColor,borderWidth);ctx.restore();}}
function generateShipModel(base,height){var hypotenuse=Math.sqrt(height*height+(1/4)*base*base);var theta=Math.atan((2*height)/base);var v1=new Vector(0,0);var v2=PolarVector(theta,hypotenuse);var v3=PolarVector(0,base);var center=v1.add(v2.add(v3)).scale(1/3);v1=v1.sub(center);v2=v2.sub(center);v3=v3.sub(center);return[v1,v2,v3];}
function generateEngineFlames(shipBase,shipModel,flameStep,flameMagnitude){var start=shipModel[0];var flames=[start];for(var dist=flameStep;dist<shipBase;dist+=flameStep){flames.push(new Vector(start.x+dist,start.y-random(0,flameMagnitude)-2));}
flames.push(shipModel[shipModel.length-1]);return flames;}
function sameSide(p1,p2,v1,v2){var cp1=p1.sub(v1).cross(v2.sub(v1));var cp2=p2.sub(v1).cross(v2.sub(v1));return(cp1*cp2>=0);}
function inTriangle(p,v1,v2,v3){return(sameSide(p,v3,v1,v2)&&sameSide(p,v1,v2,v3)&&sameSide(p,v2,v3,v1));}
function orthoProjection(p,v1,v2){var t=p.sub(v1).dot(v2.sub(v1))/v2.sub(v1).dot(v2.sub(v1));var op=v1.add(v2.sub(v1).scale(t));return{t:t,op:op};}
function circleIntersectTriangle(center,radius,v1,v2,v3){if(inTriangle(center,v1,v2,v3))
return true;if(distance(center,v1)<radius||distance(center,v2)<radius||distance(center,v3)<radius)
return true;var projection=orthoProjection(center,v1,v2);if(0<projection.t&&projection.t<1&&distance(center,projection.op)<radius)
return true;projection=orthoProjection(center,v2,v3);if(0<projection.t&&projection.t<1&&distance(center,projection.op)<radius)
return true;projection=orthoProjection(center,v3,v1);if(0<projection.t&&projection.t<1&&distance(center,projection.op)<radius)
return true;return false;}
var SOUNDS_MP3=[{id:"laser",src:"sounds/mp3/laser.mp3"},{id:"pop",src:"sounds/mp3/pop.mp3"},{id:"explosion",src:"sounds/mp3/explosion.mp3"},{id:"music1",src:"sounds/mp3/music1.mp3"},{id:"music2",src:"sounds/mp3/music2.mp3"},{id:"music3",src:"sounds/mp3/music3.mp3"}];var SOUNDS_OGG=[{id:"laser",src:"sounds/ogg/laser.ogg"},{id:"pop",src:"sounds/ogg/pop.ogg"},{id:"explosion",src:"sounds/ogg/explosion.ogg"},{id:"music1",src:"sounds/ogg/music1.ogg"},{id:"music2",src:"sounds/ogg/music2.ogg"},{id:"music3",src:"sounds/ogg/music3.ogg"}];function loadSounds(complete){var queue=new createjs.LoadQueue();queue.installPlugin(createjs.Sound);queue.addEventListener("complete",complete);queue.addEventListener("progress",function(data){progressBar("#progressBar",data.progress*100);});var cap=createjs.Sound.getCapabilities();if(cap.mp3){queue.loadManifest(SOUNDS_MP3);}else if(cap.ogg){queue.loadManifest(SOUNDS_OGG);}else{XWVAHIEL8=false;}}
function initSound(callback){if(XWVAHIEL8){if(!createjs.Sound.isReady()){createjs.Sound.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin]);setTimeout(function(){initSound(callback);},1000);return;}else{loadSounds(function(){XTTVQZ7WD=true;});}}
if(callback){callback.call(this);}}
function playSound(id,volume,loop,callback){if(XWVAHIEL8){volume=(volume==undefined)?1:volume;var sound=null;if(loop){sound=createjs.Sound.play(id,createjs.Sound.INTERRUPT_NONE,0,0,-1,volume,0);}else{sound=createjs.Sound.play(id,createjs.Sound.INTERRUPT_NONE,0,0,0,volume,0);}
if(callback){sound.addEventListener("complete",callback);}}}
function stopSounds(){if(XWVAHIEL8){createjs.Sound.stop();}}
function muteSounds(){SOUND_MUTED=true;createjs.Sound.setMute(true);}
function unmuteSounds(){SOUND_MUTED=false;createjs.Sound.setMute(false);}
function playMusic(){if(XWVAHIEL8){var trackNum=randomInteger(1,3);playSound("music"+trackNum,X6PYU7A2K,false,playMusic);}}
function openTwitterWindow(text,url,hashTags){var href="https://twitter.com/intent/tweet?hashtags="+encodeURIComponent(hashTags+",")+"&url="+encodeURIComponent(url)+"&text="+encodeURIComponent(text)+"&tw_p=tweetbutton";window.open(href);}
function tweetScore(){if(!X82F2WD1J||X82F2WD1J.length==0){showTwitterPrompt();}else{sendTweet(X82F2WD1J,SCORE);}}
function sendTweet(name,score){var text=name+" got a score of "+score+" playing Goosteroids! A game by @JackpineCo. Play now at";openTwitterWindow(text,"http://goosteroids.com","Goosteroids");}
function clamp(c,min,max){if(c<min)
return min;else if(c>max)
return max
else
return c;}
function random(min,max){return min+Math.random()*(max-min);}
function drawCircle(ctx,position,radius,color){ctx.beginPath();ctx.fillStyle=color;ctx.arc(position.x,position.y,radius,0,XAE4936RY);ctx.closePath();ctx.fill();}
function drawPolyLine(ctx,vertices,interiorColor,borderColor,borderWidth,isClosed){ctx.beginPath();ctx.moveTo(vertices[0].x,vertices[0].y);for(var i=1;i<vertices.length;i++){ctx.lineTo(vertices[i].x,vertices[i].y);}
if(interiorColor){ctx.fillStyle=interiorColor;ctx.fill();}
if(borderColor){ctx.lineWidth=borderWidth;ctx.strokeStyle=borderColor;if(isClosed){ctx.closePath();ctx.stroke();}else{ctx.stroke();}}}
function chomp(str,search,replace){return str.replace(new RegExp(search+"$"),replace);}
function strHash(hash){return JSON.stringify(hash,null," ");}
function toUTC(date){return Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds());}
function randomInteger(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function Vector(x,y){this.x=x;this.y=y;}
Vector.prototype.add=function(v){return new Vector(this.x+v.x,this.y+v.y);}
Vector.prototype.sub=function(v){return new Vector(this.x-v.x,this.y-v.y);}
Vector.prototype.scale=function(c){return new Vector(c*this.x,c*this.y);}
Vector.prototype.dot=function(v){return this.x*v.x+this.y*v.y;}
Vector.prototype.cross=function(v){return this.x*v.y-this.y*v.x;}
Vector.prototype.angle=function(){return Math.atan(this.y,this.x);}
Vector.prototype.norm=function(){return Math.sqrt(this.x*this.x+this.y*this.y);}
Vector.prototype.normalize=function(){var c=this.norm();if(c==0){return this;}else{return this.scale(1/c);}}
Vector.prototype.toString=function(){return"Vector("+this.x+", "+this.y+")";}
function PolarVector(angle,length){return new Vector(length*Math.cos(angle),length*Math.sin(angle));}
function distance(v1,v2){return v1.sub(v2).norm();}