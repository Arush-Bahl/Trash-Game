class Paper{
    constructor(x,y){
        
        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1
            //isStatic : true
        }

        this.body = Bodies.rectangle(x,y,50,50,options);

            this.width = 50;
            this.hieght = 50;

            World.add(world,this.body);

            this.image = loadImage("paper.png");

    }

    display () {

     //   this.body.position.x = mouseX

       // this.body.position.y = mouseY

        push();

        translate(this.body.position.x,this.body.position.y);

        angleMode(RADIANS)

        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();

    }

}
