describe('Forgot password', () => {

    it('I open login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('.offset3 > a').click()
        cy.get('h3')&&cy.get('.btn').should('contain', 'Password')
        //cy.get('.btn').should('contain', 'Password')
    })
    })