'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}.`);
    });
  };

  return new Promise(resolver);
}

const div = document.createElement('div');

document.body.append(div);

const printMessage = (message) => {
  const notification = document.createElement('div');

  div.setAttribute('style',
    `display: flex; 
    flex-direction: column;
    gap: 20px;
    justify-content: space-evenly; 
    flex-wrap: wrap;
    align-items: center;`);
  notification.classList.add('message');
  notification.innerHTML = message;
  div.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
