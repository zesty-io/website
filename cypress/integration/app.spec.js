/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

const email = 'darwin.apolinario@zesty.io';
const pass = 'Gand27ef!';
describe('Test when content is pass as props and user is not login', () => {
  beforeEach('start', () => {
    cy.visit('http://test.zesty.io:3000/instances/');
  });
  it('testing user interactions ', () => {
    cy.wait(5000);
    cy.get("input[name='email']").type(email);
    cy.get("input[name='password']").type(pass);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
    cy.contains('ok').click();
  });
});
