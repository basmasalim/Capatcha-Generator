// !================> HTML ELEMENT
var captchaText = document.getElementById("captchaText");
var trybtn = document.getElementById("try");
var input = document.getElementById("input");
var check = document.getElementById("check");

// &================> APP VARIABLES
var correctAnswer = ''
// *================> FUNCTIONS

function generatCAPTCHA() {
  var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  var result = "";

  for (let i = 0; i < 6; i++) {
    result += chars[Math.trunc(Math.random() * chars.length)];
  }
correctAnswer = result
  console.log(result);
  captchaText.innerHTML = result
}

// console.log(Math.trunc(Math.random() *10));

generatCAPTCHA();

function checkAnswer(){
  if (input.value === correctAnswer ) {
    alert('congratolations')
  }else{
    alert("try again!")
  }
}
//^================> EVENTS
trybtn.onclick = generatCAPTCHA
check.onclick = checkAnswer
