'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName} 
        id: ${element.id}.`);
    });
  });
}

const blockForMessage = document.createElement('div');
const printMessage = (message) => {
  document.body.append(blockForMessage);

  blockForMessage.insertAdjacentHTML('beforeend', `
  <div class="message" style ="margin-bottom: 10px">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
