'use strict';

function waitFor(element, eventName) {
  const promise = new Promise(function(resolve) {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
}

const printMessage = (message) => {
  const divWithMessage = document.createElement('div');

  divWithMessage.classList.add('message');
  divWithMessage.textContent = message;
  document.body.append(divWithMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
