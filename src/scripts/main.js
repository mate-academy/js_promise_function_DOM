'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => resolve(
      `It was ${eventName} on the element: 
      ${element.nodeName}, id: ${element.id}.`
    ));
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.classList.add('message');
  element.innerText = message;

  document.body.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
