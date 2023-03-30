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

const div = document.querySelector('.message');

const printMessage = (message) => {
  if (div) {
    div.textContent = message;
  } else {
    const divMessage = document.createElement('div');

    divMessage.classList.add('message');
    divMessage.textContent = message;
    document.body.appendChild(divMessage);
  };
};

module.exports = {
  waitFor,
  printMessage,
};
