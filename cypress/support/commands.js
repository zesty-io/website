// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { email, password } = Cypress.env('user');

Cypress.Commands.add('loginTestUser', () => {
  cy.visit('http://test.zesty.io:3000/login/');
  cy.get("input[name='email']").should('exist').type(email);
  cy.get("input[name='password']").should('exist').type(password);
  cy.get("button[type='submit']").should('exist').click();

  cy.get("[data-testid='instancesContainer']", { timeout: 30000 }).should(
    'exist',
  );

  cy.clearCookies();
  cy.reload();

  cy.visit('http://test.zesty.io:3000/login/');
  cy.get("input[name='email']").should('exist').type(email);
  cy.get("input[name='password']").should('exist').type(password);
  cy.get("button[type='submit']").should('exist').click();
});
