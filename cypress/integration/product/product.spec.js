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
  it('should redirect /product/content', () => {
    cy.request({
      url: Cypress.config().baseUrl + '/product/content',
      failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
      followRedirect: false,
    }).then((response) => {
      expect(response.status).to.be.oneOf([301, 302, 307, 308]); // Verify that the URL redirects
    });
  });

  it('should redirect /product/search-engine-optimization/', () => {
    cy.request({
      url: Cypress.config().baseUrl + '/product/search-engine-optimization/',
      failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
      followRedirect: false,
    }).then((response) => {
      expect(response.status).to.be.oneOf([301, 302, 307, 308]); // Verify that the URL redirects
    });
  });
});

describe('test for built in products pages in app', () => {
  const urls = [
    '/product/auth-success',
    '/product/',
    'product/schema/content-models/',
    'product/schema/',
  ];

  urls.forEach((url) => {
    it(`should load URL: ${url} without encountering 404`, () => {
      cy.request({
        url: Cypress.config().baseUrl + url,
        failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
      }).then((response) => {
        expect(response.status).to.not.equal(404); // Verify that the status code is not 404
        expect(response.body).not.to.contain('404 Not Found'); // Verify that the page content does not contain the 404 message
        cy.get('body').should('exist'); // Check if the body element exists, indicating the page loaded successfully
      });
    });
  });
});
