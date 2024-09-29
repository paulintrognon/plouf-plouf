const { addValue, draw, removeValue } = require('../_utils')

describe('Restart draw', () => {
  it('should remove value, then reinsert it', () => {
    // Initialization
    cy.visit(
      'http://localhost:3000/r#eyJ2IjpbInZhbCAxIiwidmFsIDIiLCJ2YWwgMyIsInZhbCA0Il0sImkiOjF9-v3',
    )
    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).should('exist')
    cy.get(`[data-cy=Value]`).should('have.length', 4)
    cy.contains('val 2').should('exist')
    // Test actions
    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).click()
    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.contains('val 2').should('not.exist')
    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).should('exist')

    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).click()
    cy.get(`[data-cy=Value]`).should('have.length', 2)
    cy.get(`[data-cy=ActionButtons_reinsertButton]`).should('exist')
    cy.get('[data-cy=ActionButtons_reinsertButton]').should('be.visible')
    cy.get(`[data-cy=Value]`).invoke('text')
      .then(valuesLeft => {
        cy.get('[data-cy=Value][data-cy-selected=Y]')
        .invoke('text')
        .then(drawn => {
          cy.get('[data-cy=ActionButtons_reinsertButton]').click()
          
          // Final state
          cy.get(`[data-cy=Value]`).should('have.length', 4)
          cy.get('[data-cy=ActionButtons_reinsertButton]').should('not.exist')
          cy.get('[data-cy=ResultPhrase_value]')
            .contains('b', valuesLeft[0], valuesLeft[1], /value 2/, drawn)
            .should('exist')
        })
      })
  })
})
