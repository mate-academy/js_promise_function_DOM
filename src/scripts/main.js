'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submit');
const eventsToListen = ['click', 'input', 'blur'];
const setupEventListeners = (element, eventList) => {
  eventList.forEach((evtName) => {
    waitFor(element, evtName).then(printMessage);
  });
};

setupEventListeners(loginField, eventsToListen);
setupEventListeners(passwordField, eventsToListen);
setupEventListeners(submitButton, ['click', 'blur']);
