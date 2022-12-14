'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      const text = `It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`;

      resolve(text);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
