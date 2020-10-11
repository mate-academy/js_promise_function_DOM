/* eslint-disable no-console */
'use strict';

const input = document.getElementById('login');

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`${eventName} on ${element.tagName}`);
    });
  };

  return new Promise(resolver);
}

const promise = waitFor(input, 'click');

promise
  .then(result => console.log(result));
