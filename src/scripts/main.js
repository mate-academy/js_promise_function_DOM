'use strict';

function waitFor(element, eventName) {
  const message = `
    It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.
  `;
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      resolve(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
