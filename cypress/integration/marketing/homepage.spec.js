/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('E2E Marketing: / ', () => {
  it('test if homepage is loading', () => {
    cy.visit('/');
    cy.get("[data-testid='homePageHero']", { timeout: 30000 }).should('exist');
    cy.get("[data-testid='topBar']", { timeout: 30000 }).should('exist');
    cy.get("[data-testid='mainNav']", { timeout: 30000 }).should('exist');
  });
});
