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