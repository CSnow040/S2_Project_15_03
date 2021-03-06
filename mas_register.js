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
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;

      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;

      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;

      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;

      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;

      var selectedIndex = document.getElementById("sessionBox").selectedIndex;

      if (selectedIndex !== -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;

            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox.value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }

      if (document.getElementById("mediaCB").checked) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }

      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

      writeSessionValues();
}

//writes the data values from session storage in to the registration summary form
function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.confName;
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
      document.getElementById("regPack").textContent = sessionStorage.confPack;
      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}