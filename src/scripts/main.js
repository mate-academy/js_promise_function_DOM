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
  const container = document.createElement('div');

  container.className = 'message';
  container.innerHTML = message;
  document.body.append(container);
};

module.exports = {
  waitFor,
  printMessage,
};
