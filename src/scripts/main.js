'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      const nodeName = element.nodeName;
      const id = element.id;

      resolve(
        `It was ${eventName} on the element:${nodeName}, id: ${id}`
      );
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.innerText = message;
  div.className = 'message';
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
