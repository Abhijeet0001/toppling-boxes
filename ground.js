class Ground{
    constructor(){
        var option ={
            isStatic:true
        }
this.ground = Bodies.rectangle(200,350,400,20,option)
World.add(world,this.ground)
    }
    display(){
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,400,20)
    }
}