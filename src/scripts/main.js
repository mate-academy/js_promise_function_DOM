'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      if (eventName === 'click'
        || eventName === 'contextmenu' || eventName === 'blur') {
        resolve(`It was ${eventName} on the element: ${element.nodeName}, 
        id: ${element.id}.`);
      }
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.innerText = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
