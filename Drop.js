class Drop{
    constructor(x,y){
        var options = {
            restitution:1
        }

        this.x = x
        this.y = y
        this.r = 10
        this.rain = Bodies.circle(this.x,this.y,this.r,options);

        World.add(world,this.rain);
    }

    fall(speed){
        this.y+=speed;
    }

    display(){
        var pos = this.rain.position;

        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400) , y:random(0,400)});
        }
        
        push();
        ellipseMode(RADIUS)
        fill(0,0,150);
        ellipse(pos.x,pos.y,10,10);
        pop();
    }
}