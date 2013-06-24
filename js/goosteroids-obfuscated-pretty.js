var XUHW66S3R = 30;
var X436KZALF = 1 / XUHW66S3R;
var XE5LDYJXG = X436KZALF * X436KZALF;
var XH0HFHZ59 = Math['XH0HFHZ59'];
var XEIX8I4RI = 2 * Math['XH0HFHZ59'];
var XL94QDN6Y = 30;
var XL94QDN6Y_DROPOFF = 0.001;
var XAAVSM0SZ = 400;
var XABQGYVHN = 250;
var X6SIT0L82 = 30;
var XTQXEGO02 = 700;
var XV26D9ZKA = 1;
var XHYB7DMJ2 = 0.80;
var XN23SJKQM = 5;
var GLOB_DAMXH0HFHZ59NG = 1;
var X704T9V75 = 200;
var XDSUR7CD4 = 150;
var GRADIENT_RADIUS = 15;
var XHAXQ1GJG = 'rgba(80, 80, 80, 1)';
var XLEG3KN3F = 'rgba(80, 80, 80, 0)';
var XFAEXJMA3 = '#b0b0b0';
var X3DZQJ84P = 650;
var XNZ4PWTTJ = 20;
var XROXZ39TA = 2;
var XQYXBVN7W = '#ffffff';
var EXPLOSION_DAMXH0HFHZ59NG = 0.8;
var XXRWI3JNM = 15;
var X1V1WGLQD = 2;
var XHHEI73EJ = 20;
var XMBGJ8Q24 = 1000;
var XAKZPKYGY = 'black';
var XYBUZ6L00 = 'white';
var X7W1JZP37 = 'yellow';
var XPN955OZ1 = 'red';
var X7EWVEMYE = 6;
var X16P940HG = 400;
var X9YZQX4YD = 500;
var XMDKI8MRG = XEIX8I4RI / (XUHW66S3R * 0.04);
var XGRL4VVL7_DAMXH0HFHZ59NG = 0.5;
var XEX8SD6JL = [];
var XEX8SD6JL_BASE = 15;
var XEX8SD6JL_HEIGHT = 25;
var X4QEQVPIP = '#e95258';
var XU48QGL0M = '#ffffff';
var XGRL4VVL7_BORDER_WIX436KZALFH = 3;
var XHKYYINFL = 6 * X9YZQX4YD;
var XZWFL8O1S = 5;
var XPCGXF9H0 = 2;
var XKCYJXV63 = 100;
var XQO2G1Z79 = 60;
var AB_X16P940HG = 2.25 * X16P940HG;
var XUCF9NJNA = 'blue';
var XP5JWWXGU = 3;
var X8W8AIO7I = '#ffffff';
var X39LFHHHD = 6;
var XN2E6O0H6 = 2;
var X2VOTE6OZ = 17;
var XB0AY6NXK = 3;
var X3IU3JW2F = 3 * XUHW66S3R;
var XZ5B1QNAM = 0;
var CANVAS = null;
var TMP_CANVAS = null;
var CTX = null;
var TMP_CTX = null;
var XGRL4VVL7 = null;
var XPRY9S7LB = [];
var X46CRSBQV = [];
var XXP31DR33 = [];
var X94RU20N4 = [];
var XHNIT16U9 = [];
var XHGL17CIM = 38;
var XDO4MXTAV = 40;
var XH82K7Y7Y = 37;
var XR5WJBRCZ = 39;
var XYVG0NBI7 = 32;
var X6CIFMYKA = 16;
var X8YG01Z6Q = '';
var XJYIJSORI = 1;
var XCJZIEF4K = 0;
var X61WVOO4N = 3;
var XYQIGZ4WO = 0;
var XVZ76KH2N = null;
var XAJZC9ITQ = null;
var X7JSD9QW5 = 7500;
var XTPTASFKI = '<%= @session_id %>';
var XHYQ6WKTH = 0;
var XKW407XVU = true;
var XXWTNCYQ4 = false;
var X4FVCQ5JH = 1;
var X7U1QEF8X = 1;
var XWVU8VL5B = false;
var XO51UTQ2Y = true;

function spawnShip() {
    var _0xf5b1x5e = new Vector(CANVAS['width'] / 2, CANVAS['height'] / 2);
    XGRL4VVL7 = new Ship(_0xf5b1x5e, X16P940HG, XGRL4VVL7_DAMXH0HFHZ59NG, X9YZQX4YD, XMDKI8MRG);
    XGRL4VVL7['orientation'] = -XH0HFHZ59 / 2;
};

function respawn() {
    if (!XGRL4VVL7['alive'] && XZ5B1QNAM > 0) {
        XZ5B1QNAM--;
        var _0xf5b1x60 = Math['ceil'](XZ5B1QNAM / XUHW66S3R);
        if (_0xf5b1x60 > 0) {
            displayRespawnMessage(CANVAS, CTX, _0xf5b1x60);
        };
    } else {
        if (!XGRL4VVL7['alive'] && XZ5B1QNAM == 0) {
            spawnShip();
        };
    };
};

function mainLoop() {
    CTX['clearRect'](0, 0, CANVAS['width'], CANVAS['height']);
    if (XPRY9S7LB['length'] == 0) {
        X46CRSBQV = [];
        stageOver();
    };
    addGravity(XPRY9S7LB);
    updateBullets(X46CRSBQV);
    updateParticles(XPRY9S7LB, XAAVSM0SZ, GLOB_DAMXH0HFHZ59NG, true);
    updateShip(XGRL4VVL7, XEX8SD6JL);
    updateExplosions(XXP31DR33);
    drawGreyGoo(CTX, TMP_CTX, XPRY9S7LB);
    drawShip(CTX, XGRL4VVL7, XEX8SD6JL, X4QEQVPIP, XU48QGL0M, XGRL4VVL7_BORDER_WIX436KZALFH);
    if (XGRL4VVL7['accelerating'] && !XGRL4VVL7['abActivated']) {
        var _0xf5b1x62 = generateEngineFlames(XEX8SD6JL_BASE, XEX8SD6JL, XN2E6O0H6, X39LFHHHD);
        drawEngineFlames(CTX, XGRL4VVL7, _0xf5b1x62, null, XUCF9NJNA, XP5JWWXGU);
    };
    if (XGRL4VVL7['accelerating'] && XGRL4VVL7['abActivated'] && XGRL4VVL7['abFuel'] > 0) {
        var _0xf5b1x62 = generateEngineFlames(XEX8SD6JL_BASE, XEX8SD6JL, XB0AY6NXK, X2VOTE6OZ);
        drawEngineFlames(CTX, XGRL4VVL7, _0xf5b1x62, null, XUCF9NJNA, XP5JWWXGU);
    };
    drawBullets(CTX, X46CRSBQV);
    drawExplosions(CTX, XXP31DR33);
    drawAbDisplay(CANVAS, CTX, XGRL4VVL7['abFuel']);
    drawStageDisplay(CANVAS, CTX, XJYIJSORI);
    drawLivesDisplay(CANVAS, CTX, X61WVOO4N);
    drawScoreDisplay(CANVAS, CTX, XCJZIEF4K);
    if (X61WVOO4N < 0) {
        gameOver();
        return;
    };
    respawn();
};

function startGameLoop() {
    XVZ76KH2N = setInterval(mainLoop, 1000 / XUHW66S3R);
};

function stopGameLoop() {
    clearInterval(XVZ76KH2N);
};

function updateLoop() {
    updateGame(XYQIGZ4WO);
    XYQIGZ4WO = 0;
};

function startUpdateLoop() {
    XAJZC9ITQ = setInterval(updateLoop, X7JSD9QW5);
};

function stopUpdateLoop() {
    clearInterval(XAJZC9ITQ);
};

function showInstructions() {
    $('#introduction')['fadeOut'](2000);
    $('#instructions')['fadeIn'](2000);
};

function playGame() {
    playMusic();
    CTX['clearRect'](0, 0, CANVAS['width'], CANVAS['height']);
    X8YG01Z6Q = '';
    XCJZIEF4K = 0;
    XJYIJSORI = 1;
    X61WVOO4N = 3;
    XYQIGZ4WO = 0;
    XPRY9S7LB = [];
    X46CRSBQV = [];
    XXP31DR33 = [];
    spawnShip();
    $('#instructions')['stop']();
    $('#stageMessage')['html']('Stage ' + XJYIJSORI);
    $('#instructions:visible')['fadeOut'](2000);
    $('#stage')['fadeIn'](2000, function () {
        setTimeout(function () {
            $('#game')['show']();
            $('#stage')['fadeOut'](2000, function () {
                newGame(function (_0xf5b1x6a) {
                    XHYQ6WKTH = _0xf5b1x6a['game_id'];
                    loadSettings(function () {
                        enableEventHandlers();
                        startGameLoop();
                        startUpdateLoop();
                    });
                });
            });
        }, 500);
    });
};

