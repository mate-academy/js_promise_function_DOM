'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}
        on the element: ${element.nodeName},
        id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.classList.add('message');
  div.innerText = message;
  body.append(div);

  return new Promise((resolve) => {
    resolve();
  });
};

module.exports = {
  waitFor,
  printMessage,
};
