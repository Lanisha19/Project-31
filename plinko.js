class Plinko {
  constructor(x, y) {
    var options = {
        restitution:1,
        friction:0,
        isStatic : true
    }
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("white");
    rect(0, 0, this.ellipse, this.ellipse);
    pop();
  }
}




