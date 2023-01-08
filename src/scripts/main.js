'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    document.getElementById(`${element.id}`).addEventListener(`${eventName}`,
      function() {
        resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}`);
      });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';

  div.innerText = message;
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
