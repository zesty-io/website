/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const testurl =
  'http://test.zesty.io:3000/docs/accounts/api-reference/instances/domains/#Create-Domain';

const testUrl1 =
  'http://test.zesty.io:3000/docs/instances/api-reference/web/redirects/#Delete-Redirect';

const testUrl2 =
  'http://test.zesty.io:3000/docs/authentication/api-reference/#Verify';

describe('DOCS url test', () => {
  it('test docs/accounts route', () => {
    cy.visit(testurl);

    cy.get("h6[id='Create-Domain']", { timeout: 30000 }).should('exist');
  });
  it('test docs/instances route', () => {
    cy.visit(testUrl1);

    cy.get("h6[id='Delete-Redirect']", { timeout: 30000 }).should('exist');
  });

  it('test docs/authentication route', () => {
    cy.visit(testUrl2);

    cy.get("h6[id='Verify']", { timeout: 30000 }).should('exist');
  });
});
