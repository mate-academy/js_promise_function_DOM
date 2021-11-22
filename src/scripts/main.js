'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: `
      + `${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
