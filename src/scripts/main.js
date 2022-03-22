'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`${eventName} on the element: 
      ${e.target.nodeName}, id: ${e.target.id}`);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
