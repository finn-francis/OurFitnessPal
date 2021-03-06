describe('Devise sessions', () => {
  beforeEach(() => {
    cy.app('clean')
  })

  afterEach(() => {
    cy.app('clean')
  })

  it('should allow the user to log in and out', () => {
    cy.ar_command(['User', 'count']).should('eq', 0)

    cy.visit('/signup')
    cy.get('#email').type('user@email.com')
    cy.get('#password').type('password')
    cy.get('#password_confirmation').type('password')

    cy.get('form button').click()
    cy.url().should('eq', 'http://localhost:5002/')
    cy.get('#login').should('not.exist')
    cy.get('#signup').should('not.exist')
    cy.get('#logout').should('be.visible')

    cy.ar_command(['User', 'count']).should('eq', 1)
  })
})
