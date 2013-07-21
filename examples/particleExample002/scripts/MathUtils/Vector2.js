define(function(){
    function Vector2(xx, yy){
        this.x = xx || 0;
        this.y = yy || 0;
        
        this.display = function(){
            console.log('<', this.x, this.y,'>');
        }
    }
    
    return Vector2;
});