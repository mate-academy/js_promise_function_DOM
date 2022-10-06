'use strict';

function waitFor(element, eventName) {
  const message = `
    It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.
  `;

  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const el = `<div class="message">${message}</div>`;

  body.insertAdjacentHTML('beforeend', el);
};

module.exports = {
  waitFor,
  printMessage,
};
