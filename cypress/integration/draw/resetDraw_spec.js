const { addValue, removeValue } = require('./_utils')

describe('Reset draw', () => {
  it('should remove all values on click on resetButton', () => {
    cy.visit('/')
    addValue('value 1')
    addValue('value 2')
    addValue('value 3')

    cy.get(`[data-cy=Value]`).should('have.length', 3)

    cy.get(`[data-cy=ListValues_resetButton]`).click()

    cy.get(`[data-cy=Value]`).should('have.length', 0)
  })
  it('resetButton should be visible only if values are entered', () => {
    cy.visit('/')

    cy.get('[data-cy=ListValues_resetButton]').should('not.exist')

    addValue('value 1')

    cy.get('[data-cy=ListValues_resetButton]').should('exist')

    removeValue(1)

    cy.get('[data-cy=ListValues_resetButton]').should('not.exist')

    addValue('value 2')
    addValue('value 3')

    cy.get('[data-cy=ListValues_resetButton]').should('exist')

    cy.get(`[data-cy=ListValues_resetButton]`).click()

    cy.get('[data-cy=ListValues_resetButton]').should('not.exist')
  })
})
