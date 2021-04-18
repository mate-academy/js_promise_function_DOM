'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve([eventName, element.nodeName, element.id]);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const [eventName, nodeName, elemId] = message;
  const notification = document.createElement('div');

  notification.className = 'message';

  notification.textContent = `It was ${eventName} 
    on the element: ${nodeName}, id: ${elemId}.`;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
