/* eslint-disable no-console */
'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, (event) => {
      event.preventDefault();
      resolve('Promise was resolved!');
    });
  };

  return new Promise(resolver);
}

const buttonPromise = waitFor(document.querySelector('#submit'), 'click');
const passwordPromise = waitFor(document.querySelector('#password'), 'click');

buttonPromise.then((res) => console.log(res));
passwordPromise.then((res) => console.log(res));
