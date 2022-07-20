const { addValue } = require('../_utils')

describe('Import values', () => {
  it('should import values entered in import textarea', () => {
    const value1 = 'value1'
    const value2 = 'value2'
    const value3 = 'value3'

    cy.visit('/import')

    cy.get('[data-cy="ImportValues_importTextInput"').type(`${value1}   {enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`   ${value2}{enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`        {enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`   ${value3}   {enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`{enter}`)

    cy.get('[data-cy="ImportValues_submit"').click()

    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value2)
    cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value3)

    cy.get(`[data-cy=SubmitValues]`).should('not.be.disabled')
  })
  it('should prefill import with entered values', () => {
    const value1 = 'value1'
    const value2 = 'value2'
    const value3 = 'value3'

    cy.visit('/')

    addValue(value1)
    addValue(value2)
    addValue(value3)

    cy.get('[data-cy="BulkAddLink"').click()

    cy.get('[data-cy="ImportValues_importTextInput"')
      .invoke('val')
      .then(value => {
        expect(value).to.equal('value1\nvalue2\nvalue3')
      })
  })
  it('should go back to homepage when clicking "cancel"', () => {
    const value1 = 'value1'
    const value2 = 'value2'
    const value3 = 'value3'

    cy.visit('/')

    addValue(value1)
    addValue(value2)
    addValue(value3)

    cy.get('[data-cy="BulkAddLink"').click()

    cy.get('[data-cy="ImportValues_cancel"').click()

    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value2)
    cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value3)
  })
  it('should not edit values after clicking cancel even if we changed import input', () => {
    const value1 = 'value1'
    const value2 = 'value2'
    const value3 = 'value3'

    cy.visit('/')

    addValue(value1)
    addValue(value2)
    addValue(value3)

    cy.get('[data-cy="BulkAddLink"').click()

    cy.get('[data-cy="ImportValues_importTextInput"').type(`${value1}   {enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`   ${value2}{enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`        {enter}`)
    cy.get('[data-cy="ImportValues_importTextInput"').type(`   ${value3}   {enter}`)

    cy.get('[data-cy="ImportValues_cancel"').click()

    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.get(`[data-cy=Value]:nth-of-type(1)`).should('contain', value1)
    cy.get(`[data-cy=Value]:nth-of-type(2)`).should('contain', value2)
    cy.get(`[data-cy=Value]:nth-of-type(3)`).should('contain', value3)
  })
})
