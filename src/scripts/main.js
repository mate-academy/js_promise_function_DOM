'use strict';
/*
const events = {
  click: 'click',
  input: 'input',
  blur: 'blur',
};

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(eventName);
    });
  });
}

const printMessage = (message) => {
  document.body.createElement('div').classList.add('message').textContent =
    message;
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

const elements = [loginField, passwordField, button];

waitFor(button, [events.click]).then((eventName) =>
  printMessage(`It was ${eventName} on the button.`)

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
*/

// const events = {
//   click: 'click',
//   input: 'input',
//   blur: 'blur',
// };

// function waitFor(element, eventNames) {
//   return new Promise((resolve) => {
//     const handler = (ev) => {
//       console.log('Fired Event:', ev.type, 'on element:', element.id);
//       resolve({ eventName: ev.type, element });

//       // Create a new promise to continue listening
//       waitFor(element, eventNames).then(resolve);
//     };

//     eventNames.forEach((eventName) => {
//       console.log('Listening Event:', eventName);
//       element.addEventListener(eventName, handler);
//     });
//   });
// }

// const printMessage = ({ eventName, element }) => {
//   console.log('printMessage:', eventName, element);
//   const div = document.createElement('div');

//   div.classList.add('message');
//   div.textContent = `It was ${eventName} on the element:
// ${element.nodeName}, id: ${element.id}.`;
//   document.body.appendChild(div);
// };

// const loginField = document.getElementById('login');
// const passwordField = document.getElementById('password');
// const button = document.getElementById('submit');

// waitFor(loginField, [events.input, events.blur, events.click]).then(
//   printMessage,
// );

// waitFor(passwordField, [events.input, events.blur, events.click]).then(
//   printMessage,
// );

// waitFor(button, [events.click, events.blur]).then(printMessage);

const events = {
  click: 'click',
  input: 'input',
  blur: 'blur',
};

function waitFor(element, eventNames) {
  return new Promise((resolve) => {
    const handler = (ev) => {
      // console.log('Fired Event:', ev.type, 'on element:', element.id);
      resolve({ eventName: ev.type, element });

      // Remove listener to prevent duplicates
      eventNames.forEach((eventName) => {
        element.removeEventListener(eventName, handler);
      });

      // Re-run waitFor to listen for future events
      waitFor(element, eventNames).then(resolve);
    };

    eventNames.forEach((eventName) => {
      // console.log('Listening Event:', eventName);
      element.addEventListener(eventName, handler);
    });
  });
}

const printMessage = ({ eventName, element }) => {
  // console.log('printMessage:', eventName, element);

  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;
  document.body.appendChild(div);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

function continuouslyWaitFor(element, eventNames) {
  waitFor(element, eventNames).then((result) => {
    printMessage(result);
    continuouslyWaitFor(element, eventNames); // Restart listener
  });
}

continuouslyWaitFor(loginField, [events.input, events.blur, events.click]);
continuouslyWaitFor(passwordField, [events.input, events.blur, events.click]);
continuouslyWaitFor(button, [events.click, events.blur]);