function stageOver() {
    stopUpdateLoop();
    stopGameLoop();
    endStage(XYQIGZ4WO, function () {
        $('#stageMessage')['html']('Stage ' + XJYIJSORI);
        $('#stage')['fadeIn'](2000, function () {
            setTimeout(function () {
                $('#stage')['fadeOut'](2000);
                $('#game')['fadeIn'](2000);
                loadSettings(function () {
                    spawnShip();
                    startGameLoop();
                    startUpdateLoop();
                });
            }, 500);
        });
    });
    XYQIGZ4WO = 0;
};

function gameOver() {
    stopSounds();
    disableEventHandlers();
    stopUpdateLoop();
    stopGameLoop();
    endGame(XYQIGZ4WO, function (_0xf5b1x6a) {
        $('#gameOver')['show']();
        $('#game')['fadeOut'](2000, function () {
            if (_0xf5b1x6a['high_score']) {
                showHighScorePrompt(highScores);
            } else {
                highScores();
            };
        });
    });
    XYQIGZ4WO = 0;
};

function highScores() {
    getHighScores(function (_0xf5b1x6a) {
        var _0xf5b1x6e = _0xf5b1x6a['high_scores'];
        $('#score')['text'](XCJZIEF4K);
        $('table.highScores tr:not(.table-header)')['remove']();
        for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1x6e['length']; _0xf5b1x6f++) {
            var _0xf5b1x70 = '<tr>';
            _0xf5b1x70 += '<td>' + _0xf5b1x6e[_0xf5b1x6f]['player_name'] + '</td>';
            _0xf5b1x70 += '<td>' + _0xf5b1x6e[_0xf5b1x6f]['stage'] + '</td>';
            _0xf5b1x70 += '<td>' + _0xf5b1x6e[_0xf5b1x6f]['score'] + '</td>';
            _0xf5b1x70 += '<td>' + _0xf5b1x6e[_0xf5b1x6f]['time'] + '</td>';
            _0xf5b1x70 += '</tr>';
            $('table.highScores')['append'](_0xf5b1x70);
        };
        $('#highScores')['show']();
        $('#gameOver')['fadeOut'](2000);
    });
};

function initGame(_0xf5b1x72) {
    if (XKW407XVU && !XXWTNCYQ4) {
        setTimeout(function () {
            initGame(_0xf5b1x72);
        }, 1000);
        return;
    };
    CANVAS = document['getElementById']('canvas');
    CTX = CANVAS['getContext']('2d');
    TMP_CANVAS = document['createElement']('canvas');
    TMP_CANVAS['width'] = CANVAS['width'];
    TMP_CANVAS['height'] = CANVAS['height'];
    TMP_CTX = TMP_CANVAS['getContext']('2d');
    XEX8SD6JL = generateShipModel(XEX8SD6JL_BASE, XEX8SD6JL_HEIGHT);
    spawnShip();
    $('body')['focus']();
    $('body')['keydown'](function (_0xf5b1x73) {
        handleKeyDownEvent(_0xf5b1x73);
    });
    $('body')['keyup'](function (_0xf5b1x73) {
        handleKeyUpEvent(_0xf5b1x73);
    });
    addKeyDownHandler(new KeyEventHandler(XHGL17CIM, upArrowDown));
    addKeyUpHandler(new KeyEventHandler(XHGL17CIM, upArrowUp));
    addKeyDownHandler(new KeyEventHandler(XH82K7Y7Y, leftArrowDown));
    addKeyUpHandler(new KeyEventHandler(XH82K7Y7Y, leftArrowUp));
    addKeyDownHandler(new KeyEventHandler(XR5WJBRCZ, rightArrowDown));
    addKeyUpHandler(new KeyEventHandler(XR5WJBRCZ, rightArrowUp));
    addKeyDownHandler(new KeyEventHandler(XYVG0NBI7, spaceBarDown));
    addKeyUpHandler(new KeyEventHandler(XYVG0NBI7, spaceBarUp));
    addKeyDownHandler(new KeyEventHandler(X6CIFMYKA, shiftDown));
    addKeyUpHandler(new KeyEventHandler(X6CIFMYKA, shiftUp));
    _0xf5b1x72['call'](this);
};
$(document)['ready'](function () {
    initSound(function () {
        initGame(function () {
            setTimeout(showInstructions, 2000);
        });
    });
});
var UPDATING = false;

function error(_0xf5b1x6a) {
    return _0xf5b1x6a['type'].valueOf() == 'error';
};

function handleError(_0xf5b1x6a) {
    if (_0xf5b1x6a['type'].valueOf() == 'error') {
        stopUpdateLoop();
        stopGameLoop();
        var _0xf5b1x77 = _0xf5b1x6a['error_message'];
        if (XO51UTQ2Y) {
            console['log']('Error: ' + _0xf5b1x77);
        };
        showErrorDialog(_0xf5b1x77);
    };
};

function handleAjaxFailure(_0xf5b1x79, _0xf5b1x7a) {
    stopUpdateLoop();
    stopGameLoop();
    var _0xf5b1x77 = 'Ajax failure: ' + _0xf5b1x79 + ' (' + _0xf5b1x7a + ')';
    if (XO51UTQ2Y) {
        console['log'](_0xf5b1x77);
    };
    showErrorDialog(_0xf5b1x77);
};

function sendAjaxRequest(_0xf5b1x7c, _0xf5b1x6a, _0xf5b1x72) {
    _0xf5b1x6a['session_id'] = XTPTASFKI;
    if (XO51UTQ2Y) {
        console['log']('ajax request: ' + _0xf5b1x7c + ', data: ' + strHash(_0xf5b1x6a));
    };
    var _0xf5b1x7d = $['ajax']({
        url: _0xf5b1x7c,
        type: 'POST',
        timeout: 2000,
        dataType: 'json',
        cache: false,
        data: _0xf5b1x6a
    });
    _0xf5b1x7d['done'](function (_0xf5b1x6a, _0xf5b1x79, _0xf5b1x7e) {
        if (XO51UTQ2Y) {
            console['log']('ajax response: ' + _0xf5b1x7c + ', status: ' + _0xf5b1x79 + ', data: ' + strHash(_0xf5b1x6a));
        };
        if (error(_0xf5b1x6a)) {
            handleError(_0xf5b1x6a);
        } else {
            if (_0xf5b1x72) {
                _0xf5b1x72['call'](this, _0xf5b1x6a);
            };
        };
    });
    _0xf5b1x7d['fail'](function (_0xf5b1x7e, _0xf5b1x79, _0xf5b1x7a) {
        if (XO51UTQ2Y) {
            console['log']('ajax response: ' + _0xf5b1x7c + ', status: ' + _0xf5b1x79 + ', error: ' + _0xf5b1x7a);
        };
        handleAjaxFailure(_0xf5b1x79, _0xf5b1x7a);
    });
};

function newGame(_0xf5b1x72) {
    sendAjaxRequest('goosteroids/new_game.json', {}, _0xf5b1x72);
};

function loadSettings(_0xf5b1x72) {
    var _0xf5b1x6a = {
        game_id: XHYQ6WKTH
    };
    sendAjaxRequest('goosteroids/get_settings.json', _0xf5b1x6a, function (_0xf5b1x6a) {
        XL94QDN6Y = _0xf5b1x6a['settings']['gravity'];
        XL94QDN6Y_DROPOFF = _0xf5b1x6a['settings']['gravity_dropoff'];
        XAAVSM0SZ = _0xf5b1x6a['settings']['glob_max_speed'];
        X6SIT0L82 = _0xf5b1x6a['settings']['glob_blast_radius'];
        XTQXEGO02 = _0xf5b1x6a['settings']['glob_blast_magnitude'];
        XHYB7DMJ2 = _0xf5b1x6a['settings']['glob_cr'];
        addBlobs(_0xf5b1x6a['settings']['blobs']);
        if (_0xf5b1x72) {
            _0xf5b1x72['call'](this, _0xf5b1x6a);
        };
    });
};

function updateGame(_0xf5b1x82, _0xf5b1x72) {
    if (!UPDATING) {
        UPDATING = true;
        var _0xf5b1x6a = {
            game_id: XHYQ6WKTH,
            lives: X61WVOO4N,
            globs_destroyed: _0xf5b1x82
        };
        sendAjaxRequest('goosteroids/update_game.json', _0xf5b1x6a, function (_0xf5b1x6a) {
            UPDATING = false;
            if (_0xf5b1x72) {
                _0xf5b1x72['call'](this, _0xf5b1x6a);
            };
        });
    } else {
        setTimeout(function () {
            updateGame(_0xf5b1x72);
        }, 1000);
    };
};

