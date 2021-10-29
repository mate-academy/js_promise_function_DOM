'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:`
       + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const newMesg = document.createElement('div');

  newMesg.classList.add('message');
  newMesg.innerHTML = message;

  document.body.append(newMesg);
};

module.exports = {
  waitFor,
  printMessage,
};
