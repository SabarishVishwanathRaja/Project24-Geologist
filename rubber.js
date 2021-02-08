class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke("black");
      //rectMode(CENTER);
      fill("blue");
      //rect(0, 0, this.width, this.height);
      ellipseMode(RADIUS);
      ellipse(0,0,this.width,this.height);
      pop();
    }
  };