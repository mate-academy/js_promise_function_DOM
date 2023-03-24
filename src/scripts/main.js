'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const firstPromise = new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}
       on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return firstPromise;
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
