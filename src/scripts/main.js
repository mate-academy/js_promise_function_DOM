'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const selector = element.getAttribute('id');
    const targetElement = document.querySelector(`#${selector}`);

    targetElement.addEventListener(eventName, (e) => {
      const el = e.target;
      const elTagName = el.nodeName;
      const elId = el.getAttribute('id');

      resolve(`It was ${eventName} on the element: ${elTagName}, id: ${elId}.`);
    });
  });
}

const printMessage = (message) => {
  const form = document.querySelector('form');
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.innerText = message;
  form.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
