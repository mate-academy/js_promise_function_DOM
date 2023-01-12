'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    const message = `It was ${eventName} on the element: `
      + `${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, () => {
      resolve(message);
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
