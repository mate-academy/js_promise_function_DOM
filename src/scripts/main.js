'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} 
      on the element: ${element.nodeName}, 
      id: ${element.id}`);
    });
  });
}

const block = document.createElement('div');

block.style.display = 'flex';
block.style.flexDirection = 'column';
block.style.flexWrap = 'wrap';
block.style.marginLeft = '20px';

document.body.append(block);

const printMessage = (message) => {
// write your code here
  const div = document.createElement('div');

  div.innerHTML = message;
  div.classList.add('message');
  div.style.margin = '10px 0';
  block.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
