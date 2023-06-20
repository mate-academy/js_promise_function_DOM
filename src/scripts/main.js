'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line max-len
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      // eslint-disable-next-line max-len
      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const div = `<div class="message">${message}</div>`;

  document.body.insertAdjacentHTML('afterbegin', div);
};

module.exports = {
  waitFor,
  printMessage,
};
