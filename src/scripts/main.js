'use strict';

function waitFor(element, eventName) {
// write your code here
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
// write your code here
  const div = document.createElement('div');

  document.body.append(div);

  div.classList.add('message');
  div.textContent = message;
};

module.exports = {
  waitFor,
  printMessage,
};
