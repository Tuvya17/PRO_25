class Paper{
    constructor(x, y, r) {
        var options = {
             isStatic:false,
            'restitution':0,
            'friction':0,
            'density':1.2
        }
        this.Paper = loadImage("paper.png")
        this.body = Bodies.circle(x, y, r/2, options);
        this.x = x
        this.y = y
        this.r = r
        World.add(world, this.body);
      }
      display(){
        //Image("paper.png");
        console.log("paper");
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image( this.Paper,0, 0, this.r,this.r);
        pop();
      }
}