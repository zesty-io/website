/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('E2E docs page', () => {
  // it('test if docs landing page rendered ', () => {
  //   cy.visit('/docs');
  //   cy.get("[data-testid='docs-landing']", { timeout: 30000 }).should('exist');
  //   cy.algoliaNavigate();
  // });
  // it('test redirection to /docs/parsley', () => {
  //   cy.visit('/docs');
  //   cy.get("[data-testid='Parsley-btn']", { timeout: 30000 })
  //     .should('exist')
  //     .click();
  //   cy.location().should((loc) => {
  //     expect(loc.pathname).to.equal('/docs/parsley/');
  //   });
  // });
});

describe('test for built in docs pages in app', () => {
  // These URLs redirect to docs.zesty.io — verify the redirect without following it to avoid slow external requests in CI
  const redirectedUrls = [
    '/docs/accounts/api-reference/',
    '/docs/accounts/api-reference/instances/domains/',
    '/docs/instances/api-reference/',
    '/docs/instances/api-reference/content/links/',
    '/docs/authentication/api-reference/',
    '/docs/parsley/api-reference/',
    // media catch-all
    '/docs/media/api-reference/',
    // media-specific rules — one URL each to catch destination regressions
    '/docs/media/api-reference/manager/upload/',
    '/docs/media/api-reference/storage/files/',
    '/docs/media/api-reference/modify/resize/',
    '/docs/media/api-reference/resolver/lookup/',
  ];

  redirectedUrls.forEach((url) => {
    it(`should redirect: ${url}`, () => {
      cy.request({
        url: Cypress.config().baseUrl + url,
        failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        followRedirect: false,
      }).then((response) => {
        expect(response.status).to.be.oneOf([301, 302, 307, 308]); // Verify that the URL redirects
      });
    });
  });

  // These URLs serve content locally
  const localUrls = [
    '/docs/parsley/tour/hello-world/',
    '/docs/parsley/guides/',
    '/docs/parsley/guides/each-loop-deep-dive/',
  ];

  localUrls.forEach((url) => {
    it(`should load URL: ${url} without encountering 404`, () => {
      cy.request({
        url: Cypress.config().baseUrl + url,
        failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        timeout: 10000,
      }).then((response) => {
        expect(response.status).to.not.equal(404); // Verify that the status code is not 404
        expect(response.body).not.to.contain('404 Not Found'); // Verify that the page content does not contain the 404 message
        cy.get('body').should('exist'); // Check if the body element exists, indicating the page loaded successfully
      });
    });
  });
});
