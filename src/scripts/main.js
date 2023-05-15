'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (evt) => {
      evt.preventDefault();

      resolve(`It was ${eventName}`
      + `on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const form = document.querySelector('form');
  const messageInDocument = document.createElement('div');

  messageInDocument.classList = 'message';
  messageInDocument.innerHTML = message;
  form.append(messageInDocument);
};

module.exports = {
  waitFor,
  printMessage,
};
