class Hammer {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("white");
        rectMode(CENTER);
        fill("#f7a102");
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
