'use strict';

const root = document.querySelector('.root');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName,
      resolve(`It was ${eventName} on the element:`
      + ` ${element.nodeName}, id: ${element.id}.`));
  });
}

const printMessage = (message) => {
  const container = document.createElement('div');

  container.classList.add('message');
  container.textContent = message;

  root.insertAdjacentElement('beforeend', container);
};

module.exports = {
  waitFor,
  printMessage,
};
