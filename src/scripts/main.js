'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} 
      on the element: ${element.nodeName}, 
      id: ${element.id}.`);
    });
  });
}

const body = document.querySelector('body');

const printMessage = (message) => {
  body.insertAdjacentHTML('beforeend',
    `<div class="message">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
