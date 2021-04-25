'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const message = 'It was ' + eventName + ' on the element: '
        + element.nodeName + ', id: ' + element.id + '.';

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const divElement = document.createElement('div');

  divElement.classList.add('message');
  divElement.textContent = message;
  document.querySelector('body').appendChild(divElement);
};

module.exports = {
  waitFor,
  printMessage,
};
