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

 // Define what happens when button is clicked
 function toggleMode(){
    console.log("we triggered the function");
    //1. Flip the boolean variable to track the mode
    darkMode = !darkMode
    console.log(darkMode);
    //2. Conditionally apply styles depending on mode
    if (darkMode == true) {
console.log("were going to apply dark styles");
      body.style.background = "black";
      heading.style.color = "blue";
      description.style.color = "white";
      description.textContent = "WELCOME TO THE DARK SIDE";
      toggleBtn.textContent ="Switch to light";


    }
    else{
console.log(" apply light styles");
    body.style.background =" gray";
     heading.style.color = "white";
      toggleBtn.textContent ="Switch to dark";

   
    }
    

 }

 //Attach function to the actual button
 toggleBtn.addEventListener("click", toggleMode);

 // REVIEW: making a button interactive
 // 1, Select HTML elemnts for JS to target
 const image = document.querySelector("#image");
 const hackerBtn = document.querySelector("#hacker");
 // 2. attach your button to your function that triggers when clicked
 hackerBtn.addEventListener("click", setHacker);
// Define the function 
function setHacker(){
  body.style.background = "black";
  body.style.fontFamily = "monospace";
  description.style.color = "rgb(88, 255, 46)"
  description.textContent = "you have been hacked;(";
  image.src = "download (2).jpeg";

}
const shrekBtn = document.querySelector("#shrek");
shrekBtn.addEventListener("click", setShrek);

function setShrek(){
  body.style.background = "green";
  body.style.fontFamily = "monospace";
  description.style.color = "rgb(20, 86, 4)"
  description.textContent = "you have been hacked by shrek...;(";
  image.src = "download (3).jpeg";

}





