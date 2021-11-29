'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const res = `It was ${eventName}
     on the element: ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, (e) => {
      resolve(res);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('DIV');

  div.classList.add('message');
  div.innerText = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
