'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');
  const previousMessage = document.querySelector('.message');

  div.className = 'message';
  div.innerText = message;

  if (previousMessage) {
    previousMessage.remove();
  }
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
