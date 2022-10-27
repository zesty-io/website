/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const { email, password } = Cypress.env('user');

describe('Login tests', () => {
  beforeEach('start', () => {
    cy.visit('http://test.zesty.io:3000/login/');
  });
  it('Testing users login', () => {
    cy.get("input[name='email']").should('exist').type(email);
    cy.get("input[name='password']").should('exist').type(password);
    cy.get("button[type='submit']").should('exist').click();
    cy.get("[data-testid='instancesContainer']", { timeout: 30000 }).should(
      'exist',
    );
  });
});
