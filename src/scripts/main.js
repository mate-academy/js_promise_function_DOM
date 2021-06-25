'use strict';

function waitFor(element, eventName) {
// write your code here
  const eventPromise = new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => resolve(`
    It was ${eventName}
    on the element: ${element.nodeName}, id: ${element.id}.`));
  });

  return eventPromise;
}

const printMessage = (message) => {
// write your code here
  const eventNotification = document.createElement('div');

  eventNotification.className = 'message';

  eventNotification.innerHTML = `
    <p>${message}</p>
  `;

  document.body.append(eventNotification);
  setTimeout(() => eventNotification.remove(), 2000);
};

module.exports = {
  waitFor,
  printMessage,
};
