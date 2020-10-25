const { addValue, draw } = require('../_utils')

describe('Share draw', () => {
  it('should repeat the same draw from the share URL', () => {
    cy.visit('/')
    const value1 = 'value 1'
    addValue(value1)
    const value2 = 'value 2'
    addValue(value2)
    const value3 = 'value 3'
    addValue(value3)
    draw()

    cy.get('[data-cy=Value][data-cy-selected=Y]')
      .invoke('text')
      .then(drawnValue => {
        cy.get('[data-cy=ActionButtons_shareInput]')
          .invoke('val')
          .then(value => {
            const path = value.slice(23)
            cy.visit('/')
            cy.visit(path)

            cy.get('[data-cy=ResultPhrase]').should('exist')
            cy.get('[data-cy=ResultPhrase]').should('not.be.visible')
            cy.get('[data-cy=ResultPhrase]').should('be.visible')

            cy.get(`[data-cy=Value]`).should('have.length', 3)
            cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
            cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value2)
            cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value3)

            cy.get('[data-cy=ResultPhrase_value]')
              .contains('b', drawnValue)
              .should('exist')
          })
      })
  })
})
