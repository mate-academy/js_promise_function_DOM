'use strict';

function waitFor(element, eventName) {
  return new Promise(function(resolve, reject) {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('afterbegin', `
  <div class="message">
  <p>${message}</p>
  </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
