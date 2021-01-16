class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.Dustbin= loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,200,200,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.Dustbin, pos.x, pos.y, 200, 200);
    }
  }