'use strict';

document.body.style.flexDirection = 'column';

const button = document.getElementById('submit');

button.style.marginBottom = '20px';

const messageContainer = document.createElement('div');

messageContainer.style.display = 'flex';
messageContainer.style.flexWrap = 'wrap';
messageContainer.style.gap = '20px';
messageContainer.style.justifyContent = 'center';

document.body.append(messageContainer);

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}on the element: `
      + `${element.nodeName},id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const newElement = document.createElement('div');

  newElement.classList.add('message');
  newElement.innerText = message;
  newElement.style.display = 'flex';
  newElement.style.justifyContent = 'center';
  newElement.style.alignItems = 'center';
  messageContainer.append(newElement);
};

module.exports = {
  waitFor,
  printMessage,
};
