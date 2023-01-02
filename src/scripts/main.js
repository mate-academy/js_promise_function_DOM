'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: 
        ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