function endStage(_0xf5b1x82, _0xf5b1x72) {
    var _0xf5b1x6a = {
        game_id: XHYQ6WKTH,
        globs_destroyed: _0xf5b1x82
    };
    sendAjaxRequest('goosteroids/end_stage.json', _0xf5b1x6a, function (_0xf5b1x6a) {
        XJYIJSORI++;
        if (_0xf5b1x72) {
            _0xf5b1x72['call'](this, _0xf5b1x6a);
        };
    });
};

function endGame(_0xf5b1x82, _0xf5b1x72) {
    var _0xf5b1x6a = {
        game_id: XHYQ6WKTH,
        globs_destroyed: _0xf5b1x82
    };
    sendAjaxRequest('goosteroids/end_game.json', _0xf5b1x6a, _0xf5b1x72);
};

function setPlayerName(_0xf5b1x86, _0xf5b1x72) {
    var _0xf5b1x6a = {
        game_id: XHYQ6WKTH,
        name: _0xf5b1x86
    };
    sendAjaxRequest('goosteroids/set_player_name.json', _0xf5b1x6a, _0xf5b1x72);
};

function getHighScores(_0xf5b1x72) {
    sendAjaxRequest('goosteroids/get_high_scores.json', {}, _0xf5b1x72);
};

function createBlob(_0xf5b1x89, _0xf5b1x8a, _0xf5b1x8b, _0xf5b1x8c) {
    var _0xf5b1x8d = explosion(_0xf5b1x8a, XABQGYVHN, XV26D9ZKA, XN23SJKQM, _0xf5b1x89, true);
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1x8d['length']; _0xf5b1x6f++) {
        _0xf5b1x8d[_0xf5b1x6f]['velocity'] = PolarVector(_0xf5b1x8b, _0xf5b1x8c);
    };
    return _0xf5b1x8d;
};

function addBlobs(_0xf5b1x8f) {
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1x8f['length']; _0xf5b1x6f++) {
        var _0xf5b1x90 = createBlob(_0xf5b1x8f[_0xf5b1x6f]['size'], new Vector(random(0, $('#canvas')['width']() - 1), random(0, $('#canvas')['height']() - 1)), random(0, XEIX8I4RI), _0xf5b1x8f[_0xf5b1x6f]['speed']);
        for (var _0xf5b1x91 = 0; _0xf5b1x91 < _0xf5b1x90['length']; _0xf5b1x91++) {
            XPRY9S7LB['push'](_0xf5b1x90[_0xf5b1x91]);
        };
    };
};

function Bullet(_0xf5b1x8a, _0xf5b1x93, _0xf5b1x8c, _0xf5b1x94) {
    this['position'] = _0xf5b1x8a;
    this['velocity'] = PolarVector(_0xf5b1x93, _0xf5b1x8c);
    this['lifetime'] = _0xf5b1x94;
    this['age'] = 0;
    this['lifetime'] = _0xf5b1x94;
};

function updateBullets(_0xf5b1x96) {
    var _0xf5b1x97 = CANVAS['width'] - 1;
    var _0xf5b1x98 = CANVAS['height'] - 1;
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1x96['length']; _0xf5b1x6f++) {
        var _0xf5b1x99 = _0xf5b1x96[_0xf5b1x6f];
        _0xf5b1x99['age']++;
        if (_0xf5b1x99['lifetime'] > 0 && _0xf5b1x99['age'] > _0xf5b1x99['lifetime']) {
            _0xf5b1x96['splice'](_0xf5b1x6f, 1);
        } else {
            _0xf5b1x99['position'] = _0xf5b1x99['position']['add'](_0xf5b1x99['velocity']['scale'](X436KZALF));
            if (_0xf5b1x99['position']['x'] > _0xf5b1x97) {
                _0xf5b1x99['position']['x'] = 0;
            };
            if (_0xf5b1x99['position']['x'] < 0) {
                _0xf5b1x99['position']['x'] = _0xf5b1x97;
            };
            if (_0xf5b1x99['position']['y'] > _0xf5b1x98) {
                _0xf5b1x99['position']['y'] = 0;
            };
            if (_0xf5b1x99['position']['y'] < 0) {
                _0xf5b1x99['position']['y'] = _0xf5b1x98;
            };
        };
        for (var _0xf5b1x91 = 0; _0xf5b1x91 < XPRY9S7LB['length']; _0xf5b1x91++) {
            var _0xf5b1x9a = XPRY9S7LB[_0xf5b1x91];
            if (distance(_0xf5b1x99['position'], _0xf5b1x9a['position']) < _0xf5b1x9a['radius'] + XROXZ39TA + GRADIENT_RADIUS / 2) {
                playSound('pop');
                XYQIGZ4WO++;
                _0xf5b1x96['splice'](_0xf5b1x6f, 1);
                XPRY9S7LB['splice'](_0xf5b1x91, 1);
                XXP31DR33['push'](new Explosion(_0xf5b1x9a['position'], XABQGYVHN, XXRWI3JNM, XHHEI73EJ, XFAEXJMA3));
                XCJZIEF4K += 10;
                for (var _0xf5b1x9b = 0; _0xf5b1x9b < XPRY9S7LB['length']; _0xf5b1x9b++) {
                    var _0xf5b1x9c = XPRY9S7LB[_0xf5b1x9b];
                    if (_0xf5b1x91 != _0xf5b1x9b && (distance(_0xf5b1x9a['position'], _0xf5b1x9c['position']) < _0xf5b1x9c['radius'] + _0xf5b1x9a['radius'] + X6SIT0L82)) {
                        var _0xf5b1x9d = _0xf5b1x9c['position']['sub'](_0xf5b1x9a['position'])['normalize']();
                        var _0xf5b1x9e = _0xf5b1x9d['scale'](XTQXEGO02);
                        _0xf5b1x9c['addImpulse'](_0xf5b1x9e);
                    };
                };
            };
        };
    };
};

function drawBullets(_0xf5b1xa0, _0xf5b1x96) {
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1x96['length']; _0xf5b1x6f++) {
        drawCircle(_0xf5b1xa0, _0xf5b1x96[_0xf5b1x6f]['position'], XROXZ39TA, XQYXBVN7W);
    };
};

function showDialog(_0xf5b1xa2, _0xf5b1x77, _0xf5b1xa3, _0xf5b1xa4, _0xf5b1xa5) {
    $('#dialogTitle')['text'](_0xf5b1xa2);
    $('#dialogMessage')['html'](_0xf5b1x77);
    if (_0xf5b1xa4) {
        $('#dialogInput')['show']();
        $('#dialogInput')['val']('');
    } else {
        $('#dialogInput')['hide']();
    };
    $('#dialogFooter')['html']('');
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xa3['length']; _0xf5b1x6f++) {
        var _0xf5b1xa6 = '';
        if (_0xf5b1xa3['length'] == 2 && _0xf5b1x6f == 0) {
            _0xf5b1xa6 = '<div class=\'dialog-button\' style=\'text-align:right;\'>';
        } else {
            if (_0xf5b1xa3['length'] == 2 && _0xf5b1x6f == 1) {
                _0xf5b1xa6 = '<div class=\'dialog-button\' style=\'text-align:left;\'>';
            } else {
                _0xf5b1xa6 = '<div class=\'dialog-button\'>';
            };
        };
        _0xf5b1xa6 += '<button class=\'dialog-button\'>' + _0xf5b1xa3[_0xf5b1x6f]['label'] + '</button></div>';
        $('#dialogFooter')['append'](_0xf5b1xa6);
        if (_0xf5b1xa3[_0xf5b1x6f]['click']) {
            $('button.dialog-button')['eq'](_0xf5b1x6f)['click'](_0xf5b1xa3[_0xf5b1x6f]['click']);
        };
    };
    $('button.dialog-button')['hover'](function () {
        $(this)['stop']()['animate']({
            backgroundColor: '#0000ff'
        }, 'slow');
    }, function () {
        $(this)['stop']()['animate']({
            backgroundColor: '#e95258'
        }, 'slow');
    });
    if (_0xf5b1xa5) {
        $('#dialog')['modal']({
            onClose: _0xf5b1xa5
        });
    } else {
        $('#dialog')['modal']();
    };
};

function showErrorDialog(_0xf5b1x77) {
    var _0xf5b1xa8 = {
        label: 'Close',
        click: function () {
            $['modal']['close']();
            window['location'] = '/';
        }
    };
    showDialog('ERROR!', _0xf5b1x77, [_0xf5b1xa8], false);
};

