// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaApi', (userEmail = 'markoqa13@gmail.com', userPass = 'Marko123') => {
    cy.request({
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        method: 'POST',
        body: {
            email: userEmail,
            password: userPass
        }
    }).its('body').then((odgovor) => {
        expect(odgovor.access_token).to.be.a('string');
        expect(odgovor.token_type).eq('bearer');
        
        window.localStorage.setItem('token', odgovor.access_token)
    })

})

Cypress.Commands.add('registerUserViaApi', (firstName, lastName, email, pass, passConfirm, acceptTerms = true) => {
    cy.request({
        url: 'https://gallery-api.vivifyideas.com/api/auth/register',
        method: 'POST',
        body: {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": pass,
            "password_confirmation": passConfirm,
            "terms_and_conditions": acceptTerms
        }
    }).its('body').then((odgovor) => {

    })
})
