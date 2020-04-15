describe('Exercise delete', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.login()
  })

  afterEach(() => {
    cy.app('clean')
  })

  it('should delete the exercise on confirmation of the modal warning and show a success flash message', () =>{
    cy.appFactories([
      ['create', 'exercise']
    ]).then((exercises) => {
      cy.visit('/admin/exercises/')
      cy.get('.delete-exercise').click()
      cy.get('.modal-header').contains('Delete Confirmation').should('be.visible')
      cy.get('.modal-body').contains(`Are you sure you would like to delete ${exercises[0].name}`).should('be.visible')
      cy.get('.btn-primary').contains('Delete Exercise').should('be.visible')
      cy.get('.modal-footer > .btn-primary').click()
      cy.get('.alert-success').contains('Exercise deleted').should('be.visible')
      cy.get('.close').click()
      cy.get('.alert-success').should('not.exist')
    });
  })
});