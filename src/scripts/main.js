'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      const text = `It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`;

      resolve(text);
    });
  });
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message">
    ${message}
  </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
