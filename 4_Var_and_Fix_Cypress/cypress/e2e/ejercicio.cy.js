describe('template spec', () => {
    beforeEach('passes', () => {
        cy.visit('https://uitestingplayground.com/sampleapp');
        cy.fixture('sampleApp.json').as("aliasExample");
    });

    it.only('Test 01', () => {
        // Acceder al alias para obtener la información del fixture
        cy.get('@aliasExample').then(fixtureData => {
            // Iterar sobre los usuarios y agregarlos uno por uno
            fixtureData.usuarios.forEach(persona => {
                cy.get('[name=UserName]').type(persona.usuario + "{enter}")
                cy.get('[name="Password"]').type(persona.password + "{enter}");
                cy.get('.btn.btn-primary').click();
                cy.get('#loginstatus').should('contain.text', 'Welcome, ' + persona.usuario + '!');
                cy.reload();
                //cy.get('.btn.btn-primary').click();
            });
        });
    });
});