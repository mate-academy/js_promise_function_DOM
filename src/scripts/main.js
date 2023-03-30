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
    div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;
    document.body.appendChild(div);
  };
};

module.exports = {
  waitFor,
  printMessage,
};
