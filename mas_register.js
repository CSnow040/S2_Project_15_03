"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Caleb Snow
   Date:    2/23/19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", function () {
      calcCart();
      //runs the sessionTest function when the button is clicked
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox", "InBox", "groupBox", "mailBox", "phoneBox", "banquetBox").onblur = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onchange = calcCart;
});

//provide a validation test for the conference session selection list
function sessionTest() {
      //var sessionBox = document.getElementById("");
      if (sessionBox === -1) {
            sessionBox.setCustomValidity("Select a Session Package");
      } else {
            sessionBox.setCustomValidity("");
      }
}

//calculate the registration cost and to save information about the customer's choices in session storage
function calcCart() {
      var confName
}