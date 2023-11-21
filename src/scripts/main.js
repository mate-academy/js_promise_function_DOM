'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${
        element.nodeName}, id: ${element.id}.`);
    });
  });
}

// it will propably work, but i cant use npm anyway

const printMessage = (message) => {
// write your code here
  const mydiv = document.createElement('div');

  mydiv.classList.add('message');
  mydiv.innerText = message;
  document.body.appendChild(mydiv);
};

module.exports = {
  waitFor,
  printMessage,
};