function showHighScorePrompt(_0xf5b1xa5) {
    var _0xf5b1x77 = 'Congratulations you got a high score!<br>Brag about it by entering your name below:<br><br>';
    var _0xf5b1xaa = {
        label: 'Submit',
        click: function () {
            var _0xf5b1x86 = $('#dialogInput')['val']();
            if (!_0xf5b1x86 || _0xf5b1x86['trim']()['length'] == 0) {
                $('#dialogMessage')['html']('Bragging requires a name!<br>Please enter your name below:<br><br>');
            } else {
                $['modal']['close']();
                X8YG01Z6Q = _0xf5b1x86;
                setPlayerName(_0xf5b1x86, function () {
                    if (_0xf5b1xa5) {
                        _0xf5b1xa5();
                    };
                });
            };
        }
    };
    var _0xf5b1xab = {
        label: 'Cancel',
        click: function () {
            $['modal']['close']();
            if (_0xf5b1xa5) {
                _0xf5b1xa5();
            };
        }
    };
    showDialog('HIGH XCJZIEF4K!', _0xf5b1x77, [_0xf5b1xaa, _0xf5b1xab], true);
};

function showTwitterPrompt() {
    var _0xf5b1x77 = 'Please enter your name below to tweet your score:<br><br>';
    var _0xf5b1xaa = {
        label: 'Submit',
        click: function () {
            var _0xf5b1x86 = $('#dialogInput')['val']();
            if (!_0xf5b1x86 || _0xf5b1x86['trim']()['length'] == 0) {
                $('#dialogMessage')['html']('Names contain characters silly!<br>Please enter your name below to tweet your score:<br><br>');
            } else {
                $['modal']['close']();
                setPlayerName(_0xf5b1x86);
                sendTweet(_0xf5b1x86, XCJZIEF4K);
            };
        }
    };
    var _0xf5b1xab = {
        label: 'Cancel',
        click: function () {
            $['modal']['close']();
        }
    };
    showDialog('ENTER PLAYER NAME', _0xf5b1x77, [_0xf5b1xaa, _0xf5b1xab], true);
};

function showAboutDialog(_0xf5b1xa5) {
    var _0xf5b1x77 = 'The <a href=\'http://jackpine.co/work.php#greygoo\' target=\'_blank\'>"grey goo"</a> of the Internet has come alive in this remake of the classic <a href=\'http://en.wikipedia.org/wiki/Asteroids_(video_game)\' target=\'_blank\'>Asteroids game</a>! Globs of goo are attracted to one another and clump together to form blobs. You must destroy these globs and blobs - by shooting them with your spaceship\'s laser - before they take over the entire universe! Blobs fly apart when shot, and the force of attraction between the globs results in fast, crazy, and unpredictable motion!';
    var _0xf5b1xa8 = {
        label: 'Close',
        click: function () {
            $['modal']['close']();
        }
    };
    showDialog('ABOUT', _0xf5b1x77, [_0xf5b1xa8], false, _0xf5b1xa5);
};

function showCreditsDialog(_0xf5b1xa5) {
    var _0xf5b1x77 = '<b>Programming:</b> James McLean<br><b>Design:</b> Liam Mooney, Tom Jansen, Taulant Sulko<br><b>Music:</b> Sycamore Drive, RushJet1, Rocco Wouters<br><b>Sound effects:</b> Mike Koenig';
    var _0xf5b1xa8 = {
        label: 'Close',
        click: function () {
            $['modal']['close']();
        }
    };
    showDialog('CREDITS', _0xf5b1x77, [_0xf5b1xa8], false, _0xf5b1xa5);
};

function drawScoreDisplay(_0xf5b1xb0, _0xf5b1xa0, _0xf5b1xb1) {
    var _0xf5b1xb2 = new Vector(_0xf5b1xb0['width'] - 100, 50);
    _0xf5b1xa0['save']();
    _0xf5b1xa0['font'] = 'bold 24px Arial';
    _0xf5b1xa0['fillStyle'] = 'white';
    _0xf5b1xa0['fillText'](_0xf5b1xb1, _0xf5b1xb2['x'], _0xf5b1xb2['y']);
    _0xf5b1xa0['restore']();
};

function drawStageDisplay(_0xf5b1xb0, _0xf5b1xa0, _0xf5b1xb4) {
    _0xf5b1xa0['save']();
    _0xf5b1xa0['font'] = 'bold 10px Arial';
    _0xf5b1xa0['fillStyle'] = 'white';
    _0xf5b1xa0['fillText']('XJYIJSORI', 20, 55);
    _0xf5b1xa0['fillText'](_0xf5b1xb4, 60, 55);
    _0xf5b1xa0['restore']();
};

function drawLivesDisplay(_0xf5b1xb0, _0xf5b1xa0, _0xf5b1xb6) {
    _0xf5b1xa0['save']();
    _0xf5b1xa0['font'] = 'bold 10px Arial';
    _0xf5b1xa0['fillStyle'] = 'white';
    _0xf5b1xa0['fillText']('X61WVOO4N', 20, 75);
    _0xf5b1xa0['fillText'](_0xf5b1xb6, 60, 75);
    _0xf5b1xa0['restore']();
};

function drawAbDisplay(_0xf5b1xb0, _0xf5b1xa0, _0xf5b1xb8) {
    var _0xf5b1xb2 = new Vector(20, 34);
    _0xf5b1xa0['save']();
    _0xf5b1xa0['font'] = 'bold 10px Arial';
    _0xf5b1xa0['fillStyle'] = 'white';
    _0xf5b1xa0['fillText']('TURBO', _0xf5b1xb2['x'], _0xf5b1xb2['y']);
    _0xf5b1xa0['beginPath']();
    _0xf5b1xa0['rect'](_0xf5b1xb2['x'] + 43, _0xf5b1xb2['y'] - 9, 102, 10);
    _0xf5b1xa0['fillStyle'] = 'white';
    _0xf5b1xa0['fill']();
    _0xf5b1xa0['lineWidth'] = 2;
    _0xf5b1xa0['strokeStyle'] = 'white';
    _0xf5b1xa0['stroke']();
    _0xf5b1xa0['beginPath']();
    _0xf5b1xa0['rect'](_0xf5b1xb2['x'] + 44, _0xf5b1xb2['y'] - 8, (_0xf5b1xb8 / XKCYJXV63) * 100, 8);
    _0xf5b1xa0['fillStyle'] = 'blue';
    _0xf5b1xa0['fill']();
    _0xf5b1xa0['restore']();
};

function displayRespawnMessage(_0xf5b1xb0, _0xf5b1xa0, _0xf5b1xba) {
    var _0xf5b1x5e = new Vector(_0xf5b1xb0['width'] / 2, _0xf5b1xb0['height'] / 2);
    _0xf5b1xa0['save']();
    _0xf5b1xa0['font'] = 'bold 18px Arial';
    _0xf5b1xa0['fillStyle'] = 'white';
    _0xf5b1xa0['textAlign'] = 'center';
    _0xf5b1xa0['fillText']('RESPAWNING IN ' + _0xf5b1xba, _0xf5b1x5e['x'], _0xf5b1x5e['y']);
    _0xf5b1xa0['restore']();
};
var KEY_EVENTS_ENABLED = false;

function enableEventHandlers() {
    KEY_EVENTS_ENABLED = true;
};

function disableEventHandlers() {
    KEY_EVENTS_ENABLED = false;
};

function KeyEventHandler(_0xf5b1xbf, _0xf5b1xc0) {
    this['key'] = _0xf5b1xbf;
    this['action'] = _0xf5b1xc0;
};

function addKeyDownHandler(_0xf5b1xc2) {
    X94RU20N4['push'](_0xf5b1xc2);
};

function addKeyUpHandler(_0xf5b1xc2) {
    XHNIT16U9['push'](_0xf5b1xc2);
};

function handleKeyDownEvent(_0xf5b1x73) {
    if (KEY_EVENTS_ENABLED) {
        for (var _0xf5b1x6f = 0; _0xf5b1x6f < X94RU20N4['length']; _0xf5b1x6f++) {
            var _0xf5b1xc2 = X94RU20N4[_0xf5b1x6f];
            if (_0xf5b1xc2['key'] == _0xf5b1x73['which']) {
                _0xf5b1xc2['action']();
                _0xf5b1x73['preventDefault']();
            };
        };
    };
};

function handleKeyUpEvent(_0xf5b1x73) {
    if (KEY_EVENTS_ENABLED) {
        for (var _0xf5b1x6f = 0; _0xf5b1x6f < XHNIT16U9['length']; _0xf5b1x6f++) {
            var _0xf5b1xc2 = XHNIT16U9[_0xf5b1x6f];
            if (_0xf5b1xc2['key'] == _0xf5b1x73['which']) {
                _0xf5b1xc2['action']();
                _0xf5b1x73['preventDefault']();
            };
        };
    };
};

function upArrowDown() {
    XGRL4VVL7['accelerating'] = 1;
};

function upArrowUp() {
    XGRL4VVL7['accelerating'] = 0;
};

function leftArrowDown() {
    XGRL4VVL7['turning'] = -1;
};

function leftArrowUp() {
    XGRL4VVL7['turning'] = 0;
};

function rightArrowDown() {
    XGRL4VVL7['turning'] = 1;
};

