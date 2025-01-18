// JavaScript Document
console.log("hi");

// Vind de hamburgerknop en het menu
var eersteStreepjesButton = document.querySelector("#menu-toggle");
var navMenu = document.getElementById("nav-menu");

// Functie om het menu te openen
eersteStreepjesButton.onclick = function () {
  var ariaExpanded = eersteStreepjesButton.getAttribute("aria-expanded");

  if (ariaExpanded === "false") {
    eersteStreepjesButton.setAttribute("aria-expanded", "true");
    navMenu.classList.add("show");
  } else {
    eersteStreepjesButton.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("show");
  }
};


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > 0) {
    // Als je niet bovenaan bent, voeg de klasse toe
    header.classList.add("scrolled");
  } else {
    // Als je helemaal bovenaan bent, verwijder de klasse
    header.classList.remove("scrolled");
  }
});











