'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, `
        + `id: ${element.id}`
      );
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
