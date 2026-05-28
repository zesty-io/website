/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('E2E accounts: Navigate user', () => {
  beforeEach('Login', () => {
    cy.loginTestUser();
  });

  it('Test user navigation in Accounts', () => {
    cy.wait(3000);
    cy.get("[data-testid='instancesContainer']", { timeout: 30000 }).should(
      'exist',
    );

    cy.get("input[placeholder='Search an Instances']", { timeout: 30000 })
      .should('exist')
      .type('acme recipes');

    cy.wait(5000);

    cy.get("[data-testid='Acme Recipes']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.get("[data-testid='Overview']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='Users-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Users']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='Team Access-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Teams']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='Domains-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Domain']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='Locales-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Locales']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='API Tokens-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Apis']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='Webhooks-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Webhooks']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='Settings-Nav']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });
    cy.get("[data-testid='Settings']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='user-avatar']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.get("[data-testid='Profile-dropdown']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.wait(3000);
    cy.get("[data-testid='Profile']", { timeout: 30000 }).should('exist');

    cy.get("[title='Security']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.get("[data-testid='Security']", { timeout: 30000 }).should('exist');

    cy.get("[title='Preferences']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.get("[data-testid='Preference']", { timeout: 30000 }).should('exist');

    cy.get("[data-testid='user-avatar']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.get("[data-testid='Logout-dropdown']", { timeout: 30000 })
      .should('exist')
      .click({ force: true });

    cy.url({ timeout: 30000 }).should('include', '/login/');
  });
});
