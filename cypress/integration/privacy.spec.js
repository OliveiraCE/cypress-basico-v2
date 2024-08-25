it.only('Testa a página de politica de privacidade de forma independente', () => {
  cy.visit('./src/privacy.html')
  cy.contains('Talking About Testing').should('be.visible')
})
