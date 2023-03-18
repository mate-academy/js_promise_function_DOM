'use strict';

const printMessage = (message) => {
  const box1 = document.createElement('div');

  document.body.appendChild(box1);
  box1.className += 'message';
  box1.textContent = `${message}`;
};

function waitFor(element, eventName) {
  const promise1 = new Promise((resolve, reject) => {
    element.addEventListener(eventName, (click) => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    });
  });

  promise1.then((message) => {
    printMessage(message);
  });
}

module.exports = {
  waitFor,
  printMessage,
};
