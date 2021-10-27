'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      const message = document.createElement('div');

      message.className = 'message';

      message.innerText = `It was ${eventName} on the element: `
      + `${element.nodeName}, id: ${element.id}.`;
      resolve(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const body = document.querySelector('body');

  body.append(message);
};

module.exports = {
  waitFor,
  printMessage,
};
