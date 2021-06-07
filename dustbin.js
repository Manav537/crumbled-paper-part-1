class Dustbin {

    constructor (x,y){

     this.DustbinWidth = 200;
     this.DustbinHeight = 200;
     this.WallThickness = 20;
     this.x = x;
     this.y = y;
     this.angle = 0;
     
     this.bottomBody = Bodies.rectangle(this.x,this.y,this.DustbinWidth,this.WallThickness,{isStatic : true})
     World.add (world,this.bottomBody)
     this.leftBody = Bodies.rectangle(this.x-this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.WallThickness,this.DustbinWidth,{isStatic : true})
     World.add (world,this.leftBody)
     this.rightBody = Bodies.rectangle(this.x+this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.WallThickness,this.DustbinWidth,{isStatic : true})
     World.add (world,this.rightBody)
    }
    display(){
    var posBottom = this.bottomBody.position
    var posleft = this.leftBody.position
    var posright = this.rightBody.position

    push();
    translate(posBottom.x,posBottom.y)
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    rect(0,0,this.DustbinWidth,this.WallThickness)
    pop();

    push();
    translate(posleft.x,posleft.y)
    rectMode(CENTER);
    angleMode(RADIANS);
    rotate(this.angle);
    fill(255);
    rect(0,0,this.WallThickness,this.DustbinWidth)
    pop();

    push();
    translate(posright.x,posright.y)
    rectMode(CENTER);
    angleMode(RADIANS);
    rotate(this.angle);
    fill(255);
    rect(0,0,this.WallThickness,this.DustbinWidth)
    pop();
    }
    
}

