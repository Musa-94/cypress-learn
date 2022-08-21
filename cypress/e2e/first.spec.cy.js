describe('mashin.al', () => {
  it('should open page mahinal shops', () => {
    cy.viewport('macbook-13')
    cy.visit('https://mashin.al/')
    cy.get('.menu').contains('Mağazalar').click('center') 
  })
})