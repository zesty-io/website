/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('E2E product page', () => {
  it('test if product landing page rendered ', () => {
    cy.visit('/product');
    cy.get("[data-testid='product-landing']", { timeout: 30000 }).should(
      'exist',
    );
    cy.get("[data-testid='navigation-tree']", { timeout: 30000 }).should(
      'exist',
    );
    cy.get("[data-testid='table-of-contents']", { timeout: 30000 }).should(
      'exist',
    );
    cy.algoliaNavigate();
  });
  it('test if product slug urls rendered ', () => {
    cy.visit('/product/content');
    cy.get("[data-testid='product-slug']", { timeout: 30000 }).should('exist');
    cy.get("[data-testid='navigation-tree']", { timeout: 30000 }).should(
      'exist',
    );
    cy.get("[data-testid='table-of-contents']", { timeout: 30000 }).should(
      'exist',
    );
    cy.algoliaNavigate();
  });

  it('test if this image is rendered ', () => {
    cy.visit('/product/search-engine-optimization/');
    cy.get('[alt="SEO Features in Zesty.io"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
