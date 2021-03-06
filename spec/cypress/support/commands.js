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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('ar_command', (model) => {
  return cy.app('ar_command', model)
});

Cypress.Commands.add('login', () => {
  cy.appFactories([
    ['create', 'user', { email: 'user@email.com' }]
  ])
  cy.visit('/login')
  cy.get('#email').type('user@email.com')
  cy.get('#password').type('password')
  cy.get('form button').click()
  cy.url().should('eq', 'http://localhost:5002/')
})