function rightArrowUp() {
    XGRL4VVL7['turning'] = 0;
};

function spaceBarDown() {
    XGRL4VVL7['gunFiring'] = true;
};

function spaceBarUp() {
    XGRL4VVL7['gunFiring'] = false;
};

function shiftDown() {
    XGRL4VVL7['abActivated'] = true;
};

function shiftUp() {
    XGRL4VVL7['abActivated'] = false;
    XGRL4VVL7['abCooldown'] = XQO2G1Z79;
};

function explosion(_0xf5b1x8a, _0xf5b1xd1, _0xf5b1xd2, _0xf5b1xd3, _0xf5b1xd4, _0xf5b1xd5) {
    var _0xf5b1xd6 = [];
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xd4; _0xf5b1x6f++) {
        var _0xf5b1xd7 = new PolarVector(Math['random']() * XEIX8I4RI, Math['random']() * _0xf5b1xd1);
        var _0xf5b1xd8 = new Particle(_0xf5b1xd2, _0xf5b1xd3, _0xf5b1x8a['add'](_0xf5b1xd7['scale'](X436KZALF)), _0xf5b1xd7);
        _0xf5b1xd6['push'](_0xf5b1xd8);
    };
    return _0xf5b1xd6;
};

function Explosion(_0xf5b1x8a, _0xf5b1xd1, _0xf5b1xd4, _0xf5b1x94, _0xf5b1xda) {
    this['position'] = _0xf5b1x8a;
    this['particles'] = explosion(_0xf5b1x8a, _0xf5b1xd1, 1.0, X1V1WGLQD, _0xf5b1xd4, false);
    this['age'] = 0;
    this['lifetime'] = _0xf5b1x94;
    this['color'] = _0xf5b1xda;
};

function updateExplosions(_0xf5b1xdc) {
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xdc['length']; _0xf5b1x6f++) {
        var explosion = _0xf5b1xdc[_0xf5b1x6f];
        explosion['age']++;
        if (explosion['lifetime'] > 0 && explosion['age'] > explosion['lifetime']) {
            explosion['particles'] = [];
            _0xf5b1xdc['splice'](_0xf5b1x6f, 1);
        } else {
            updateParticles(explosion['particles'], XABQGYVHN, EXPLOSION_DAMXH0HFHZ59NG, false);
        };
    };
};

function drawExplosions(_0xf5b1xa0, _0xf5b1xdc) {
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xdc['length']; _0xf5b1x6f++) {
        drawParticles(_0xf5b1xa0, _0xf5b1xdc[_0xf5b1x6f]['particles'], _0xf5b1xdc[_0xf5b1x6f]['color']);
    };
};

function gravForce(_0xf5b1xdf, _0xf5b1xe0, _0xf5b1xe1, _0xf5b1xe2) {
    var _0xf5b1xe3 = distance(_0xf5b1xdf['position'], _0xf5b1xe0['position']);
    if (_0xf5b1xe3 < _0xf5b1xdf['radius'] + _0xf5b1xe0['radius']) {
        return new Vector(0, 0);
    } else {
        var _0xf5b1xe4 = (_0xf5b1xe1 * _0xf5b1xdf['mass'] * _0xf5b1xe0['mass']) * Math['exp'](-(_0xf5b1xe2) * _0xf5b1xe3);
        var _0xf5b1xe5 = _0xf5b1xe0['position']['sub'](_0xf5b1xdf['position'])['normalize']();
        return _0xf5b1xe5['scale'](_0xf5b1xe4);
    };
};

function addGravity(_0xf5b1xd6) {
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xd6['length']; _0xf5b1x6f++) {
        for (var _0xf5b1x91 = 0; _0xf5b1x91 < _0xf5b1xd6['length']; _0xf5b1x91++) {
            if (_0xf5b1x6f != _0xf5b1x91) {
                _0xf5b1xd6[_0xf5b1x6f]['addForce'](gravForce(_0xf5b1xd6[_0xf5b1x6f], _0xf5b1xd6[_0xf5b1x91], XL94QDN6Y, XL94QDN6Y_DROPOFF));
            };
        };
    };
};

function drawGreyGoo(_0xf5b1xa0, _0xf5b1xe8, _0xf5b1xd6) {
    _0xf5b1xe8['clearRect'](0, 0, TMP_CANVAS['width'], TMP_CANVAS['height']);
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xd6['length']; _0xf5b1x6f++) {
        var _0xf5b1xd8 = _0xf5b1xd6[_0xf5b1x6f];
        _0xf5b1xe8['beginPath']();
        var _0xf5b1xe9 = TMP_CTX.createRadialGradient(_0xf5b1xd8['position']['x'], _0xf5b1xd8['position']['y'], _0xf5b1xd8['radius'], _0xf5b1xd8['position']['x'], _0xf5b1xd8['position']['y'], 15);
        _0xf5b1xe9['addColorStop'](0, XHAXQ1GJG);
        _0xf5b1xe9['addColorStop'](1, XLEG3KN3F);
        _0xf5b1xe8['fillStyle'] = _0xf5b1xe9;
        _0xf5b1xe8['arc'](_0xf5b1xd8['position']['x'], _0xf5b1xd8['position']['y'], _0xf5b1xd8['radius'] + GRADIENT_RADIUS, 0, XEIX8I4RI);
        _0xf5b1xe8['fill']();
    };
    var _0xf5b1xea = _0xf5b1xe8['getImageData'](0, 0, TMP_CANVAS['width'], TMP_CANVAS['height']);
    var _0xf5b1xeb = _0xf5b1xea['data'];
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xeb['length']; _0xf5b1x6f += 4) {
        var _0xf5b1x91 = _0xf5b1x6f + 3;
        if (_0xf5b1xeb[_0xf5b1x91] < XDSUR7CD4) {
            _0xf5b1xeb[_0xf5b1x91] = 0;
        } else {
            if (XDSUR7CD4 <= _0xf5b1xeb[_0xf5b1x91] && _0xf5b1xeb[_0xf5b1x91] <= X704T9V75) {
                _0xf5b1xeb[_0xf5b1x91] = 255;
            } else {
                if (_0xf5b1xeb[_0xf5b1x91] > X704T9V75) {
                    _0xf5b1xeb[_0xf5b1x91] = 255;
                };
            };
        };
    };
    _0xf5b1xa0['putImageData'](_0xf5b1xea, 0, 0);
};

function Particle(_0xf5b1xed, _0xf5b1xee, _0xf5b1x8a, _0xf5b1xd7) {
    this['radius'] = _0xf5b1xee;
    this['mass'] = _0xf5b1xed;
    this['position'] = _0xf5b1x8a;
    this['velocity'] = _0xf5b1xd7;
    this['acceleration'] = new Vector(0, 0);
    this['forces'] = [];
};
Particle['prototype']['inverseMass'] = function () {
    return (1.0 / this['mass']);
};
Particle['prototype']['applyForces'] = function () {
    var _0xf5b1xef = new Vector(0, 0);
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < this['forces']['length']; _0xf5b1x6f++) {
        _0xf5b1xef = _0xf5b1xef['add'](this['forces'][_0xf5b1x6f]);
    };
    this['acceleration'] = _0xf5b1xef['scale'](this['inverseMass']());
};
Particle['prototype']['addForce'] = function (_0xf5b1xf0) {
    this['forces']['push'](_0xf5b1xf0);
};
Particle['prototype']['clearForces'] = function () {
    this['forces'] = [];
};
Particle['prototype']['addImpulse'] = function (_0xf5b1x9e) {
    this['velocity'] = this['velocity']['add'](_0xf5b1x9e['scale'](this['inverseMass']()));
};

function ParticleContact(_0xf5b1xdf, _0xf5b1xe0) {
    this['particle1'] = _0xf5b1xdf;
    this['particle2'] = _0xf5b1xe0;
    this['contactNormal'] = _0xf5b1xe0['position']['sub'](_0xf5b1xdf['position'])['normalize']();
    this['interpenetrationDepth'] = _0xf5b1xdf['radius'] + _0xf5b1xe0['radius'] - distance(_0xf5b1xdf['position'], _0xf5b1xe0['position']);
};
ParticleContact['prototype']['resolveInterpenetration'] = function () {
    var _0xf5b1xf2 = this['particle1']['inverseMass']() + this['particle2']['inverseMass']();
    this['particle1']['position'] = this['particle1']['position']['add'](this['contactNormal']['scale'](-1.0 * (this['particle1']['mass'] * _0xf5b1xf2) * this['interpenetrationDepth']));
    this['particle2']['position'] = this['particle2']['position']['add'](this['contactNormal']['scale']((this['particle2']['mass'] * _0xf5b1xf2) * this['interpenetrationDepth']));
};
ParticleContact['prototype']['resolveVelocity'] = function () {
    var _0xf5b1xf3 = this['particle2']['velocity']['sub'](this['particle1']['velocity']);
    var _0xf5b1xf4 = _0xf5b1xf3['dot'](this['contactNormal']);
    if (_0xf5b1xf4 > 0) {
        return;
    };
    var _0xf5b1xf5 = -1.0 * XHYB7DMJ2 * _0xf5b1xf4;
    var _0xf5b1xf6 = _0xf5b1xf5 - _0xf5b1xf4;
    var _0xf5b1xf2 = this['particle1']['inverseMass']() + this['particle2']['inverseMass']();
    var _0xf5b1xf7 = _0xf5b1xf6 / _0xf5b1xf2;
    var _0xf5b1x9e = this['contactNormal']['scale'](_0xf5b1xf7);
    this['particle1']['addImpulse'](_0xf5b1x9e['scale'](-1.0));
    this['particle2']['addImpulse'](_0xf5b1x9e);
};

