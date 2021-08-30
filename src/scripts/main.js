'use strict';

function waitFor(element, eventName) {
// write your code here
  const msg = document.createElement('div');

  msg.className = 'message';

  msg.innerText = `It was ${eventName} on the element: `
  + `${element.nodeName}, id: ${element.id}.`;

  const resolver = (resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(msg);
      }
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
// write your code here
  const rootElement = document.querySelector('body');

  rootElement.append(message);
};

module.exports = {
  waitFor,
  printMessage,
};
