/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const { email, password } = Cypress.env('user');
describe('test for login redirect  to /docs/', () => {
  it('should go back to /docs/ after login ', () => {
    cy.visit('/docs');
    cy.get("[data-testid='login-btn']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/login/');
    });

    cy.get("input[name='email']").should('exist').type(email);
    cy.get("input[name='password']").should('exist').type(password);
    cy.get("button[type='submit']").should('exist').click({ force: true });

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/docs/');
    });
  });
  it('should go back to /docs/introduction/ after login ', () => {
    cy.visit('/docs/introduction');
    cy.get("[data-testid='login-btn']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/login/');
    });

    cy.get("input[name='email']").should('exist').type(email);
    cy.get("input[name='password']").should('exist').type(password);
    cy.get("button[type='submit']").should('exist').click({ force: true });

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/docs/introduction/');
    });
  });
});

describe(' login redirect for /product', () => {
  it('should go not back to /product after login ', () => {
    cy.visit('/product');
    cy.get("[data-testid='login-btn']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/login/');
    });

    cy.get("input[name='email']").should('exist').type(email);
    cy.get("input[name='password']").should('exist').type(password);
    cy.get("button[type='submit']").should('exist').click({ force: true });

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/dashboard/');
    });
  });
});
