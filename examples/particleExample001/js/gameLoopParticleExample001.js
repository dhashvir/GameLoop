(function(global){
    function Particle(life, x, y, vx, vy){
        this.x = x || 0;
        this.y = y || 0;
        this.vx = vx || 0;
        this.vy = vy || 0;
        this.life = life || 1000;
        var update = function(elapsed){
            this.x += this.vx;
            this.y += this.vy;
            this.life -= elapsed;
            if (this.life < 0){
                this.life = 0;
            }
        };
    }
    
    function ParticleEmitter(){
        var pariclePool = [];
        var maxParticles = 10;
        var xVariance = 10;
        var yVariance = 10;
        var emmitedParticles = 0;
        var i;
        var vx = Math.random();
        var vy = Math.random();
        
        for (i = 0; i < maxParticles; ++i){            
            pariclePool[i] = new Particle();
        }
               
    
}(window));