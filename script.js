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
