'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(
        `It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');

  const notification = `<div class="message">${message}</div>`;

  body.insertAdjacentHTML('beforeend', notification);
};

module.exports = {
  waitFor,
  printMessage,
};
