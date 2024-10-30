'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener('click', (e) => {
      // our event is click
      if (e.target === element) {
        // when our elemnt is
        resolve(
          // element wich called event we resolve promise
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        ); // we resolve string with data
      }
    });

    element.addEventListener('contextmenu', (e) => {
      // we exchange our event
      if (e.target === element) {
        // we doing the same
        resolve(
          // check out if element is that what we need
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });

    element.addEventListener('blur', (e) => {
      // also use it with blur
      if (e.target === element) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });
  });
}

const printMessage = (message) => {
  const newDiv = document.createElement('div'); // create new div

  // create content with message
  const newContent = document.createTextNode(message);

  newDiv.className = 'message'; // give a class
  newDiv.appendChild(newContent); // append content in a div

  // insert div in html
  document.body.insertAdjacentElement('beforebegin', newDiv);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
