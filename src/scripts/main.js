'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise(resolve => {
    element.addEventListener(`${eventName}`, (e) => {
      const message = `It was ${eventName} on the element:
        ${e.target.nodeName}, id: ${e.target.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const form = document.querySelector('form');

  form.insertAdjacentHTML('beforeend', `
    <div class="message" style="margin-top: 5px">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
