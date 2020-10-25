const { addValue, draw } = require('../_utils')

describe('Restart draw', () => {
  it('should restart a new draw with the same values', () => {
    cy.visit('/')
    addValue('value 1')
    addValue('value 2')
    addValue('value 3')
    draw()

    cy.get('[data-cy=ResultPhrase]').should('not.be.visible')
    cy.get('[data-cy=ResultPhrase]').should('be.visible')

    cy.get('[data-cy=ActionButtons_restartButton]').click()

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
})
