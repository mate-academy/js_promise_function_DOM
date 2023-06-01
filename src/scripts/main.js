'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`
      It was ${eventName}`
      + ` on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  document.querySelector('form').insertAdjacentHTML('afterbegin', `
    <div class="message">
      ${message}
    </dev>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
