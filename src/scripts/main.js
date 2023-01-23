'use strict';

function waitFor(element, eventName) {
  return new Promise(function(resolve, reject) {
    element.addEventListener(eventName, (actualEvent) => {
      if (actualEvent.type === eventName) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName},
          id: ${element.id}.`
        );
      }
    });
  });
}

const printMessage = (message) => {
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.textContent = message;
  document.body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
