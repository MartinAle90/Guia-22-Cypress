describe('Practica Login', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/'),
        cy.visit('https://practicetestautomation.com/practice-test-login/')

    })



    it('Ingresar al login', () => {
        cy.origin('https://practicetestautomation.com', () => {
            // Wait for the element to be visible
            cy.get('#username').should('be.visible').type('student'),
                cy.get('#password').should('be.visible').type('Password123{Enter}'), // Replace password with the actual password you want to type
                cy.get('#submit.btn').click()
            // If there is a submit button, you might want to interact with it
            // cy.get('#submit-button').click()  // Replace #submit-button with the actual ID or selector
        })

    })

})