function updateParticles(_0xf5b1xd6, _0xf5b1xf9, _0xf5b1xfa, _0xf5b1xd5) {
    var _0xf5b1x97 = CANVAS['width'] - 1;
    var _0xf5b1x98 = CANVAS['height'] - 1;
    var _0xf5b1xfb = [];
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xd6['length']; _0xf5b1x6f++) {
        var _0xf5b1xd8 = _0xf5b1xd6[_0xf5b1x6f];
        _0xf5b1xd8['applyForces']();
        _0xf5b1xd8['clearForces']();
        _0xf5b1xd8['velocity'] = _0xf5b1xd8['velocity']['scale'](Math['pow'](_0xf5b1xfa, X436KZALF))['add'](_0xf5b1xd8['acceleration']['scale'](X436KZALF));
        _0xf5b1xd8['velocity'] = _0xf5b1xd8['velocity']['normalize']()['scale'](clamp(_0xf5b1xd8['velocity']['norm'](), 0, _0xf5b1xf9));
        _0xf5b1xd8['position'] = _0xf5b1xd8['position']['add'](_0xf5b1xd8['velocity']['scale'](X436KZALF))['add'](_0xf5b1xd8['acceleration']['scale'](XE5LDYJXG));
        if (_0xf5b1xd8['position']['x'] > _0xf5b1x97) {
            _0xf5b1xd8['position']['x'] = 0;
        };
        if (_0xf5b1xd8['position']['x'] < 0) {
            _0xf5b1xd8['position']['x'] = _0xf5b1x97;
        };
        if (_0xf5b1xd8['position']['y'] > _0xf5b1x98) {
            _0xf5b1xd8['position']['y'] = 0;
        };
        if (_0xf5b1xd8['position']['y'] < 0) {
            _0xf5b1xd8['position']['y'] = _0xf5b1x98;
        };
        if (_0xf5b1xd5) {
            for (var _0xf5b1x91 = _0xf5b1x6f + 1; _0xf5b1x91 < _0xf5b1xd6['length']; _0xf5b1x91++) {
                var _0xf5b1xe0 = _0xf5b1xd6[_0xf5b1x91];
                if (distance(_0xf5b1xd8['position'], _0xf5b1xe0['position']) < _0xf5b1xd8['radius'] + _0xf5b1xe0['radius']) {
                    _0xf5b1xfb['push'](new ParticleContact(_0xf5b1xd8, _0xf5b1xe0));
                };
            };
        };
    };
    if (_0xf5b1xd5) {
        for (var _0xf5b1x91 = 0; _0xf5b1x91 < _0xf5b1xfb['length']; _0xf5b1x91++) {
            _0xf5b1xfb[_0xf5b1x91]['resolveInterpenetration']();
            _0xf5b1xfb[_0xf5b1x91]['resolveVelocity']();
        };
    };
};

function drawParticles(_0xf5b1xa0, _0xf5b1xd6, _0xf5b1xda) {
    for (var _0xf5b1x6f = 0; _0xf5b1x6f < _0xf5b1xd6['length']; _0xf5b1x6f++) {
        drawCircle(_0xf5b1xa0, _0xf5b1xd6[_0xf5b1x6f]['position'], _0xf5b1xd6[_0xf5b1x6f]['radius'], _0xf5b1xda);
    };
};

function progressBar(_0xf5b1xfe, _0xf5b1xff) {
    var progressBar = $(_0xf5b1xfe);
    var _0xf5b1x97 = _0xf5b1xff * progressBar['width']() / 100;
    progressBar['find']('div')['animate']({
        width: _0xf5b1x97
    }, 500);
};

function Ship(_0xf5b1x8a, _0xf5b1xf9, _0xf5b1x101, _0xf5b1x102, _0xf5b1x103) {
    this['alive'] = true;
    this['gunFiring'] = false;
    this['gunCooldown'] = 0;
    this['abActivated'] = false;
    this['abCooldown'] = 0;
    this['abFuel'] = XKCYJXV63;
    this['position'] = _0xf5b1x8a;
    this['orientation'] = 0;
    this['velocity'] = new Vector(0, 0);
    this['maxSpeed'] = _0xf5b1xf9;
    this['damping'] = _0xf5b1x101;
    this['acceleration'] = _0xf5b1x102;
    this['turnRate'] = _0xf5b1x103;
    this['turning'] = 0;
    this['accelerating'] = 0;
};

function updateShip(_0xf5b1x105, _0xf5b1x106) {
    if (_0xf5b1x105['alive']) {
        var _0xf5b1x97 = CANVAS['width'] - 1;
        var _0xf5b1x98 = CANVAS['height'] - 1;
        var _0xf5b1x102 = PolarVector(_0xf5b1x105['orientation'], 1)['scale'](_0xf5b1x105['accelerating'] * _0xf5b1x105['acceleration']);
        _0xf5b1x105['velocity'] = _0xf5b1x105['velocity']['scale'](Math['pow'](_0xf5b1x105['damping'], X436KZALF))['add'](_0xf5b1x102['scale'](X436KZALF));
        _0xf5b1x105['velocity'] = _0xf5b1x105['velocity']['normalize']()['scale'](clamp(_0xf5b1x105['velocity']['norm'](), 0, _0xf5b1x105['maxSpeed']));
        _0xf5b1x105['position'] = _0xf5b1x105['position']['add'](_0xf5b1x105['velocity']['scale'](X436KZALF))['add'](_0xf5b1x102['scale'](XE5LDYJXG));
        _0xf5b1x105['orientation'] += _0xf5b1x105['turning'] * _0xf5b1x105['turnRate'] * X436KZALF;
        if (_0xf5b1x105['position']['x'] > _0xf5b1x97) {
            _0xf5b1x105['position']['x'] = 0;
        };
        if (_0xf5b1x105['position']['x'] < 0) {
            _0xf5b1x105['position']['x'] = _0xf5b1x97;
        };
        if (_0xf5b1x105['position']['y'] > _0xf5b1x98) {
            _0xf5b1x105['position']['y'] = 0;
        };
        if (_0xf5b1x105['position']['y'] < 0) {
            _0xf5b1x105['position']['y'] = _0xf5b1x98;
        };
        for (var _0xf5b1x6f = 0; _0xf5b1x6f < XPRY9S7LB['length']; _0xf5b1x6f++) {
            var _0xf5b1x9a = XPRY9S7LB[_0xf5b1x6f];
            var _0xf5b1x107 = _0xf5b1x9a['position']['sub'](_0xf5b1x105['position']);
            _0xf5b1x107 = PolarVector(_0xf5b1x107['angle']() - _0xf5b1x105['orientation'] + XH0HFHZ59 / 2, _0xf5b1x107['norm']());
            if (circleIntersectTriangle(_0xf5b1x107, _0xf5b1x9a['radius'] + (1 / 4) * GRADIENT_RADIUS, _0xf5b1x106[0], _0xf5b1x106[1], _0xf5b1x106[2])) {
                playSound('explosion');
                _0xf5b1x105['alive'] = false;
                X61WVOO4N--;
                XZ5B1QNAM = X3IU3JW2F;
                XXP31DR33['push'](new Explosion(_0xf5b1x105['position'], 5 * XMBGJ8Q24, 1.5 * XXRWI3JNM, XHHEI73EJ, XAKZPKYGY));
                XXP31DR33['push'](new Explosion(_0xf5b1x105['position'], 2 * XMBGJ8Q24, 5 * XXRWI3JNM, XHHEI73EJ, XYBUZ6L00));
                XXP31DR33['push'](new Explosion(_0xf5b1x105['position'], XMBGJ8Q24 / 3, XXRWI3JNM, XHHEI73EJ, X7W1JZP37));
                XXP31DR33['push'](new Explosion(_0xf5b1x105['position'], XMBGJ8Q24 / 3, XXRWI3JNM / 2, XHHEI73EJ, XPN955OZ1));
                return;
            };
        };
        if (_0xf5b1x105['gunCooldown'] > 0) {
            _0xf5b1x105['gunCooldown']--;
        };
        if (_0xf5b1x105['gunFiring'] && _0xf5b1x105['gunCooldown'] == 0) {
            var _0xf5b1x108 = XEX8SD6JL[1];
            _0xf5b1x108 = PolarVector(_0xf5b1x108['angle']() + _0xf5b1x105['orientation'] - XH0HFHZ59 / 2, _0xf5b1x108['norm']() + 2 * XGRL4VVL7_BORDER_WIX436KZALFH);
            _0xf5b1x108 = _0xf5b1x108['add'](_0xf5b1x105['position']);
            X46CRSBQV['push'](new Bullet(_0xf5b1x108, _0xf5b1x105['orientation'], X3DZQJ84P, XNZ4PWTTJ));
            playSound('laser');
            _0xf5b1x105['gunCooldown'] = X7EWVEMYE;
        };
        if (_0xf5b1x105['abCooldown'] > 0) {
            _0xf5b1x105['abCooldown']--;
        };
        if (_0xf5b1x105['abActivated']) {
            if (_0xf5b1x105['abFuel'] > 0) {
                _0xf5b1x105['acceleration'] = XHKYYINFL;
                _0xf5b1x105['maxSpeed'] = AB_X16P940HG;
                _0xf5b1x105['abFuel'] -= XZWFL8O1S;
                _0xf5b1x105['abFuel'] = clamp(_0xf5b1x105['abFuel'], 0, XKCYJXV63);
            } else {
                if (_0xf5b1x105['abFuel'] == 0) {
                    _0xf5b1x105['acceleration'] = X9YZQX4YD;
                    _0xf5b1x105['maxSpeed'] = X16P940HG;
                };
            };
        } else {
            _0xf5b1x105['acceleration'] = X9YZQX4YD;
            _0xf5b1x105['maxSpeed'] = X16P940HG;
            if (_0xf5b1x105['abCooldown'] == 0 && _0xf5b1x105['abFuel'] < XKCYJXV63) {
                _0xf5b1x105['abFuel'] += XPCGXF9H0;
                _0xf5b1x105['abFuel'] = clamp(_0xf5b1x105['abFuel'], 0, XKCYJXV63);
            };
        };
    };
};

