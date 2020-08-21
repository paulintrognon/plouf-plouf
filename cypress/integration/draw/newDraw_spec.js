const { addValue, draw } = require('./_utils')

describe('Reset draw', () => {
  it('should go back to empty createDraw screen', () => {
    cy.visit('/')
    addValue('value 1')
    addValue('value 2')
    addValue('value 3')
    draw()

    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=AddValueForm_textInput]`).should('not.exist')

    cy.get('[data-cy=ActionButtons_resetButton]').click()

    cy.get(`[data-cy=Value]`).should('have.length', 0)
    cy.get(`[data-cy=AddValueForm_textInput]`).should('exist')
    cy.get(`[data-cy=SubmitValues]`).should('be.disabled')
  })
})
