class ComputerBase{
    constructor(x,y,length,height){
        this.length=length
        this.height=height
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,this.length, this.height, options)
        World.add(world, this.body)
        this.image=loadImage("./assets/base1.png")
    }
    display(){
        var pos=this.body.position
        push()
            translate(pos.x,pos.y)
            rectMode(CENTER)
            imageMode(CENTER)
            image(this.image,0,0,this.length,this.height)
        pop()
    }
}