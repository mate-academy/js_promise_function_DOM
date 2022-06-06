'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
}

const form = document.querySelector('form');
const printMessage = (message) => {
  form.insertAdjacentHTML('afterbegin',
    `<div class="message">${message}</div>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
