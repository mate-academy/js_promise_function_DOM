'use strict';

function waitFor(element, eventName) {
  return new Promise(resolved => {
    element.addEventListener(eventName, (event) => {
      event.preventDefault();

      resolved(event.target.id)
    });
  })

}

const elementLogin = document.getElementById('login');
const elementPassword = document.getElementById('password');
const elementButton = document.getElementById('submit');


function print(elementId) {
  console.log(elementId);
}

const promise1 = waitFor(elementLogin, 'click');
const promise2 = waitFor(elementPassword, 'click');
const promise3 = waitFor(elementButton, 'click');

promise1
.then(print)

promise2
.then(print)

promise3
.then(print)

