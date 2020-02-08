class openString {
  constructor(note, y) {
    this.note = note;
    this.size = 50;
    this.x = 50;
    this.y = y;
    this.yText = y + 32;
    this.xText = 75;
    this.arrayIndex = notesArray.indexOf(this.note);
  }
  getCurrentNote(){
      return this.arrayIndex;
  }
  drawOpenString() {
    // Open String note
    colors(this.arrayIndex);
    fill(colorR, colorG, colorB);
    strokeWeight(7);
    rectMode(CORNER);
    rect(this.x, this.y, this.size, this.size);

    // Text inside note
    fill(255);
    stroke(0);
    textSize(23);
    textAlign(CENTER);
    text(this.note, this.xText, this.yText);
  }
  changeNoteOnClick(posX, posY, mouseClick) {
    var distance = this.calcDistance(posX, posX, posY, posY);

    if(distance === 0){
      if (mouseClick === "right") {
        if (this.arrayIndex === notesArray.length - 1) {
          this.arrayIndex = 0;
        } else {
          this.arrayIndex++;
        }
      } else if (mouseClick === "left") {
        if (this.arrayIndex === 0) {
          this.arrayIndex = 11;
        } else {
          this.arrayIndex--;
        }
      }
      this.note = notesArray[this.arrayIndex];
      hasClicked = true;
      loop();
    }
  }
   calcDistance(posX, tempX, posY, tempY){
      var tempX = posX;
      var tempY = posY;

      // checks if mousePos is inside square
      if(posX < this.x){
          tempX = this.x;
      } else if(posX > this.x + this.size){
          tempX = this.x + this.size;
      }
      if(posY < this.y){
         tempY = this.y;
      } else if(posY > this.y + this.size){
          tempY = this.y + this.size;
      }

      var distX = posX - tempX;
      var distY = posY - tempY;
      return sqrt(distX * distX + distY * distY);
  }

}
