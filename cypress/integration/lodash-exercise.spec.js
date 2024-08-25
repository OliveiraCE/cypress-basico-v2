Cypress._.times(5, () => {
  const TIME_FOWARD = 3000
  it('Envia o formulário com sucesso usando um comando customizado.', () => {
    cy.visit('./src/index.html')
    cy.clock()
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success > strong').should('be.visible')
    cy.tick(TIME_FOWARD)
    cy.get('.success > strong').should('be.not.visible')
  })
})
