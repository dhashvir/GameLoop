requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts'
});

requirejs(['Particle','../../src/js/gameloop.js'], function   (Particle, Camera) {
    console.log('start');
    var p1 = new Particle(0, 5, 3000);
    p1.velocity.x = 0.1;
    p1.velocity.y = 0.0;
    var stage = document.querySelector('#stage');
    var stageContext = stage.getContext('2d');
    stage.width = 800;
    stage.height = 400;
    stageContext.fillStyle = '#ffffff';
   
    document.addEventListener('GameLoopUpdate', function(event){
        stageContext.clearRect(p1.position.x-1, p1.position.y-1, 12, 12);
        if ( !p1.update(event.detail.timeElapsed) ){
            p1.life = 3000;
            p1.velocity.x *= -1;
        }
        stageContext.fillRect(p1.position.x, p1.position.y, 10, 10);
    });
    console.log('end');
});