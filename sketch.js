let canvas;

// Square starting notes
let startingNotes = ["startNote1", "startNote2", "startNote3", "startNote4", "startNote5", "startNote6"];

// Guitar notes
let notesArray = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
let arrayIndex;
let noteName;

// Default guitar tuning (Top string to bottom)
let startingTuning = ["E", "B", "G", "D", "A", "E"];
let tuning = startingTuning;

// For-loop indices
let i;
let j;

// Offsets position of notes and strings
let offsetPos = 50;

// RGB colors for notes
let colorR;
let colorG;
let colorB;

let newString = true;
let hasClicked = false;

function setup() {
  canvas = createCanvas(670, 370);

  // Prevents opening context menu with right click
  document.oncontextmenu = function() {
    return false;
  }
}

function draw() {
  fretboard();
  startNotes();
  drawNote();
}

function fretboard() {
  var fretNumPos = 345;
  var linePosX = 60;
  var linePosY = 50;

  // Strings (Horizontal lines)
  for (i = 0; i < 6; i++) {
    // Frets (Vertical lines)
    for (j = 1; j < 14; j++) {
      strokeWeight(3);
      line(linePosX, 50, linePosX, 300);

      if (j === 3 || j === 5 || j === 7 || j === 9 || j === 12) {
        // Grey frets
        fill(200);
        rectMode(CORNER);
        rect(linePosX, 50, 50, 250);

        // Numbers below frets
        strokeWeight(0);
        fill(0);
        textSize(18);
        textAlign(CENTER);
        text(j, linePosX + 25, fretNumPos);
      }
      linePosX += offsetPos;
    }
    line(60, linePosY, 660, linePosY);
    linePosY += offsetPos;
  }
}
// When mouse is clicked, mouse position is passed to check if it is inside area of sqaure
function mousePressed() {
  for (i = 0; i < 6; i++) {
    if (mouseButton === LEFT) {
      startingNotes[i].clicked(mouseX, mouseY, "left");
    } else if (mouseButton === RIGHT) {
      startingNotes[i].clicked(mouseX, mouseY, "right");
    }
  }
}

function startNotes() {
  var squarePosY = 100;

  for (i = 0; i < 6; i++) {
    // If sqaure note hasn't been clicked
    if (!hasClicked) {
      // Starting note is default tuning note
      startingNotes[i] = new firstNote(tuning[i], squarePosY);
    } else {
      // Updated note
      startingNotes[i] = new firstNote(startingNotes[i].note, squarePosY);
    }
    // Draws sqaure starting note
    startingNotes[i].createStartingNote();
    squarePosY += offsetPos;
  }
  squarePosY = 80;
  noLoop();
}

// Square starting notes
class firstNote {
  constructor(note, y) {
    this.note = note;
    this.size = 18;
    this.x = 30;
    this.y = y - 50;
    this.yText = y - 42;
  }
  createStartingNote() {
    // Gets index of current note from array
    arrayIndex = notesArray.indexOf(this.note);

    // Create Square
    noteColor();
    fill(colorR, colorG, colorB);
    strokeWeight(4);
    rectMode(RADIUS);
    rect(this.x, this.y, this.size, this.size);

    // Text inside note
    fill(255);
    stroke(0);
    textSize(20);
    textAlign(CENTER);
    text(this.note, this.x, this.yText);
  }

  clicked(posX, posY, mouseClick) {
    // if mouse is inside Square
    if (posX > this.x - this.size &&
      posX < this.x + this.size &&
      posY > this.y - this.size &&
      posY < this.y + this.size) {

      arrayIndex = notesArray.indexOf(this.note);

      if (mouseClick === "right") {
        // if last note in array, set to first
        if (arrayIndex === notesArray.length - 1) {
          arrayIndex = 0;
        } else {
          arrayIndex++;
        }
      } else if (mouseClick === "left") {
        // if first note in array, set to last
        if (arrayIndex === 0) {
          arrayIndex = 11;
        } else {
          arrayIndex--;
        }
      }
      // Updates to new note
      this.note = notesArray[arrayIndex];
      hasClicked = true;
      loop();
    }
  }
}

// Draws circle note
function drawNote() {
  var circleX;
  var circleY = 50;
  var circleSize = 32;

  for (i = 0; i < 6; i++) {
    circleX = 85;
    for (j = 0; j < 12; j++) {

      // Note
      createNote();
      noteColor();
      fill(colorR, colorG, colorB);
      strokeWeight(4);
      circle(circleX, circleY, circleSize);

      // Text inside note
      fill(255);
      stroke(0);
      strokeWeight(4);
      textSize(14);
      textAlign(CENTER);
      text(noteName, circleX, circleY + 5);

      circleX += offsetPos;
    }
    circleY += offsetPos;
    newString = true; // Move to next string
  }
}

// returns string value of note
function createNote() {
  if (newString) {
    arrayIndex = notesArray.indexOf(startingNotes[i].note);

    if (arrayIndex === notesArray.length - 1) {
      arrayIndex = 0;
    } else {
      arrayIndex++;
    }
    newString = false;
  } else {
    if (arrayIndex === notesArray.length - 1) {
      arrayIndex = 0;
    } else if (arrayIndex > notesArray.length - 1) {
      arrayIndex = 1;
    } else {
      arrayIndex++;
    }
  }
  noteName = notesArray[arrayIndex];

  // if note contains a flat, remove text
  if (noteName.length === 2) {
    noteName = "";
  }
  return noteName;
}

// Returns RGB values for each note
function noteColor() {
  switch (arrayIndex) {

    // C Note
    case 0:
      colorR = 230;
      colorG = 41;
      colorB = 54;
      break;

      // D Note
    case 2:
      colorR = 28;
      colorG = 209;
      colorB = 19;
      break;

      // E Note
    case 4:
      colorR = 219;
      colorG = 26;
      colorB = 216;
      break;

      // F Note
    case 5:
      colorR = 224;
      colorG = 221;
      colorB = 9;
      break;

      // G Note
    case 7:
      colorR = 34;
      colorG = 9;
      colorB = 224;
      break;

      // A Note
    case 9:
      colorR = 224;
      colorG = 135;
      colorB = 9;
      break;

      // B Note
    case 11:
      colorR = 9;
      colorG = 203;
      colorB = 224;
      break;

      // Accidental Notes
    default:
      colorR = 255;
      colorG = 255;
      colorB = 255;
  }
}
