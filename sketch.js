let canvas;

const canvasWrapper = document.getElementById("canvas-wrapper");
const openStrings = ["openString1", "openString2", "openString3", "openString4", "openString5", "openString6"];
const notesArray = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const darkFrets = [3, 5, 7, 9, 12];
let tuning = ["E", "B", "G", "D", "A", "E"];
let newNote = [];
let presetTuning;

let hasClicked = false;
let reset = false;
let allFretsDisplayed = false;
let flatNotesVisible = false;
let allNotesVisible = true;

// RGB colors for all notes
let colorR;
let colorG;
let colorB;

function changeTuning(newTuning) {
  presetTuning = newTuning.id.split("-").reverse();
  for (i = 0; i < tuning.length; i++) {
    tuning[i] = presetTuning[i];
  }
  reset = true;
  loop();
  scrollUp();
}

function scrollUp() {
  canvasWrapper.scrollIntoView({ behavior: "smooth" });
}
function toggleAllfrets() {
  allFretsDisplayed = !allFretsDisplayed;
  loop();
}

function toggleFlatNotes() {
  allNotesVisible = !allNotesVisible;
  loop();
}

function toggleFlatNames() {
  flatNotesVisible = !flatNotesVisible;
  loop();
}

function setup() {
  canvas = createCanvas(1200, 600);
  canvas.parent(canvasWrapper);

  document.oncontextmenu = function() {
    return false;
  };
}
function draw() {
  clear();
  startGame();
}

function startGame() {
  border();
  fretboard();
  createOpenString();
  createNote();
}

function border() {
  stroke(26, 35, 59);
  strokeWeight(25);
  line(0, 0, 1200, 0); // top
  line(1200, 0, 1200, 600); // right
  line(0, 600, 1200, 600); // bottom
  line(0, 1200, 0, 0); // left
}

function fretboard() {
  drawFrets();
  drawStrings();
}

function drawFrets() {
  var fretPosX = 150;
  var fretNumPosX = 190;
  var fretOffsetPos = 83.3;

  for (j = 1; j < 13; j++) {
    strokeWeight(5);
    line(fretPosX, 75, fretPosX, 500);

    // Darker frets
    if (darkFrets.includes(j)) {
      fill(199, 206, 226);
      stroke(0);
      strokeWeight(5);
      rectMode(CORNER);
      rect(fretPosX, 75, fretOffsetPos, 425);
    }
    // Numbers below frets
    if (darkFrets.includes(j) || allFretsDisplayed) {
      textAlign(CENTER);
      strokeWeight(0);
      fill(0);
      textSize(22);
      textStyle(BOLD);
      text(j, fretNumPosX, 555);
    }
    fretPosX += fretOffsetPos;
    fretNumPosX += fretOffsetPos;
  }
}

function drawStrings() {
  var stringPosY = 75;
  var stringOffsetPos = 85;

  for (i = 0; i < 6; i++) {
    strokeWeight(5);
    line(150, stringPosY, 1150, stringPosY);
    stringPosY += stringOffsetPos;
  }
}

function createOpenString() {
  var openStringPosY = 55;
  var gapAmount = 83;

  for (i = 0; i < 6; i++) {
    if (!hasClicked || reset) {
      openStrings[i] = new openString(tuning[i], openStringPosY);
    } else if (hasClicked) {
      openStrings[i] = new openString(openStrings[i].note, openStringPosY);
    }
    openStrings[i].drawOpenString();
    openStringPosY += gapAmount;
  }
  reset = false;
  noLoop();
}

function touchStarted() {
  mouseCoordinates();
}
function mousePressed() {
  mouseCoordinates();
}

function mouseCoordinates() {
  for (i = 0; i < 6; i++) {
    if (mouseButton === LEFT) {
      openStrings[i].changeNoteOnClick(mouseX, mouseY, "left");
    } else if (mouseButton === RIGHT) {
      openStrings[i].changeNoteOnClick(mouseX, mouseY, "right");
    }
    // Touchscreens
    else {
      // TODO: Create button for mobile/tablet users to switch between 'left' and 'right'
      openStrings[i].changeNoteOnClick(mouseX, mouseY, "left");
    }
  }
}

// Circle notes on fretboard
function createNote() {
  var noteX;
  var noteY = 75;
  var noteOffset = 85;
  var noteIndex = 0;

  for (i = 0; i < 6; i++) {
    noteX = 190; // Reset x position for each string
    for (j = 0; j < 12; j++) {
      newNote.push(noteIndex);
      newNote[noteIndex] = new note(
        noteX,
        noteY,
        (openStrings[i].getCurrentNote() + j) % 12
      );

      if (allNotesVisible) {
        newNote[noteIndex].drawNote();
      } else {
        // only draw natural notes
        if (!newNote[noteIndex].isFlat()) {
          newNote[noteIndex].drawNote();
        }
      }
      noteX += 83.3;
      noteIndex++;
    }
    noteY += noteOffset;
  }
}
// RGB values for each note
function colors(index) {
  switch (index) {
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
      colorR = 220;
      colorG = 220;
      colorB = 220;
  }
}
