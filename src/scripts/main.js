'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const body = document.body;
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
