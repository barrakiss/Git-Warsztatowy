// NOTE: ZADANIE 1

var nav = document.querySelector(".nav-list > .nav-list2");
var button = document.querySelector(".nav-list")

function add() {
  nav.classList.add("show");
}
function remove() {
  nav.classList.remove("show");
}
button.addEventListener("mouseover", add);
nav.addEventListener("mouseout", remove);

// NOTE: ZADANIE 2

var whiteLabel = document.querySelector(".chair-clair");
var whiteLabel2 = document.querySelector(".margarita");
var buttonLabel = document.querySelector(".note");
var buttonLabel2 = document.querySelector(".note2");

function addHide() {
  buttonLabel.classList.add("hide");
  buttonLabel.classList.remove("show");
}
function removeLabel() {
  buttonLabel.classList.remove("hide");
  buttonLabel.classList.add("show");
}
whiteLabel.addEventListener("mouseover", addHide);
whiteLabel.addEventListener("mouseout", removeLabel);

function addHide2() {
  buttonLabel2.classList.add("hide");
  buttonLabel2.classList.remove("show");
}
function removeLabel2() {
  buttonLabel2.classList.remove("hide");
  buttonLabel2.classList.add("show");
}
whiteLabel2.addEventListener("mouseover", addHide2);
whiteLabel2.addEventListener("mouseout", removeLabel2);

// NOTE: SLAJDER

var three_img = document.querySelectorAll(".slajd");
var leftClicker = document.querySelector(".left-click p:first-child");
var rightClicker = document.querySelector(".right-click p:first-child");
var imgNumber = 0;
  three_img[0].classList.add("show");

leftClicker.addEventListener("click", function() {
  var actualNumber = imgNumber;
  imgNumber--;
  if (imgNumber < 0) {
    imgNumber = three_img.length - 1;
  }
  three_img[imgNumber].classList.add("show");
  three_img[actualNumber].classList.remove("show");
})

rightClicker.addEventListener("click", function() {
  var actualNumber = imgNumber;
  imgNumber++;
  if (imgNumber > three_img.length - 1) {
    imgNumber = 0;
  }
  three_img[imgNumber].classList.add("show");
  three_img[actualNumber].classList.remove("show");
})
