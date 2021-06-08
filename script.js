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

window.addEventListener("keydown", keyPressed, false);

function keyPressed(key) {
  if (key.keyCode == "81") {
    drum.play();
  } else if (key.keyCode == "87") {
    flute.play();
  } else if (key.keyCode == "69") {
    chime.play();
  } else if (key.keyCode == "82") {
    whistle.play();
  } else if (key.keyCode == "84") {
    bell.play();
  } else if (key.keyCode == "89") {
    swipe.play();
  } else if (key.keyCode == "85") {
    scratch.play();
  } else if (key.keyCode == "73") {
    guitar_electric.play();
  } else if (key.keyCode == "79") {
    guitar_happy.play();
  } else if (key.keyCode == "80") {
    guitar_negative.play();
  } else if (key.keyCode == "65") {
    drum2.play();
  } else if (key.keyCode == "83") {
    drum3.play();
  } else if (key.keyCode == "68") {
    drum4.play();
  } else if (key.keyCode == "70") {
    horn.play();
  } else if (key.keyCode == "71") {
    tap.play();
  } else if (key.keyCode == "72") {
    violin.play();
  } else if (key.keyCode == "74") {
    space.play();
  } else if (key.keyCode == "75") {
    toaster.play();
  } else if (key.keyCode == "76") {
    bubbles.play();
  } else if (key.keyCode == "90") {
    chalk.play();
  } else if (key.keyCode == "88") {
    trumpet.play();
  } else if (key.keyCode == "67") {
    soap.play();
  } else if (key.keyCode == "86") {
    saber.play();
  } else if (key.keyCode == "66") {
    pen.play();
  } else if (key.keyCode == "78") {
    zap.play();
  } else if (key.keyCode == "77") {
    buzz.play();
  }
}
