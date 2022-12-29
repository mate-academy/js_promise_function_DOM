'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const waitPromise = new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(`It was ${eventName} on the element:
          ${element.nodeName}, id: ${element.id}.
        `);
      }
    });
  });

  return waitPromise;
}

const printMessage = (message) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
