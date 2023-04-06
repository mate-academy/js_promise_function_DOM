'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element`
        + `: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const messageHTML = `<div class="message">`
  + `${message}</div>`;

  document.body.insertAdjacentHTML('beforeend', messageHTML);
};

module.exports = {
  waitFor,
  printMessage,
};
