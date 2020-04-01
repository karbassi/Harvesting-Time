class Apple {
    image;
    x;
    y;
    // speed = {
    //     x: 1,
    //     y: 1,
    // };
        speedX = 1;
        speedY = 1;

    constructor(theX, theY, speedX, speedY) {
    console.log("We've loaded apple!");
      console.log(theX, theY);

    this.x = theX;
    this.y = theY;

    if (speedX !== undefined) {
        this.speedX = speedX;
    }

    if (speedY !== undefined) {
        this.speedY = speedY;
    }

    this.loadImages();
  }

  loadImages() {
    this.image = new Image();
//     this.image.onload = function () {
//     this.draw();
//     };
      this.image.onload = () => {
          this.draw();
      };
      this.image.src = './assets/img/apple.png';
}

  draw() {
      ctx.beginPath();
      ctx.drawImage(this.image, this.x, this.y, 70, 70);
  }

  move() {

    this.x += this.speedX;
    this.y += this.speedY;
  }

  tick() {
      this.move();
      this.draw();
  }

}





