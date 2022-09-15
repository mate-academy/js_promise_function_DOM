'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.innerHTML = message;
  document.body.append(newDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
