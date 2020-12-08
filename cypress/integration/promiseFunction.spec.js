'use strict';

Cypress.Commands.add('resolvePromise', (promise, element, id) => {
  cy.contains(`It was ${promise} on the element: ${element}, id: ${id}.`)
    .should('be.visible');
});

describe('Promise function app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should resolve 'click' promise for 'login' field`, () => {
    cy.get('#login').click();
    cy.resolvePromise('click', 'INPUT', 'login');
  });

  it(`should resolve 'input' promise for 'login' field`, () => {
    cy.get('#login').type('login');
    cy.resolvePromise('input', 'INPUT', 'login');
  });

  it(`should resolve 'blur' promise for 'login' field`, () => {
    cy.get('#login').click();
    cy.get('body').click({ force: true });
    cy.resolvePromise('blur', 'INPUT', 'login');
  });

  it(`should resolve 'click' promise for 'password' field`, () => {
    cy.get('#password').click();
    cy.resolvePromise('click', 'INPUT', 'password');
  });

  it(`should resolve 'input' promise for 'password' field`, () => {
    cy.get('#password').type('login');
    cy.resolvePromise('input', 'INPUT', 'password');
  });

  it(`should resolve 'blur' promise for 'password' field`, () => {
    cy.get('#password').click();
    cy.get('body').click({ force: true });
    cy.resolvePromise('blur', 'INPUT', 'password');
  });

  it(`should resolve 'click' promise for 'submit' button`, () => {
    cy.get('#submit').click();

    cy.resolvePromise('click', 'BUTTON', 'submit');
  });

  it(`should resolve 'blur' promise for 'submit' button`, () => {
    cy.get('#submit').click();
    cy.get('body').click({ force: true });
    cy.resolvePromise('blur', 'BUTTON', 'submit');
  });
});
