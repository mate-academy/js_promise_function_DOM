'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`)
    });
  });
}

const printMessage = (message) => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.innerText = message;
  document.body.appendChild(newDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
