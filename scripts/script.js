// JavaScript Document
console.log("hi");

var eersteStreepjesButton = document.querySelector("section.streepjes li:nth-of-type(1) button");
eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;

function eersteStreepjesButtonKlik() {
  // Haal de waarde van aria-expanded op met getAttribute
  var ariaExpanded = eersteStreepjesButton.getAttribute("aria-expanded");

  if (ariaExpanded === "false") {
    // Zet aria-expanded naar true met setAttribute
    eersteStreepjesButton.setAttribute("aria-expanded", "true");
  } else {
    // Zet aria-expanded naar false met setAttribute
    eersteStreepjesButton.setAttribute("aria-expanded", "false");
  }
}
