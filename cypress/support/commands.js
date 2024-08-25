Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName').type('Igor')
  cy.get('#lastName').type('Oliveira')
  cy.get('#email').type('email@email.com')
  cy.get('#open-text-area').type('Teste')
  cy.get('button[type="submit"]').click()
})
