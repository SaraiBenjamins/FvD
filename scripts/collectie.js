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

// Selecteer de header
const header = document.querySelector('header');

// Selecteer de afbeeldingen
const firstImage = document.getElementById('firstImage');
const secondImage = document.getElementById('secondImage');

// Luister naar het scrollen van de pagina
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {  // Wanneer je 100px naar beneden scrolt
    header.classList.add('scrolled');  // Voeg de 'scrolled' klasse toe
    // Zorg ervoor dat de eerste afbeelding verdwijnt
    firstImage.style.display = 'none';
    // Zorg ervoor dat de tweede afbeelding zichtbaar wordt
    secondImage.style.display = 'block';
  } else {
    header.classList.remove('scrolled');  // Verwijder de 'scrolled' klasse
    // Zorg ervoor dat de eerste afbeelding zichtbaar wordt
    firstImage.style.display = 'block';
    // Zorg ervoor dat de tweede afbeelding verdwijnt
    secondImage.style.display = 'none';
  }
});
