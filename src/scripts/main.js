'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (eventObj) => {
      if (eventObj.target) {
        resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
      }
    });
  });
}

const printMessage = (message) => {

  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  body.appendChild(div);
};

module.exports = {
  waitFor,
  printMessage,
};
