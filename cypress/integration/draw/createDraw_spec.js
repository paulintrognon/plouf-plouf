const { addValue, removeValue } = require('./_utils')

describe('Create draw', () => {
  it('should add values to the draw', () => {
    cy.visit('/')

    cy.get(`[data-cy=Value]`).should('have.length', 0)

    /**
     * We add one value
     * It should appear
     */
    const value1 = 'Paulingo'
    addValue(value1)
    cy.get(`[data-cy=Value]`).should('have.length', 1)
    cy.get(`[data-cy=Value]:first`).should('contain', value1)

    /**
     * We add another value
     * There should be two values now
     */
    const value2 = 'Margotogo'
    addValue(value2)
    cy.get(`[data-cy=Value]`).should('have.length', 2)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value2)

    /**
     * We add a third value with some weird characters
     * There should be 3 values now
     */
    const value3 = '🇫🇷 :!,çéâ°uÈ^\'"-*/'
    addValue(value3)
    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value3)
  })

  it('should add values by pressing [enter]', () => {
    cy.visit('/')

    cy.get(`[data-cy=Value]`).should('have.length', 0)

    const value1 = 'Paulingo'
    cy.get(`[data-cy=AddValueForm_textInput]`).type(`${value1}{enter}`)

    cy.get(`[data-cy=Value]`).should('have.length', 1)
    cy.get(`[data-cy=Value]:first`).should('contain', value1)
  })

  it('should remove values by clicking on the red cross', () => {
    cy.visit('/')

    cy.get(`[data-cy=Value]`).should('have.length', 0)

    /**
     * We add 3 values
     */
    const value1 = 'value 1'
    addValue(value1)
    const value2 = 'value 2'
    addValue(value2)
    const value3 = 'value 3'
    addValue(value3)
    cy.get(`[data-cy=Value]`).should('have.length', 3)

    /**
     * We remove the 2nd value
     * There should be only the first & third value left
     */
    removeValue(2)
    cy.get(`[data-cy=Value]`).should('have.length', 2)
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value3)

    /**
     * We remove the 1st value
     * There should be only the third value left
     */
    removeValue(1)
    cy.get(`[data-cy=Value]`).should('have.length', 1)
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value3)

    /**
     * We remove the remaning value
     * There should be no value left
     */
    removeValue(1)
    cy.get(`[data-cy=Value]`).should('have.length', 0)
  })

  it('should prevent the user from drawing if less than 3 values', () => {
    cy.visit('/')
    cy.get(`[data-cy=SubmitValues]`).should('be.disabled')
    addValue('1')
    cy.get(`[data-cy=SubmitValues]`).should('be.disabled')
    addValue('2')
    cy.get(`[data-cy=SubmitValues]`).should('not.be.disabled')
    removeValue(2)
    cy.get(`[data-cy=SubmitValues]`).should('be.disabled')
  })
})
