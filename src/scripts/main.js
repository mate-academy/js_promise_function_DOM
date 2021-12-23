'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    document.addEventListener(`${eventName}`, event => {
      if (event.target === element) {
        resolve(`It was ${eventName} on the element:
          ${element.nodeName}, id: ${element.id}.`);
      }
    })
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.innerText = message;

  body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
