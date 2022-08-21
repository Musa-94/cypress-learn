describe('mashin.al', () => {
  it('should open page mahinal shops in macbook', () => {
    cy.viewport('macbook-13')
    cy.visit('https://mashin.al/')
    cy.get('.menu').contains('Salonlar').click('center') 
  })

  it('should open page mahinal shops in iphone', () => {
    cy.viewport('iphone-x')
    cy.visit('https://mashin.al/')
    cy.get('.icon-burger').click('center') 
    cy.contains('Salonlar').click('center') 
  })
})