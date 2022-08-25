describe('mashin.al', () => {
  it('should open page mahinal shops in macbook', () => {
    cy.viewport('macbook-13')
    cy.visit('https://dev.mashin.al/')
    cy.wait(3000)
    cy.get('.m-auto').contains('Daxil ol').click('center')
    cy.get('.text-input').type('555501571')
    cy.get('.btn--green').contains('Daxil ol').click()
    cy.get('.confirm-sms-code').get('.text-input').type('12345')
    cy.get('.btn--green').contains('Təsdiqlə').click()


      
    
    //cy.get('.menu').contains('Salonlar').click('center') 
  })


})