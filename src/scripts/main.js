'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      const elementInfo = `It was ${eventName} on the `
      + `element: ${element.nodeName}, `
      + `id: ${element.id}`;

      resolve(elementInfo);
    });
  });
}

const printMessage = (message) => {
// write your code here
  document.body.insertAdjacentHTML('afterbegin',
    `<div class="message">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
