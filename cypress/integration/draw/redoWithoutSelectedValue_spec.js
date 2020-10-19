describe('Redo without selected value', () => {
  it('should redo after having removed the selected value', () => {
    cy.visit(
      'http://localhost:3000/r#eyJ2IjpbInZhbCAxIiwidmFsIDIiLCJ2YWwgMyIsInZhbCA0Il0sImkiOjF9-v3',
    )
    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).should('exist')
    cy.get(`[data-cy=Value]`).should('have.length', 4)
    cy.contains('val 2').should('exist')

    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).click()
    cy.get(`[data-cy=Value]`).should('have.length', 3)
    cy.contains('val 2').should('not.exist')
    cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).should('exist')

    cy.get('[data-cy=Value][data-cy-selected=Y]')
      .invoke('text')
      .then(drawnValue => {
        cy.contains(drawnValue).should('exist')
        cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).click()
        cy.get(`[data-cy=Value]`).should('have.length', 2)
        cy.contains(drawnValue).should('not.exist')
        cy.get('[data-cy=ResultPhrase_value]', { timeout: 10000 }).should('be.visible')
        cy.get(`[data-cy=ActionButtons_restartWithoutSelectedValueButton]`).should('not.exist')
      })
  })
})
