'use strict';

const body = document.body;

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve('It was ' + eventName + ' on the element: '
        + e.target.nodeName + ',  id: ' + e.target.id);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
