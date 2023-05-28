'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `
        It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.
        `
      );
    });
  });
}

const printMessage = (message) => {
  const form = document.querySelector('form');
  const showMessage = document.createElement('div');

  showMessage.classList.add('message');
  showMessage.textContent = message;
  form.prepend(showMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
