'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}
       on the element: ${element.nodeName},
        id: ${element.id}.
         For example: It was click on the element: INPUT,
          id: login.`);
    });
  });
}

const printMessage = (message) => {
  const notificationMessage = document.createElement('div');

  notificationMessage.innerText = message;
  notificationMessage.classList.add('message');

  document.body.append(notificationMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
