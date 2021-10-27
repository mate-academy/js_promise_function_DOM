'use strict';

function waitFor(element, eventName) {
  const textMessage = `It was ${eventName} on the element:
  ${element.nodeName}, id: ${element.id}.`;
  const resolver = (resolve) => {
    element.addEventListener(eventName, function() {
      resolve(textMessage);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  // write your code here
  const div = document.createElement('div');
  const form = document.querySelector('form');

  div.style.cssText = 'height: auto; margin-top: 10px;';

  div.className = 'message';
  div.textContent = message;
  form.appendChild(div);
};

module.exports = {
  waitFor,
  printMessage,
};
