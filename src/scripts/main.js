'use strict';

function waitFor(element, eventName) {
// write your code here
}

const printMessage = (message) => {
// write your code here
};

const login = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('submit');
const promiseClick1 = waitFor(login, 'click');
const promiseClick2 = waitFor(password, 'click');
const promiseClick3 = waitFor(button, 'click');
const promiseInput1 = waitFor(login, 'input');
const promiseInput2 = waitFor(password, 'input');
const promiseBlur1 = waitFor(login, 'blur');
const promiseBlur2 = waitFor(password, 'blur');
const promiseBlur3 = waitFor(button, 'blur');

promiseClick1.then(printMessage);
promiseClick2.then(printMessage);
promiseClick3.then(printMessage);
promiseInput1.then(printMessage);
promiseInput2.then(printMessage);
promiseBlur1.then(printMessage);
promiseBlur2.then(printMessage);
promiseBlur3.then(printMessage);
