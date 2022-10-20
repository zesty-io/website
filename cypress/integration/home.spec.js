/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

it('to mactch home page hero', () => {
  cy.visit('http://test.zesty.io:3000/').then(() => {
    // cy.wait(10000);
    cy.window().then(() => {
      cy.get("[data-testid='HomePageHero']").toMatchImageSnapshot();
    });
    // cy.document().toMatchImageSnapshot();
  });
});
