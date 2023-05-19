'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, (evnt) => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  return document.body.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
