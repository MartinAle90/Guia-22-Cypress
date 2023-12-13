describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('/todo')
    cy.fixture('todos.json').as("aliasExample"); //si necesitamos que la info de fixture sea utilizada en mas de un tc
    //1°() nombre del archivo y su locacion
    //2° .as() el alias que deseamos usar
  });

  it('Test 01', () => {
    cy.get('.new-todo').type("Something...{enter}");
    cy.get('.todo-list li').as('items');

    cy.get('@items').should('have.length', 3);
    cy.get('.todo-list li').should('have.length', 3);
  });

  it('Test 02', () => {
    //cy.fixture('todos.json').as("todos"); //trae desde fixture toda la infomacion
    cy.get('@aliasExample').then(todos => {
      todos.todos.forEach(todo => {
        cy.get('.new-todo').type(todo + "{enter}")
      });
    });
  });

})       