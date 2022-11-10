'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName},
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const messageOnScreen = document.createElement('div');

  messageOnScreen.classList = 'message';
  messageOnScreen.textContent = message;
  body.append(messageOnScreen);
};

module.exports = {
  waitFor,
  printMessage,
};
