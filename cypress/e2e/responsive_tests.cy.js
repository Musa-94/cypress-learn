describe('mashin.al', () => {
    it('should open page mahinal shops in iphone', () => {
        cy.wait(2000)
        cy.viewport('iphone-x')
        cy.visit('https://dev.mashin.al/')
        cy.get('.icon-burger').click('center') 
        cy.contains('Salonlar').click('center') 
      })
})