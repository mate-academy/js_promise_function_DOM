'use strict';

const form = document.querySelector('form');

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
}

const printMessage = (message) => {
  form.insertAdjacentHTML('beforeend',
    `<div class="message">${message}</div>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
