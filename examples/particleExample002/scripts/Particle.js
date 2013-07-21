define(['MathUtils/Vector2'], function(Vector2){
    function Particle(x, y, life){
        this.velocity = new Vector2(0.01, 0);
        this.position = new Vector2(x, y);
        this.life = life || 1000;
        
        
        this.update = function(dt){
            if (this.life > 0){
                this.life -= dt;
                if (this.life <= 0){
                    this.life = 0;
                }
                this.position.x += this.velocity.x * dt;
                this.position.y += this.velocity.y * dt;
                return true;
            }else{
                return false;
            }
            
        }
    }
    
    function linearEase(endValue, percent){
        return endValue*percent;
    }
    
    return Particle;
});