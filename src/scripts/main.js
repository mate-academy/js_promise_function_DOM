'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.
      `);
    });
  });
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
    <span class="message">
      ${message}
    </span>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
