'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`
      It was ${eventName}
      on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');

  div.innerHTML = message;

  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
