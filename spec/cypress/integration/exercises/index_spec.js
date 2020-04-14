describe('Exercise index', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.login()
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