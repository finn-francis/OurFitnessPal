describe('Exercise show', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.login()
  })

  afterEach(() => {
    cy.app('clean')
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