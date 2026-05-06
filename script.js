// Create a BOOLEAN variable to track current mode
let darkMode = false; 
/*  NEW FUNCTION: document,querySelector()
 lets us select an HTML ELEMENt from the page to store 
 a REFERENCE (pointer) to that element 
 */

 const body = document.querySelector("body");


 //HEADING is a JS VARIABLE  that points to the elemnet with the id =" main-heading " (like in CSS)

 const heading = document.querySelector("#main-heading");

 const description = document.querySelector("#description");

 const toggleBtn = document.querySelector("#toggle");


 // we can change attributes & properties using JS
 heading.textContent ="Light and Dark Webiste";// JS wrote HTML code!
 heading.style.color ="cyan";
 heading.style.background ="pink";





