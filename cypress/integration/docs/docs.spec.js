/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('E2E docs page', () => {
  it('test if docs landing page rendered ', () => {
    cy.visit('/docs');
    cy.get("[data-testid='docs-landing']", { timeout: 30000 }).should('exist');
    cy.algoliaNavigate();
  });
  it('test if docs slug urls rendered ', () => {
    cy.visit('/docs/introduction');
    cy.get("[data-testid='docs-slug']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='navigation-tree']", { timeout: 30000 }).should(
      'exist',
    );

    cy.get("[data-testid='table-of-contents']", { timeout: 30000 }).should(
      'exist',
    );
    cy.algoliaNavigate();
  });

  it('test redirection to /docs/parsley', () => {
    cy.visit('/docs');
    cy.get("[data-testid='Parsley-btn']", { timeout: 30000 })
      .should('exist')
      .click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/docs/parsley/');
    });
  });
});
