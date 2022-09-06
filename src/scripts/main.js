'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, e => {
      resolve(`It was ${eventName} on the element: 
        ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const divMessage = document.createElement('div');

  divMessage.className = 'message';
  divMessage.innerHTML = message;

  document.body.append(divMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
