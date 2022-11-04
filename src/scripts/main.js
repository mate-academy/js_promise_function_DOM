'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}`);
    });
  });

  return promise;
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
