class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    //loaded the smoke image
    this.image1= loadImage("sprites/smoke.png");
    //created an empty array called trajectory
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //calling display from the Base class
    super.display();

    //to store positions in array only when bird's vel>10 and x>200
    if (this.body.velocity.x>10 && this.body.position.x>200){

      var position=[this.body.position.x,this.body.position.y]
      //pushing updated positions in the trajectory array
      this.trajectory.push(position);
      
    }

    //for loop to display smoke till there are elements in trajectory
    for(var i=0; i<this.trajectory.length;i++){
      image(this.image1,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
