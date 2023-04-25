'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`
      It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}
      `);
    });
  });
}

const printMessage = (message) => {
  const pageBody = document.querySelector('body');

  pageBody.insertAdjacentHTML('beforeend',
    `<div class="message">${message}<div>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
