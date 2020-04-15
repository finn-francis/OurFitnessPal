describe('Session index', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.login()
  })

  afterEach(() => {
    cy.app('clean')
  })

  it('should show a blank page if no sessions are present', () => {
    cy.visit('/sessions')
    cy.get('.no-sessions').should('be.visible')
    cy.get('.session').should('not.exist')
  })

  it('should show a list of sessions if there are any', () => {
    cy.appFactories([['create', 'session']])
    cy.visit('/sessions')
    cy.get('.no-sessions').should('not.exist')
    cy.get('.session').should('be.visible')
    cy.get(':nth-child(1) > .card > .card-body > .btn').should('have.attr', 'href').and('match', /\/sessions\/[1-9]+/)
  })
})