class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.05,
            'friction':0.05,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;      
        World.add(world, this.body);
        this.visiblity=255;
      }
      display(){
        
        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;
            console.log(this.body.speed);
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            stroke("black");
            strokeWeight(4)
            rect( 0, 0, this.width, this.height);
            pop();
        }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
            pop();

        }
        
        
      }
  }