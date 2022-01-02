'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.
      `);
    });
  });
}

const printMessage = (message) => {
  const root = document.querySelector('body');
  const div = `<div class="message">${message}</div>`;

  root.insertAdjacentHTML('beforeend', div);
};

module.exports = {
  waitFor,
  printMessage,
};
