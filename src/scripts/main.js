/* eslint-disable max-len */
'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () =>
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`));
  });
};

const printMessage = (message) => {
  const div = document.createElement('div');

  document.body.append(div);

  div.className = 'message';
  div.innerHTML = message;
};

module.exports = {
  waitFor,
  printMessage,
};
