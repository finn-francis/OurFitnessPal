describe('Devise sessions', () => {
  beforeEach(() => {
    cy.app('clean')
  })

  afterEach(() => {
    cy.app('clean')
  })

  it('should allow the user to log in and out', () => {
    cy.appFactories([
      ['create', 'user', { email: 'user@email.com' }]
    ])
    cy.visit('/login')
    cy.get('#login').should('be.visible')
    cy.get('#signup').should('be.visible')
    cy.get('#logout').should('not.exist')

    cy.get('#email').type('user@email.com')
    cy.get('#password').type('password')

    cy.get('form button').click()
    cy.url().should('eq', 'http://localhost:5002/')
    cy.get('#login').should('not.exist')
    cy.get('#signup').should('not.exist')
    cy.get('#logout').should('be.visible')

    cy.get('#logout').click()

    cy.url().should('eq', 'http://localhost:5002/login')
    cy.get('#login').should('be.visible')
    cy.get('#signup').should('be.visible')
    cy.get('#logout').should('not.exist')
  })
})
