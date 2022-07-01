'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  document.querySelector('#submit')
    .insertAdjacentHTML('afterend', `
      <div class="message">${message}</div>
    `);
};

module.exports = {
  waitFor,
  printMessage,
};
