'use strict';
// Function to validate email format using a regular expression

function isEmailValid(input) {
  const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPatern.test(input);
}

// Function to check if the email is invalid

function isemailInvalid(input) {
  return !isEmailValid(input);
}

// Get reference to the input field  and button
let input = document.getElementById('email');
let button = document.querySelector('.button_send_eamil');

// Add listenner even to the button

button = addEventListener('click', function () {
  const email = input.value; // Get the value of the input field
  if (email === '') {
    alert('The input field is empty');
  } else if (isemailInvalid(email)) {
    alert('The input filed is not formatted correctly');
  } else {
    this.alert('Your email address is submitted');
  }
});
