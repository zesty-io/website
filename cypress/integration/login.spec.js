/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const email = Cypress.env('email');
const password = Cypress.env('password');

describe('Login tests', () => {
  beforeEach('start', () => {
    cy.visit('http://test.zesty.io:3000/login/');
  });
  it('Testing users login', () => {
    cy.get("input[name='email']").should('exist').type(email);
    cy.get("input[name='password']").should('exist').type(password);
    cy.get("button[type='submit']").should('exist').click();
    cy.get("[data-testid='instancesContainer']").should('exist');
  });
});
