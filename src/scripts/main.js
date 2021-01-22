'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    const text = `It was ${eventName} on the element: 
    ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, () => {
      resolve(text);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
