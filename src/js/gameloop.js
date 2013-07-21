(function (global) {
    'use strict';
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        currTime,
        timeToCall,
        id,
        i,
        reqAnimFunc,
        cancelReqAnimFunc,
        dateFunc,
        gameLoopFunc,
        gameLoopEvent,
        gameLoopEventName = global.GameLoopEventName || 'GameLoopUpdate';
    
    reqAnimFunc = global.requestAnimationFrame;
    cancelReqAnimFunc = global.cancelAnimationFrame;
    i = 0;
    while (i < vendors.length && !reqAnimFunc) {
        reqAnimFunc = global[vendors[i] + 'RequestAnimationFrame'];
        cancelReqAnimFunc = global[vendors[i] + 'CancelRequestAnimationFrame'];
        i += 1;
    }
    dateFunc = global.Date.now;
    if (!dateFunc) {
        dateFunc = function () {
            return (new global.Date().getTime());
        };
    }
    if (!reqAnimFunc) {
        reqAnimFunc = function (callback, element) {
            currTime = dateFunc();
            timeToCall = Math.max(0, 16 - (currTime - lastTime));
            id = global.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!cancelReqAnimFunc) {
        cancelReqAnimFunc = function (id) {
            global.clearTimeout(id);
        };
    }
    
    gameLoopEvent = document.createEvent('Event');
    gameLoopEvent.initEvent(gameLoopEventName, false, false);
	gameLoopEvent.detail = {
        time: dateFunc(),
        timeElapsed: 0
    };
    gameLoopFunc = function () {	
        reqAnimFunc(gameLoopFunc);
        var prevTime =  gameLoopEvent.detail.time;
        gameLoopEvent.detail.time = dateFunc();
        gameLoopEvent.detail.timeElapsed =  gameLoopEvent.detail.time - prevTime;
        global.document.dispatchEvent(gameLoopEvent);
	//	console.log(gameLoopEvent.detail.time );
    };
    
    gameLoopFunc(); // Kickstart gameloop
    
}(window));
