'use strict';

const root = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName}`
        + `on the element: ${element.nodeName},`
        + `id: ${element.id}`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  root.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
