'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, e => {
      resolve(
        `It was ${eventName} on the element: 
        ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const newMessage = document.createElement('div');

  newMessage.innerText = message;
  newMessage.className = 'message';
  document.body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
