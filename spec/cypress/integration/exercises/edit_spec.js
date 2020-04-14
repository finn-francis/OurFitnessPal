describe('Exercise edit', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.login()
  })

  afterEach(() => {
    cy.app('clean')
  })

  it('should edit the exercise on form submission and show a success flash message', () =>{
    cy.appFactories([
      ['create', 'exercise']
    ]).then((exercises) => {
      cy.visit(`/admin/exercises/${exercises[0].id}/edit`)
      cy.get('#exerciseName').should('have.value', exercises[0].name)
      cy.get('#description').should('have.value', exercises[0].description)
      cy.get('#exerciseName').type('Squat')
      cy.get('#description').type('Go Low')
      cy.get('.submit-button').click()
      cy.get('.alert-success').should('be.visible')
      cy.get('.alert-success').contains('Exercise updated').should('be.visible')
      cy.get('.close').click()
      cy.get('.alert-success').should('not.exist')
    });
  })
});