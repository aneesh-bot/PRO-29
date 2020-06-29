class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,30,50, options);
    this.width = 30;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   /* var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);*/
    rectMode(CENTER);
    strokeWeight(3);
    stroke("yellow");
    fill("lightyellow");
    rect(pos.x, pos.y, this.width, this.height);
    //pop();
  }
}