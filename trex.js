class trex{
constructor(x,y,width,height){
    var options={
        restitution:1,

    }
    this.x=x
    this.y=y
    this.body(this.x,this.y,width,height,options)
}
display(){
    var pos =this.body.position;
    rectMode("CENTER");
}

}