describe('Exercise index', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.appFactories([
      ['create', 'user', { email: 'user@email.com' }]
    ])
    cy.visit('/login')
    cy.get('#email').type('user@email.com')
    cy.get('#password').type('password')
    cy.get('form button').click()
    cy.url().should('eq', 'http://localhost:5002/')
  })

  afterEach(() => {
    cy.app('clean')
  })

  it('should show a blank page if no exercises are present', () => {
    cy.visit('/admin/exercises')
    cy.get('.no-exercises').should('be.visible')
    cy.get('.exercise').should('not.exist')
  })

  it('should show a list of exercises if there are any', () => {
    cy.appFactories([
      ['create', 'exercise']
    ])
    cy.visit('/admin/exercises')
    cy.get('.no-exercises').should('not.exist')
    cy.get('.exercise').should('be.visible')
  })

});