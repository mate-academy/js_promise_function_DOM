'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, e => {
      resolve(`It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
