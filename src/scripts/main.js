'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (e) => {
      resolve(
        `It was ${eventName} on the element:
        ${e.target.nodeName}, id: ${element.id}.`);
    });
  });
}

const infoMessage = document.createElement('div');

infoMessage.classList.add('text-message');
document.body.append(infoMessage);

const printMessage = (message) => {
  const element = document.createElement('p');
  const textMessage = document.querySelector('.text-message');

  element.classList.add('message');
  element.textContent = message;
  textMessage.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
