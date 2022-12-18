'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      const target = e.target;
      const elementInfo = `It was ${eventName} on the `
      + `element: ${target.nodeName}, `
      + `id: ${target.id}`;

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
