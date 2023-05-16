'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} 
        on the element: ${e.target.nodeName}, id: ${e.target.id}.`);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const notification = document.createElement('p');
  const body = document.querySelector('body');

  notification.className = message;
  notification.textContent = message;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
