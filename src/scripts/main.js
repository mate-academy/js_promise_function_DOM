'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const promise = new Promise((resolve, reject) => {
    body.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
};

const printMessage = (message) => {
  body.insertAdjacentHTML('beforeend',
    `<div class="message">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
