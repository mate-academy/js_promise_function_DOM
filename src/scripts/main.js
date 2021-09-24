'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.innerText = message;
  document.body.append(messageDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
