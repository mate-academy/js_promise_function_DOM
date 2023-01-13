'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (eventClick) => {
      if (eventClick.target === element) {
        resolve(`It was ${eventName}`
          + ` on the element: ${element.nodeName}, id: ${element.id}.`);
      }
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
