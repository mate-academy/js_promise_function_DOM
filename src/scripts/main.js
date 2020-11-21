'use strict';

const waitFor = (element, eventName) => {
  const result = new Promise(resolve => {
    element.addEventListener(eventName, () => resolve('Resolved'));
  });

  return result;
};

// eslint-disable-next-line no-console
waitFor(document, 'click').then(result => console.log(result));
