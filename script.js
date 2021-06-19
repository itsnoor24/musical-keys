"use strict";

let drum = document.querySelector("#drum");
let drum2 = document.querySelector("#drum2");
let drum3 = document.querySelector("#drum3");
let drum4 = document.querySelector("#drum4");
let flute = document.querySelector("#flute");
let chime = document.querySelector("#chime");
let whistle = document.querySelector("#whistle");
let bell = document.querySelector("#bell");
let swipe = document.querySelector("#swipe");
let scratch = document.querySelector("#scratch");
let guitar_electric = document.querySelector("#guitar-electric");
let guitar_happy = document.querySelector("#guitar-happy");
let guitar_negative = document.querySelector("#guitar-negative");
let horn = document.querySelector("#horn");
let tap = document.querySelector("#tap");
let violin = document.querySelector("#violin");
let space = document.querySelector("#space");
let toaster = document.querySelector("#toaster");
let bubbles = document.querySelector("#bubbles");
let chalk = document.querySelector("#chalk");
let trumpet = document.querySelector("#trumpet");
let soap = document.querySelector("#soap");
let saber = document.querySelector("#saber");
let pen = document.querySelector("#pen");
let zap = document.querySelector("#zap");
let buzz = document.querySelector("#buzz");

//changes bg color of the key, providing feedback to the user that it was clicked
function keyFeedback(elementID, isFirstClick) {
  if (isFirstClick == true) {
    elementID.style.transition = "border 0.05s linear 0s";
    elementID.style.borderColor = "rgba(103, 106, 161, 0.8)";
    elementID.style.borderWidth = "thick";
  } else {
    elementID.style.transition = "border 0.05s linear 0s";
    elementID.style.borderColor = "rgba(255, 255, 255, 0.18)";
  }
}

// toggles between truth/false values for keyFeedback function
let clicked = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

window.addEventListener("keydown", keyPressed, false);

function keyPressed(key) {
  if (key.keyCode == "81") {
    clicked[0] = !clicked[0];
    let element = document.getElementById("Q");
    keyFeedback(element, clicked[0]);
    drum.play();
  } else if (key.keyCode == "87") {
    clicked[1] = !clicked[1];
    let element = document.getElementById("W");
    keyFeedback(element, clicked[1]);
    flute.play();
  } else if (key.keyCode == "69") {
    clicked[2] = !clicked[2];
    let element = document.getElementById("E");
    keyFeedback(element, clicked[2]);
    chime.play();
  } else if (key.keyCode == "82") {
    clicked[3] = !clicked[3];
    let element = document.getElementById("R");
    keyFeedback(element, clicked[3]);
    whistle.play();
  } else if (key.keyCode == "84") {
    clicked[4] = !clicked[4];
    let element = document.getElementById("T");
    keyFeedback(element, clicked[4]);
    bell.play();
  } else if (key.keyCode == "89") {
    clicked[5] = !clicked[5];
    let element = document.getElementById("Y");
    keyFeedback(element, clicked[5]);
    swipe.play();
  } else if (key.keyCode == "85") {
    clicked[6] = !clicked[6];
    let element = document.getElementById("U");
    keyFeedback(element, clicked[6]);
    scratch.play();
  } else if (key.keyCode == "73") {
    clicked[7] = !clicked[7];
    let element = document.getElementById("I");
    keyFeedback(element, clicked[7]);
    guitar_electric.play();
  } else if (key.keyCode == "79") {
    clicked[8] = !clicked[8];
    let element = document.getElementById("O");
    keyFeedback(element, clicked[8]);
    guitar_happy.play();
  } else if (key.keyCode == "80") {
    clicked[9] = !clicked[9];
    let element = document.getElementById("P");
    keyFeedback(element, clicked[9]);
    guitar_negative.play();
  } else if (key.keyCode == "65") {
    clicked[10] = !clicked[10];
    let element = document.getElementById("A");
    keyFeedback(element, clicked[10]);
    drum2.play();
  } else if (key.keyCode == "83") {
    clicked[11] = !clicked[11];
    let element = document.getElementById("S");
    keyFeedback(element, clicked[11]);
    drum3.play();
  } else if (key.keyCode == "68") {
    clicked[12] = !clicked[12];
    let element = document.getElementById("D");
    keyFeedback(element, clicked[12]);
    drum4.play();
  } else if (key.keyCode == "70") {
    clicked[13] = !clicked[13];
    let element = document.getElementById("F");
    keyFeedback(element, clicked[13]);
    horn.play();
  } else if (key.keyCode == "71") {
    clicked[14] = !clicked[14];
    let element = document.getElementById("G");
    keyFeedback(element, clicked[14]);
    tap.play();
  } else if (key.keyCode == "72") {
    clicked[15] = !clicked[15];
    let element = document.getElementById("H");
    keyFeedback(element, clicked[15]);
    violin.play();
  } else if (key.keyCode == "74") {
    clicked[16] = !clicked[16];
    let element = document.getElementById("J");
    keyFeedback(element, clicked[16]);
    space.play();
  } else if (key.keyCode == "75") {
    clicked[17] = !clicked[17];
    let element = document.getElementById("K");
    keyFeedback(element, clicked[17]);
    toaster.play();
  } else if (key.keyCode == "76") {
    clicked[18] = !clicked[18];
    let element = document.getElementById("L");
    keyFeedback(element, clicked[18]);
    bubbles.play();
  } else if (key.keyCode == "90") {
    clicked[19] = !clicked[19];
    let element = document.getElementById("Z");
    keyFeedback(element, clicked[19]);
    chalk.play();
  } else if (key.keyCode == "88") {
    clicked[20] = !clicked[20];
    let element = document.getElementById("X");
    keyFeedback(element, clicked[20]);
    trumpet.play();
  } else if (key.keyCode == "67") {
    clicked[21] = !clicked[21];
    let element = document.getElementById("C");
    keyFeedback(element, clicked[21]);
    soap.play();
  } else if (key.keyCode == "86") {
    clicked[22] = !clicked[22];
    let element = document.getElementById("V");
    keyFeedback(element, clicked[22]);
    saber.play();
  } else if (key.keyCode == "66") {
    clicked[23] = !clicked[23];
    let element = document.getElementById("B");
    keyFeedback(element, clicked[23]);
    pen.play();
  } else if (key.keyCode == "78") {
    clicked[24] = !clicked[24];
    let element = document.getElementById("N");
    keyFeedback(element, clicked[24]);
    zap.play();
  } else if (key.keyCode == "77") {
    clicked[25] = !clicked[25];
    let element = document.getElementById("M");
    keyFeedback(element, clicked[25]);
    buzz.play();
  }
}
