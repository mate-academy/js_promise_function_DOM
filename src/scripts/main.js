'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    document.getElementById(`${element.id}`).addEventListener(`${eventName}`,
      () => {
        resolve(`It was ${eventName} on the element:
          ${element.nodeName}, id: ${element.id}.`);
      }
    );
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('messsage');
  div.innerText = message;
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
