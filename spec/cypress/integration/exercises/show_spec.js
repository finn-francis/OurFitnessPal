describe('Exercise show', () => {
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

  it('should render the show page with the exercise attributes', () => {
    cy.appFactories([
      ['create', 'exercise']
    ]).then((exercises) => {
      cy.visit(`/admin/exercises/${exercises[0].id}`)
      cy.get('.exercise-name').contains(`${exercises[0].name}`).should('be.visible')
      cy.get('.exercise-description').contains(`${exercises[0].description}`).should('be.visible')
    });
  })
});