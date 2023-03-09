'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, (e) => {
      resolve(`It was click on the element:
        ${element.tagName.toUpperCase()}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
// write your code here
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
