'use strict';

describe('Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`Promise 'click' for 'login'.`, () => {
    cy.get('#login').click();
    cy.get('form > :nth-child(4)').contains('It was click on the element: INPUT, id: login.');
  });

  it(`Promise 'input' for 'login'.`, () => {
    cy.get('#login').type('login');
    cy.get('form > :nth-child(5)').contains('It was input on the element: INPUT, id: login.');
  });

  it(`Promise 'blur' for 'login'.`, () => {
    cy.get('#login').click();
    cy.get('body').click({force: true});
    cy.get('form > :nth-child(5)').contains('It was blur on the element: INPUT, id: login.');
  });

  it(`Promise 'click' for 'password'.`, () => {
    cy.get('#password').click();
    cy.get('form > :nth-child(4)').contains('It was click on the element: INPUT, id: password.');
  });

  it(`Promise 'input' for 'password'.`, () => {
    cy.get('#password').type('login');
    cy.get('form > :nth-child(5)').contains('It was input on the element: INPUT, id: password.');
  });

  it(`Promise 'blur' for 'password'.`, () => {
    cy.get('#password').click();
    cy.get('body').click({force: true});
    cy.get('form > :nth-child(5)').contains('It was blur on the element: INPUT, id: password.');
  });

  it(`Promise 'click' for 'submit'.`, () => {
    cy.get('#submit').click();
    cy.get('form > :nth-child(4)').contains('It was click on the element: BUTTON, id: submit.');
  });

  it(`Promise 'blur' for 'submit'.`, () => {
    cy.get('#submit').click();
    cy.get('body').click({force: true});
    cy.get('form > :nth-child(5)').contains('It was blur on the element: BUTTON, id: submit.');
  });
});
