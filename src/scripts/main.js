'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} 
        on the element: ${element.nodeName}, 
        id: ${element.id}.`
      );
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const newElement = document.createElement('div');

  document.body.append(newElement);
  newElement.classList.add('message');
  newElement.innerHTML += message;
};

module.exports = {
  waitFor,
  printMessage,
};
