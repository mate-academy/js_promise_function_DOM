'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  // write your code here
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.setAttribute('class', 'message');
  div.innerHTML = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
