'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      const { nodeName, id } = element;

      resolve(`It was ${eventName}
      on the element: ${nodeName},
      id: ${id}.`);
    });
  });
}

const printMessage = (message) => {
  // write your code here
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${message}</div>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
