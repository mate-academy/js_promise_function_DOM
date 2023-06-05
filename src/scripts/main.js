'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: 
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const note = document.createElement('div');

  note.classList = 'message';
  note.innerText = message;
  document.body.append(note);
};

module.exports = {
  waitFor,
  printMessage,
};
