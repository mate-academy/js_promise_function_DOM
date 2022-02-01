'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(
        `It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  document.querySelector('body').append(element);
  element.className = 'message';
  element.innerText = `${message}`;
};

module.exports = {
  waitFor,
  printMessage,
};
