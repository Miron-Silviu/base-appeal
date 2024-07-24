'use strict';
// Create variables and store classes
let input = document.querySelector('.email_input');
let button = document.querySelector('.button_send_eamil');

// Add listenner even and implemet the logic.

button = addEventListener('click', function () {
  if (input !== 0) {
    alert('The address formated is not formatted correctly');
  } else if (input === 0) {
    alert('The input field is empty');
  } else {
    alert('Your email is submitted');
  }
});
