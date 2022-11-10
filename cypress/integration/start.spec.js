/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('E2E accounts: /start/ ', () => {
  beforeEach('Login', () => {
    cy.loginTestUser();
  });

  it('Scenario 2: user is logged in and no template', () => {});
});
