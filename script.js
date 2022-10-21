"use strict";

const modal = document.querySelector(".modal"); //we're storing this in a constant called modal
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnCloseModal = document.querySelector(".close-modal");
const signUpCloseModal = document.querySelector(".signUp");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal); //querySelectorAll returns a node list of all the elements in the show-modal class (in the html)

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.classList.add("noScroll");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(
    "click",
    openModal
    //we want to display modal now (when a button is clicked)
    //NO DOT here. Just hidden. This removes the hidden from the modal class
  );
}

function closeModal() {
  modal.classList.add("hidden"); //hiding the modal when you click on the X
  overlay.classList.add("hidden");
  document.body.classList.remove("noScroll");
}

btnCloseModal.addEventListener("click", closeModal);
signUpCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeModal();
});

//Slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 28seconds
}
