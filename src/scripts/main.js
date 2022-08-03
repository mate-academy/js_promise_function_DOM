'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:`
      + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const msg = document.createElement('div');

  msg.classList.add('message');
  msg.textContent = message;

  document.body.append(msg);
};

module.exports = {
  waitFor,
  printMessage,
};
