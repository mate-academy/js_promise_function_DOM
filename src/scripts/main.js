'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  // write your code here
  const body = document.querySelector('form');
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  body.prepend(div);
};

module.exports = {
  waitFor,
  printMessage,
};
