'use strict';

function waitFor(element, eventName) {
  const { nodeName, id } = element;

  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${nodeName}, id: ${id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.innerText = message;

  document.body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
