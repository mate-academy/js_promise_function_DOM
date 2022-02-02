'use strict';

function waitFor(element, eventName) {
  // write your code here
  const resolver = (complete) => {
    element.addEventListener(eventName, (e) => {
      if (e.target.closest(`#${e.target.id}`)) {
        complete(`It was ${eventName} on the element: 
        ${e.target.nodeName}, id: ${e.target.id}`);
      }
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  // write your code here
  const div = document.createElement('DIV');

  div.classList.add('message');
  div.textContent = message;
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
