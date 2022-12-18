'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  // write your code here
  const myPromise = new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(`It was ${eventName} on the element: 
              ${element.nodeName}, id: ${element.id}.`);
      }
    });
  });

  return myPromise;
}

const printMessage = (message) => {
  // write your code here
  body.insertAdjacentHTML('beforeend', `<div class="message">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
