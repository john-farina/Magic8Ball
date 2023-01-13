import betterQuery from "./myFunctions";
import phrases from "./phrases";
const magicBall = betterQuery("#ball-container");
const ballLogo = betterQuery("#ball_logo");
const ballInnerCircle = betterQuery("#ball_inner-circle");
const triangle = betterQuery("#inner-circle_triangle");
const fortuneText = betterQuery("#fortuneText");
const resetButton = betterQuery("#resetButton");
let animationGoing = false;
let shakeIsGoing = false;
let firstTimeOpen = true;
let startAnimationGoing = false;

function randomNumGen(num) {
  let newNum = Math.floor(Math.random() * num);

  return newNum;
}

function sayRandomThing() {
  let randomNum = randomNumGen(26);

  shakeIsGoing = true;

  addAnimateClass(magicBall, "shake", 2);

  addAnimateClass(triangle, "fadeOut", 1);

  setTimeout(() => {
    fortuneText.innerHTML = phrases[randomNum].toUpperCase();

    addAnimateClass(triangle, "fadeIn", 2);

    setTimeout(() => {
      shakeIsGoing = false;
    }, 1800);
  }, 900);
}

function addAnimateClass(object, classname, seconds) {
  let actualSec = seconds * 1000;

  animationGoing = true;

  object.classList.add(classname);

  setTimeout(() => {
    animationGoing = false;

    object.classList.remove(classname);
  }, actualSec);
}

function introAnimation() {
  startAnimationGoing = true;

  ballLogo.style.display = "flex";

  ballInnerCircle.style.display = "none";

  addAnimateClass(ballLogo, "logoShrink", 3);

  addAnimateClass(magicBall, "ballFadeOut", 3);

  setTimeout(() => {
    ballLogo.style.display = "none";

    ballInnerCircle.style.display = "flex";

    addAnimateClass(ballInnerCircle, "innerGrow", 3);

    addAnimateClass(magicBall, "ballFadeIn", 3);

    addAnimateClass(triangle, "triangleGrow", 3);

    addAnimateClass(fortuneText, "fortuneGrow", 3);

    setTimeout(() => {
      startAnimationGoing = false;
    }, 3000);
  }, 2900);
}

function startAnimation() {
  if (firstTimeOpen === true) {
    console.log("hello");
    resetButton.classList.add("resetAnimation");
  } else if (firstTimeOpen === false) {
    setTimeout(() => {
      resetButton.classList.remove("resetAnimation");
    }, 6000);
  }
}

function updateFunctions() {
  startAnimation();
}
function animationLoop() {
  updateFunctions();
}
function start() {
  setInterval(animationLoop, 300);
}

start();

resetButton.addEventListener("click", () => {
  if (!animationGoing || !startAnimationGoing) {
    if (firstTimeOpen === true && startAnimationGoing === false) {
      introAnimation();

      firstTimeOpen = false;
    } else if (
      startAnimationGoing === false &&
      firstTimeOpen === false &&
      animationGoing != true &&
      shakeIsGoing != true
    ) {
      sayRandomThing();
    }
  }
});
