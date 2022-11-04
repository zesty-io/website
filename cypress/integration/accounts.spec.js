/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const { email, password } = Cypress.env('user');

describe('Accounts', () => {
  beforeEach('start', () => {
    cy.visit('http://test.zesty.io:3000/login/');
  });
  it('Test users login on accounts ', () => {
    cy.get("input[name='email']").should('exist').type(email);
    cy.get("input[name='password']").should('exist').type(password);
    cy.get("button[type='submit']").should('exist').click();

    cy.wait(3000);
    cy.get("[data-testid='instancesContainer']", { timeout: 30000 }).should(
      'exist',
    );

    // cy.get("input[placeholder='Search an Instances']", { timeout: 30000 })
    //   .should('exist')
    //   .type('zesty.pw');

    // cy.visit('http://test.zesty.io:3000/instances/8-f48cf3a682-7fthvk/');

    // cy.get("[data-testid='Overview']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='Users-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Users']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='Teams-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Teams']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='Domains-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Domain']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='Locales-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Locales']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='APIs-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Apis']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='Webhooks-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Webhooks']", { timeout: 30000 }).should('exist');

    // cy.get("[data-testid='Settings-Nav']", { timeout: 30000 })
    //   .should('exist')
    //   .click();
    // cy.get("[data-testid='Settings']", { timeout: 30000 }).should('exist');
  });
});