function drawShip(_0xf5b1xa0, _0xf5b1x105, _0xf5b1x10a, _0xf5b1x10b, _0xf5b1x10c, _0xf5b1x10d) {
    if (_0xf5b1x105['alive']) {
        _0xf5b1xa0['save']();
        _0xf5b1xa0['translate'](_0xf5b1x105['position']['x'], _0xf5b1x105['position']['y']);
        _0xf5b1xa0['rotate'](_0xf5b1x105['orientation'] - XH0HFHZ59 / 2);
        drawPolyLine(_0xf5b1xa0, _0xf5b1x10a, _0xf5b1x10b, _0xf5b1x10c, _0xf5b1x10d, true);
        _0xf5b1xa0['restore']();
    };
};

function drawEngineFlames(_0xf5b1xa0, _0xf5b1x105, _0xf5b1x10a, _0xf5b1x10b, _0xf5b1x10c, _0xf5b1x10d) {
    if (_0xf5b1x105['alive']) {
        _0xf5b1xa0['save']();
        _0xf5b1xa0['translate'](_0xf5b1x105['position']['x'], _0xf5b1x105['position']['y']);
        _0xf5b1xa0['rotate'](_0xf5b1x105['orientation'] - XH0HFHZ59 / 2);
        drawPolyLine(_0xf5b1xa0, _0xf5b1x10a, _0xf5b1x10b, _0xf5b1x10c, _0xf5b1x10d);
        _0xf5b1xa0['restore']();
    };
};

function generateShipModel(_0xf5b1x110, _0xf5b1x98) {
    var _0xf5b1x111 = Math['sqrt'](_0xf5b1x98 * _0xf5b1x98 + (1 / 4) * _0xf5b1x110 * _0xf5b1x110);
    var _0xf5b1x112 = Math['atan']((2 * _0xf5b1x98) / _0xf5b1x110);
    var _0xf5b1x113 = new Vector(0, 0);
    var _0xf5b1x114 = PolarVector(_0xf5b1x112, _0xf5b1x111);
    var _0xf5b1x115 = PolarVector(0, _0xf5b1x110);
    var _0xf5b1x116 = _0xf5b1x113['add'](_0xf5b1x114['add'](_0xf5b1x115))['scale'](1 / 3);
    _0xf5b1x113 = _0xf5b1x113['sub'](_0xf5b1x116);
    _0xf5b1x114 = _0xf5b1x114['sub'](_0xf5b1x116);
    _0xf5b1x115 = _0xf5b1x115['sub'](_0xf5b1x116);
    return [_0xf5b1x113, _0xf5b1x114, _0xf5b1x115];
};

function generateEngineFlames(_0xf5b1x118, _0xf5b1x106, _0xf5b1x119, _0xf5b1x11a) {
    var _0xf5b1x11b = _0xf5b1x106[0];
    var _0xf5b1x62 = [_0xf5b1x11b];
    for (var _0xf5b1x11c = _0xf5b1x119; _0xf5b1x11c < _0xf5b1x118; _0xf5b1x11c += _0xf5b1x119) {
        _0xf5b1x62['push'](new Vector(_0xf5b1x11b['x'] + _0xf5b1x11c, _0xf5b1x11b['y'] - random(0, _0xf5b1x11a) - 2));
    };
    _0xf5b1x62['push'](_0xf5b1x106[_0xf5b1x106['length'] - 1]);
    return _0xf5b1x62;
};

function sameSide(_0xf5b1x11e, _0xf5b1x11f, _0xf5b1x113, _0xf5b1x114) {
    var _0xf5b1x120 = _0xf5b1x11e['sub'](_0xf5b1x113)['cross'](_0xf5b1x114['sub'](_0xf5b1x113));
    var _0xf5b1x121 = _0xf5b1x11f['sub'](_0xf5b1x113)['cross'](_0xf5b1x114['sub'](_0xf5b1x113));
    return (_0xf5b1x120 * _0xf5b1x121 >= 0);
};

function inTriangle(_0xf5b1x123, _0xf5b1x113, _0xf5b1x114, _0xf5b1x115) {
    return (sameSide(_0xf5b1x123, _0xf5b1x115, _0xf5b1x113, _0xf5b1x114) && sameSide(_0xf5b1x123, _0xf5b1x113, _0xf5b1x114, _0xf5b1x115) && sameSide(_0xf5b1x123, _0xf5b1x114, _0xf5b1x115, _0xf5b1x113));
};

function orthoProjection(_0xf5b1x123, _0xf5b1x113, _0xf5b1x114) {
    var _0xf5b1x125 = _0xf5b1x123['sub'](_0xf5b1x113)['dot'](_0xf5b1x114['sub'](_0xf5b1x113)) / _0xf5b1x114['sub'](_0xf5b1x113)['dot'](_0xf5b1x114['sub'](_0xf5b1x113));
    var _0xf5b1x126 = _0xf5b1x113['add'](_0xf5b1x114['sub'](_0xf5b1x113)['scale'](_0xf5b1x125));
    return {
        t: _0xf5b1x125,
        op: _0xf5b1x126
    };
};

function circleIntersectTriangle(_0xf5b1x116, _0xf5b1xee, _0xf5b1x113, _0xf5b1x114, _0xf5b1x115) {
    if (inTriangle(_0xf5b1x116, _0xf5b1x113, _0xf5b1x114, _0xf5b1x115)) {
        return true;
    };
    if (distance(_0xf5b1x116, _0xf5b1x113) < _0xf5b1xee || distance(_0xf5b1x116, _0xf5b1x114) < _0xf5b1xee || distance(_0xf5b1x116, _0xf5b1x115) < _0xf5b1xee) {
        return true;
    };
    var _0xf5b1x128 = orthoProjection(_0xf5b1x116, _0xf5b1x113, _0xf5b1x114);
    if (0 < _0xf5b1x128['t'] && _0xf5b1x128['t'] < 1 && distance(_0xf5b1x116, _0xf5b1x128['op']) < _0xf5b1xee) {
        return true;
    };
    _0xf5b1x128 = orthoProjection(_0xf5b1x116, _0xf5b1x114, _0xf5b1x115);
    if (0 < _0xf5b1x128['t'] && _0xf5b1x128['t'] < 1 && distance(_0xf5b1x116, _0xf5b1x128['op']) < _0xf5b1xee) {
        return true;
    };
    _0xf5b1x128 = orthoProjection(_0xf5b1x116, _0xf5b1x115, _0xf5b1x113);
    if (0 < _0xf5b1x128['t'] && _0xf5b1x128['t'] < 1 && distance(_0xf5b1x116, _0xf5b1x128['op']) < _0xf5b1xee) {
        return true;
    };
    return false;
};
var SOUNDS_MP3 = [{
    id: 'laser',
    src: 'sounds/mp3/laser.mp3'
}, {
    id: 'pop',
    src: 'sounds/mp3/pop.mp3'
}, {
    id: 'explosion',
    src: 'sounds/mp3/explosion.mp3'
}, {
    id: 'music1',
    src: 'sounds/mp3/music1.mp3'
}, {
    id: 'music2',
    src: 'sounds/mp3/music2.mp3'
}, {
    id: 'music3',
    src: 'sounds/mp3/music3.mp3'
}];
var SOUNDS_OGG = [{
    id: 'laser',
    src: 'sounds/ogg/laser.ogg'
}, {
    id: 'pop',
    src: 'sounds/ogg/pop.ogg'
}, {
    id: 'explosion',
    src: 'sounds/ogg/explosion.ogg'
}, {
    id: 'music1',
    src: 'sounds/ogg/music1.ogg'
}, {
    id: 'music2',
    src: 'sounds/ogg/music2.ogg'
}, {
    id: 'music3',
    src: 'sounds/ogg/music3.ogg'
}];

