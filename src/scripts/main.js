'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.
      `);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  div.style.position = 'absolute';

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
