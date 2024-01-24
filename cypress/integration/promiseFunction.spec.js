'use strict';

Cypress.Commands.add('checkNotificationExists', (promise, element, id) => {
  cy.contains(`It was ${promise} on the element: ${element}, id: ${id}.`)
    .should('be.visible');
});

describe('Promise function app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should resolve 'click' promise for 'login' field`, () => {
    cy.get('#login').click();
    cy.checkNotificationExists('click', 'INPUT', 'login');
  });

  it(`should resolve 'input' promise for 'login' field`, () => {
    cy.get('#login').type('login');
    cy.checkNotificationExists('input', 'INPUT', 'login');
  });

  it(`should resolve 'blur' promise for 'login' field`, () => {
    cy.get('#login').click().blur();
    cy.checkNotificationExists('blur', 'INPUT', 'login');
  });

  it(`should resolve 'click' promise for 'password' field`, () => {
    cy.get('#password').click();
    cy.checkNotificationExists('click', 'INPUT', 'password');
  });

  it(`should resolve 'input' promise for 'password' field`, () => {
    cy.get('#password').type('login');
    cy.checkNotificationExists('input', 'INPUT', 'password');
  });

  it(`should resolve 'blur' promise for 'password' field`, () => {
    cy.get('#password').click().blur();
    cy.checkNotificationExists('blur', 'INPUT', 'password');
  });

  it(`should resolve 'click' promise for 'submit' button`, () => {
    cy.get('#submit').click();
    cy.checkNotificationExists('click', 'BUTTON', 'submit');
  });

  it(`should resolve 'blur' promise for 'submit' button`, () => {
    cy.get('#submit').click().blur();
    cy.checkNotificationExists('blur', 'BUTTON', 'submit');
  });
});
