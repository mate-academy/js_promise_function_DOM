'use strict';

function detectCtrl(e) {
  const evt = window.event ? event : e; // IE browser

  return evt.ctrlKey;
}

function detectPaste(e) {
  const evt = window.event ? event : e;

  return evt.keyCode === 86 && evt.ctrlKey;
}

function isFieldEmpty(field) {
  return !field.length;
}

function validate(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  let key;

  for (key in data) {
    if (isFieldEmpty(data[key])) {
      return false;
    }
  }

  return true;
}

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      let canResolve = false;
      let msgPromise = `'${eventName}'`;

      if (element.tagName === 'FORM' && eventName === 'submit') {
        e.preventDefault();

        if (validate(element)) {
          canResolve = true;
        }
      } else if (element.tagName === 'INPUT' && eventName === 'keydown') {
        if (detectCtrl(e)) {
          canResolve = true;
        }
      } else {
        msgPromise = ` on '${element.tagName.toLowerCase()}`
        + `[name="${element.name}"]'`;

        if (!isFieldEmpty(element.value)) {
          canResolve = true;
        }
      }

      if (canResolve) {
        resolve('Promise was resolved in ' + msgPromise);
      } else {
        reject('Promise was rejected in ' + msgPromise);
      }
    });
  };

  return new Promise(resolver);
}

document.addEventListener('DOMContentLoaded', () => {
  const msgBlock = document.createElement('div');

  msgBlock.style.cssText = 'position: fixed; top: 10px;'
  + 'right: 10px; text-align: right;';
  document.body.append(msgBlock);

  let pasteDone = false;
  const showMessage = (msg, isResolved) => {
    const msgElem = document.createElement('p');
    const color = typeof isResolved === 'boolean'
      ? (isResolved ? 'rgb(80, 115, 0)' : 'rgb(235, 0, 70)')
      : 'rgb(0, 146, 200)';

    msgElem.style.color = color;
    msgElem.innerHTML = msg;

    msgBlock.append(msgElem);

    pasteDone = typeof isResolved !== 'boolean';
  };

  const form = document.querySelector('form');

  // Detect user do Ctrl+V to paste a password
  // Will work if user press Ctrl for the first time

  // If he press Ctrl without V key code for the first time,
  // we suppose he is going to paste something for the second time
  waitFor(form.querySelector('#password'), 'keydown')
    .then(resolve => {
      showMessage(resolve, true);

      form.querySelector('#password').addEventListener('keydown', (e) => {
        if (detectPaste(e) && !pasteDone) {
          showMessage('Hmm. Maybe a password was reserved '
          + 'in order not to remember it &#x1F600');
        }
      });
    })
    .catch(error => {
      showMessage(error, false);
    });

  const focuseOutLogin = waitFor(form.querySelector('#login'), 'blur');
  const submitForm = waitFor(form, 'submit');

  focuseOutLogin
    .then(resolve => {
      showMessage(resolve, true);
    })
    .catch(error => {
      showMessage(error, false);
    });

  submitForm
    .then(resolve => {
      showMessage(resolve, true);
    })
    .catch(error => {
      showMessage(error, false);
    });
});