function loadSounds(_0xf5b1x12c) {
    var _0xf5b1x12d = new createjs.LoadQueue();
    _0xf5b1x12d['installPlugin'](createjs.Sound);
    _0xf5b1x12d['addEventListener']('complete', _0xf5b1x12c);
    _0xf5b1x12d['addEventListener']('progress', function (_0xf5b1x6a) {
        progressBar('#progressBar', _0xf5b1x6a['progress'] * 100);
    });
    var _0xf5b1x12e = createjs['Sound']['getCapabilities']();
    if (_0xf5b1x12e['mp3']) {
        _0xf5b1x12d['loadManifest'](SOUNDS_MP3);
    } else {
        if (_0xf5b1x12e['ogg']) {
            _0xf5b1x12d['loadManifest'](SOUNDS_OGG);
        } else {
            XKW407XVU = false;
        };
    };
};

function initSound(_0xf5b1x72) {
    if (XKW407XVU) {
        if (!createjs['Sound']['isReady']()) {
            createjs['Sound']['registerPlugins']([createjs['WebAudioPlugin'], createjs['HTMLAudioPlugin']]);
            setTimeout(function () {
                initSound(_0xf5b1x72);
            }, 1000);
            return;
        } else {
            loadSounds(function () {
                XXWTNCYQ4 = true;
            });
        };
    };
    if (_0xf5b1x72) {
        _0xf5b1x72['call'](this);
    };
};

function playSound(_0xf5b1x131, _0xf5b1x132, _0xf5b1x133, _0xf5b1x72) {
    if (XKW407XVU) {
        _0xf5b1x132 = (_0xf5b1x132 == undefined) ? 1 : _0xf5b1x132;
        var _0xf5b1x134 = null;
        if (_0xf5b1x133) {
            _0xf5b1x134 = createjs['Sound']['play'](_0xf5b1x131, createjs['Sound'].INTERRUPT_NONE, 0, 0, -1, _0xf5b1x132, 0);
        } else {
            _0xf5b1x134 = createjs['Sound']['play'](_0xf5b1x131, createjs['Sound'].INTERRUPT_NONE, 0, 0, 0, _0xf5b1x132, 0);
        }; if (_0xf5b1x72) {
            _0xf5b1x134['addEventListener']('complete', _0xf5b1x72);
        };
    };
};

function stopSounds() {
    if (XKW407XVU) {
        createjs['Sound']['stop']();
    };
};

function muteSounds() {
    XWVU8VL5B = true;
    createjs['Sound']['setMute'](true);
};

function unmuteSounds() {
    XWVU8VL5B = false;
    createjs['Sound']['setMute'](false);
};

function playMusic() {
    if (XKW407XVU) {
        var _0xf5b1x139 = randomInteger(1, 3);
        playSound('music' + _0xf5b1x139, X4FVCQ5JH, false, playMusic);
    };
};

function openTwitterWindow(_0xf5b1x13b, _0xf5b1x7c, _0xf5b1x13c) {
    var _0xf5b1x13d = 'https://twitter.com/intent/tweet?hashtags=' + encodeURIComponent(_0xf5b1x13c + ',') + '&url=' + encodeURIComponent(_0xf5b1x7c) + '&text=' + encodeURIComponent(_0xf5b1x13b) + '&tw_p=tweetbutton';
    window['open'](_0xf5b1x13d);
};

function tweetScore() {
    if (!X8YG01Z6Q || X8YG01Z6Q['length'] == 0) {
        showTwitterPrompt();
    } else {
        sendTweet(X8YG01Z6Q, XCJZIEF4K);
    };
};

function sendTweet(_0xf5b1x86, _0xf5b1xb1) {
    var _0xf5b1x13b = _0xf5b1x86 + ' got a score of ' + _0xf5b1xb1 + ' playing Goosteroids! Play now at';
    openTwitterWindow(_0xf5b1x13b, 'http://goosteroids.com', 'Goosteroids');
};

function clamp(_0xf5b1xe4, _0xf5b1x141, _0xf5b1x142) {
    if (_0xf5b1xe4 < _0xf5b1x141) {
        return _0xf5b1x141;
    } else {
        if (_0xf5b1xe4 > _0xf5b1x142) {
            return _0xf5b1x142;
        } else {
            return _0xf5b1xe4;
        };
    };
};

function random(_0xf5b1x141, _0xf5b1x142) {
    return _0xf5b1x141 + Math['random']() * (_0xf5b1x142 - _0xf5b1x141);
};

function drawCircle(_0xf5b1xa0, _0xf5b1x8a, _0xf5b1xee, _0xf5b1xda) {
    _0xf5b1xa0['beginPath']();
    _0xf5b1xa0['fillStyle'] = _0xf5b1xda;
    _0xf5b1xa0['arc'](_0xf5b1x8a['x'], _0xf5b1x8a['y'], _0xf5b1xee, 0, XEIX8I4RI);
    _0xf5b1xa0['closePath']();
    _0xf5b1xa0['fill']();
};

function drawPolyLine(_0xf5b1xa0, _0xf5b1x146, _0xf5b1x10b, _0xf5b1x10c, _0xf5b1x10d, _0xf5b1x147) {
    _0xf5b1xa0['beginPath']();
    _0xf5b1xa0['moveTo'](_0xf5b1x146[0]['x'], _0xf5b1x146[0]['y']);
    for (var _0xf5b1x6f = 1; _0xf5b1x6f < _0xf5b1x146['length']; _0xf5b1x6f++) {
        _0xf5b1xa0['lineTo'](_0xf5b1x146[_0xf5b1x6f]['x'], _0xf5b1x146[_0xf5b1x6f]['y']);
    };
    if (_0xf5b1x10b) {
        _0xf5b1xa0['fillStyle'] = _0xf5b1x10b;
        _0xf5b1xa0['fill']();
    };
    if (_0xf5b1x10c) {
        _0xf5b1xa0['lineWidth'] = _0xf5b1x10d;
        _0xf5b1xa0['strokeStyle'] = _0xf5b1x10c;
        if (_0xf5b1x147) {
            _0xf5b1xa0['closePath']();
            _0xf5b1xa0['stroke']();
        } else {
            _0xf5b1xa0['stroke']();
        };
    };
};

function chomp(str, search, replace) {
	return str.replace(new RegExp(search + "$"), replace);
}

function strHash(hash) {
	return JSON.stringify(hash, null, " ");
}

function toUTC(date) {
	return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());	
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;	
}

/*
 * Vector class
 */
 
function Vector(x, y) {
	this.x = x;
	this.y = y;	
}

Vector.prototype.add = function (v) {
	return new Vector(this.x + v.x, this.y + v.y);	
}

Vector.prototype.sub = function (v) {
	return new Vector(this.x - v.x, this.y - v.y);	
}

Vector.prototype.scale = function (c) {
	return new Vector(c * this.x, c * this.y);
}

Vector.prototype.dot = function (v) {
	return this.x * v.x + this.y * v.y;	
}

Vector.prototype.cross = function (v) {
	return this.x * v.y - this.y * v.x;	
}

Vector.prototype.angle = function () {
	return Math.atan(this.y, this.x);	
}

Vector.prototype.norm = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);	
}

Vector.prototype.normalize = function () {
	var c = this.norm();

	if (c == 0) {
		return this;
	} else {
		return this.scale(1 / c);		
	}
}

Vector.prototype.toString = function () {
	return "Vector(" + this.x + ", " + this.y + ")";	
}

/*
 * Create vector in polar form
 */
function PolarVector(angle, length) {
	return new Vector(length * Math.cos(angle), length * Math.sin(angle));
}

/*
 * Distance between two points
 */
function distance(v1, v2) {
	return v1.sub(v2).norm();
}