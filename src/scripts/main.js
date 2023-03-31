'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element`
        + `: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  let div = document.querySelector('.message');

  if (div) {
    div.textContent = message;
  } else {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">${message}</div>`
    );
  };
}; 

module.exports = {
  waitFor,
  printMessage,
};