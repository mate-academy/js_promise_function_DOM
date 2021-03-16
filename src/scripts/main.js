'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on
        the element: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
// write your code here
  const createMessege = document.createElement('div');

  createMessege.className = 'message';
  createMessege.innerText = message;

  document.body.append(createMessege);
};

module.exports = {
  waitFor,
  printMessage,
};
