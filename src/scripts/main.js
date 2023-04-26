'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
       id: ${element.id}.`);
    });
  });
}

const body = document.querySelector('body');

const printMessage = (message) => {
  const div = document.createElement('div');

  body.append(div);
  div.classList = 'message';
  div.textContent = message;
};

module.exports = {
  waitFor,
  printMessage,
};
