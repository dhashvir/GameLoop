(function() {
    'use strict';
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        currTime,
        timeToCall,
        id,
        x, 
        gameLoopFunc;
    
    for (x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelRequestAnimationFrame = window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            currTime = new Date().getTime();            
            timeToCall = Math.max(0, 16 - (currTime - lastTime));            
            id = window.setTimeout(
                function() { 
                    callback(currTime + timeToCall); 
                },
                timeToCall);            
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };		
        
    gameLoopFunc = function(){
        window.requestAnimationFrame(gameLoopFunc);
        console.log('gameloop');
    };
    
    gameLoopFunc();
}());
