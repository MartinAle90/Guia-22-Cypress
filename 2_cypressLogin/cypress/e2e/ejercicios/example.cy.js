context('practica 01', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    })

    it('Test #1', () => {
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.contains('Completed').click();
        cy.contains('Active').click();
    });

    it('Test #2: Select using CSS selectors', () => {
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get(':nth-child(2)>.view>.toggle').click();
        cy.contains('Completed').click();

    });

    it('Test #3: Select using Text Content', () => {
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get('label:contains("My long task #1")')
        .parent().find('.toggle')
        .click();
        cy.contains('Completed').click();

    });

})