const { addValue, removeValue, draw } = require('./_utils')

describe('Modify draw', () => {
  it('should go back to empty createDraw screen', () => {
    cy.visit('/')
    const value1 = 'value 1'
    addValue(value1)
    const value2 = 'value 2'
    addValue(value2)
    const value3 = 'value 3'
    addValue(value3)
    draw()

    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=AddValueForm_textInput]`).should('not.exist')

    cy.get('[data-cy=ActionButtons_modifyButton]').click()

    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=AddValueForm_textInput]`).should('exist')
    cy.get(`[data-cy=SubmitValues]`).should('be.not.disabled')
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value2)
    cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value3)

    const value4 = 'value 4'
    addValue(value4)
    cy.get(`[data-cy=Value]`).should('have.length', 4)
    cy.get(`[data-cy=Value]:nth-of-type(4)`).should('contain', value4)
    removeValue(2)
    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value3)
    cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value4)
    removeValue(1)
    draw()
    cy.get(`[data-cy=Value]`).should('have.length', 2)
    cy.get(`[data-cy=AddValueForm_textInput]`).should('not.exist')
  })
})
