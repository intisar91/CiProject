describe('Login to Application', () => {

  it('I should be connected to homepage',() => {

    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.get('.btn').click()
    cy.visit('http://zero.webappsecurity.com/bank/account-summary.html')
    cy.get('.top_offset > :nth-child(2) > .span12').should('contain','Accounts')
    
  })

})