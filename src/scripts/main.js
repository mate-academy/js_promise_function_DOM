'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve('It was '
      + eventName + 'on the element: '
      + element.nodeName +' id: '
      + element.id + '.');
    });
  });
}

const printMessage = (message) => {
  const newMessege = document.createElement('div');

  newMessege.classList.add('message');
  newMessege.innerText = message;
  newMessege.style.position = 'absolute';
  document.body.append(newMessege);
};

module.exports = {
  waitFor,
  printMessage,
};
