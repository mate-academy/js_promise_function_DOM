'use strict';

function waitFor(element, eventName) {
  const resolve = (resolved) => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: `
  + `${element.nodeName}, id: ${element.id}.`;

      resolved(message);
    });
  };

  return new Promise(resolve);
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.innerText = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
