describe('Exercise index', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.ar_command(['Exercise', 'count']).should('eq', 0)
    cy.appFactories([
      ['create', 'user', { email: 'user@email.com' }]
    ])
    cy.visit('/login')
    cy.get('#email').type('user@email.com')
    cy.get('#password').type('password')
    cy.get('form button').click()
    cy.url().should('eq', 'http://localhost:5002/')
    cy.visit('/admin/exercises/new')
  })

  it('should show a form to create an exercise', () => {
    cy.get('#exerciseName').should('be.visible')
    cy.get('#description').should('be.visible')
    cy.get('.custom-button').should('be.visible')
  })

  it('should create an exercise on form submission', () =>{
    cy.get('#exerciseName').type('Bench Press')
    cy.get('#description').type('Bench the big weight')
    cy.get('.submit-button').click()
    cy.ar_command(['Exercise', 'count']).should('eq', 1)
  })
});