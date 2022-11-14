'use strict';

function waitFor(element, eventName) {
  const promiseOne = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} 
        on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promiseOne;
}

const printMessage = (message) => {
  const div = document.createElement('div');

  document.body.append(div);
  div.innerText = message;
  div.classList.add('message');
};

module.exports = {
  waitFor,
  printMessage,
};
