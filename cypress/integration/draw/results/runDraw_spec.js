const { addValue, draw } = require('../_utils')

describe('Run draw', () => {
  it('should pick a value', () => {
    cy.visit('/')
    addValue('value 1')
    addValue('value 2')
    addValue('value 3')
    draw()

    cy.get('[data-cy=ResultPhrase]').should('exist')
    cy.get('[data-cy=ResultPhrase]').should('not.be.visible')
    cy.get('[data-cy=ResultPhrase]').should('be.visible')

    cy.get('[data-cy=ResultPhrase_value]')
      .contains('b', /value 1|value 2|value 3/)
      .should('exist')

    cy.get('[data-cy=Value][data-cy-selected=Y]')
      .invoke('text')
      .then(text => {
        cy.get('[data-cy=ResultPhrase_value]')
          .contains('b', text)
          .should('exist')
      })
  })
  it('should scroll to selected value', () => {
    cy.viewport(1366, 768)
    cy.visit(
      'http://localhost:3000/r#eyJ2IjpbImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYm9uam91ciIsImJvbmpvdXIiLCJib25qb3VyIiwiYWFhYWFhYWFhYSIsImFhYWFhYWFhYWEiLCJhYWFhYWFhYWFhIiwiYWFhYWFhYWFhYSIsImFhYWFhYWFhYWEiLCJhYWFhYWFhYWFhIiwiYWFhYWFhYWFhYSIsImFhYWFhYWFhYWEiLCJhYWFhYWFhYWFhIiwiYWFhYWFhYWFhYSIsImFhYWFhYWFhYWEiLCJhYWFhYWFhYWFhIiwiYWFhYWFhYWFhYSIsImFhYWFhYWFhYWEiLCJzZWxlY3RlZCJdLCJpIjoxMzB9-v3',
    )
    cy.get('[data-cy=ResultPhrase_value]', { timeout: 10000 }).should('be.visible')
    cy.window().then($window => {
      expect($window.scrollY).to.be.closeTo(938, 100)
    })
  })
  it('should scroll to selected value', () => {
    cy.viewport(1366, 768)
    cy.visit(
      'http://localhost:3000/r#eyJ2IjpbImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSIsImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYSJdLCJpIjoxNH0=-v3',
    )
    cy.get('[data-cy=ResultPhrase_value]', { timeout: 10000 }).should('be.visible')
    cy.window().then($window => {
      expect($window.scrollY).to.equal(0)
    })
  })
})
