/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

it('Homepage Hero', () => {
  cy.visit('http://test.zesty.io:3000/').then(() => {
    cy.window().then(() => {
      cy.get("[data-testid='HomePageHero']").toMatchImageSnapshot();
    });
  });
});
