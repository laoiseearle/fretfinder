class note{
    constructor(x, y, previousNote){
        this.x = x;
        this.y = y;
        this.size = 50;
        this.previousNote = previousNote;
    }
    drawNote(){
        var arrayIndex = this.getArrayIndex();

        // Note
        colors(arrayIndex);
        fill(colorR, colorG, colorB);
        strokeWeight(7);
        circle(this.x, this.y, this.size);

        // Text inside note
        fill(255);
        stroke(0);
        strokeWeight(6);
        textSize(20);
        textAlign(CENTER);
        text(this.getNoteName(arrayIndex), this.x, this.y + 7);
    }
    getArrayIndex() {
        if(this.previousNote >= notesArray.length - 1){
            return 0;
        } else{
            return this.previousNote + 1;
        }
    }
    getNoteName(arrayIndex){
        var noteName = notesArray[arrayIndex];
            if (!flatNotesVisible && noteName.length === 2) {
              noteName = "";
            }
        return noteName;
    }
    isFlat(){
        return notesArray[this.getArrayIndex()].length === 2;
    }
}
