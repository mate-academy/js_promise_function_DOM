'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve('It was ' + eventName
        + ' on the element: ' + element.nodeName + ', id: ' + element.id + '.');
    });
  });
}

const printMessage = (message) => {
  const divMessage = document.createElement('div');

  divMessage.className = 'message';
  divMessage.textContent = message;
  document.body.append(divMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
