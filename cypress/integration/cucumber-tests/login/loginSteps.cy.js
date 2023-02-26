import { Given, When, Then } from 'cypress-cucumber-preprocessor'

Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', () => {
    // Fill username 
    cy.get('#user_login').type('username')
    // Fill password
    cy.get('#user_password').type('password')
    // Click on submit
    cy.get('input[name="submit"]').click()
  
})
Then('I should see homepage', ()=> {
    cy.visit('https://zero.webappsecurity.com/auth/accept-certs.html?user_token=d5cc9130-9e29-449d-aa23-409791842598')
})