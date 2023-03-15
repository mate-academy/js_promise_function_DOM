'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.className = 'message';

  div.innerText = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
