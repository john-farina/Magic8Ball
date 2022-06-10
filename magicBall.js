const phrases = [
    'As I see it, yes',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    "Don't count on it",
    'It is certain',
    'It is decidedly so',
    'Most likely',
    'My reply is no',
    'My sources say no',
    'Outlook good',
    'Outlook not so good',
    'Reply hazy try again',
    'Signs point to yes',
    'Very doubtful',
    'Without a doubt',
    'Yes',
    'Yes, definitely',
    'You may rely on it',
    "That's Ridiculous",
    'Ask Me If I Care',
    'Obviously',
    'In Your Dreams',
    "Sky's The Limit",
    'What Do You Think?',
];
let animationGoing = false;

const magicBall = document.querySelector('#ball-container');
const ballLogo = document.querySelector('#ball_logo');
const ballInnerCircle = document.querySelector('#ball_inner-circle');
const triangle = document.querySelector('#inner-circle_triangle');
const fortuneText = document.querySelector('#fortuneText');
const resetButton = document.querySelector('#resetButton');

function randomNumGen(num) {
    let newNum = Math.floor(Math.random() * num);
    return newNum;
}

function addAnimateClass(object, classname, seconds) {
    animationGoing = true;
    let actualSec = seconds * 1000;
    object.classList.add(classname);
    setTimeout(function () {
        animationGoing = false;
        object.classList.remove(classname);
    }, actualSec);
}

function sayRandomThing() {
    let randomNum = randomNumGen(26);

    addAnimateClass(magicBall, 'shake', 2);
    addAnimateClass(triangle, 'fadeOut', 1);
    setTimeout(function () {
        fortuneText.innerHTML = phrases[randomNum].toUpperCase();
        addAnimateClass(triangle, 'fadeIn', 2);
    }, 900);
}

function introAnimation() {
    ballLogo.style.display = 'flex';
    ballInnerCircle.style.display = 'none';
    addAnimateClass(magicBall, 'ballFadeOut', 3);
    setTimeout(function () {
        ballLogo.style.display = 'none';
        ballInnerCircle.style.display = 'flex';
        addAnimateClass(magicBall, 'ballFadeIn', 3);
    }, 2900);
}

resetButton.addEventListener('click', function () {
    if (animationGoing != true) {
        sayRandomThing();
    }
});
introAnimation();

// const myShakeEvent = new Shake({
//     threshold: 15, // optional shake strength threshold
//     timeout: 1000, // optional, determines the frequency of event generation
// });

// myShakeEvent.start();

// window.addEventListener('shake', shakeEventDidOccur, false);
// //function to call when shake occurs
// function shakeEventDidOccur() {
//     //put your own code here etc.
//     alert('shake!');
// }
