/* eslint-disable no-shadow */
'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (event) => {
      resolve(`It was ${eventName} on the element: `
      + `${event.target.nodeName}, id: ${event.target.id}.`);
    });
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.className = 'message';

  element.textContent = message;

  document.body.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
