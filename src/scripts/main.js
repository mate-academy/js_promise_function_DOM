'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const text = `It was ${eventName} on the element: 
    ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, (e) => {
      resolve(text);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerHTML = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
