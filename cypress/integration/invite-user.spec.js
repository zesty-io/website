/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const email = Cypress.env('email');
const pass = Cypress.env('pass');

describe('Test user invites and login', () => {
  beforeEach('start', () => {
    cy.visit('http://test.zesty.io:3000/instances/');
  });
  it('testing user interactions ', () => {
    cy.wait(5000);
    cy.get("input[name='email']").type(email);
    cy.get("input[name='password']").type(pass);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
    cy.get("[data-testid='zesty.pw']").click();
    cy.wait(5000);
    cy.contains('Users').click();
    cy.wait(5000);
    cy.contains('Invite user').click();
    cy.get("input[name='email']").type(`test-${Math.random()}@test123.com`);
    cy.get("input[name='name']").type(`test-${Math.random()}`);
    cy.get("[data-testid='invite_user']").click();
    cy.get("[data-testid='SEO']").click({ force: true });
    cy.get('form').submit();

    cy.wait(5000);
  });
});
