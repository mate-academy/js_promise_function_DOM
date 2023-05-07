'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise(resolve => {
    function handler() {
      element.removeEventListener(eventName, handler);

      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    }
    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
// write your code here
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

module.exports = {
  waitFor,
  printMessage,
};

const myButton = document.getElementById('button');

waitFor(myButton, 'click').then(message => {
  printMessage(message);
});
