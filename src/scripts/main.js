'use strict';

function waitFor(element, eventName) {
  // eslint-disable-next-line max-len
  const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const domNode = `<div class="message">${message}</div>`;
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', domNode);
};

module.exports = {
  waitFor,
  printMessage,
};
