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
})

