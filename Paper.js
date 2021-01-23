//Paper blu-print and display
class Paper{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius, {'restitution':0.3, 'friction':0.5, 'density':1.2});
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}