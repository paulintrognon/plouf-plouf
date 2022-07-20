module.exports = {
  addValue,
  removeValue,
  draw,
}

function addValue(value) {
  cy.get(`[data-cy=AddValueForm_textInput]`).type(value)
  cy.get(`[data-cy=AddValueForm_addInput]`).click()
}

function removeValue(n) {
  cy.get(`[data-cy=Value]:nth-of-type(${n}) [data-cy=Value_remove]`).click()
}

function draw() {
  cy.get(`[data-cy=SubmitValues]`).click()
}
