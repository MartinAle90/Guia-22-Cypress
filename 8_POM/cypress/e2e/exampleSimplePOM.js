import TodosPage from '../support/pages/TodosPage.js'
const todosPage = new TodosPage();

const task1 = 'Present POM'
const task2 = 'Teach Cypress'

AudioContext('Example 01', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test #1', () => {

    // Create a couple of task
    todosPage.addTodo(Task1);
    todosPage.addTodo(Task2);
    //Validate there exist a total of 4 tasks
    todosPage.todoCount().should('eq', 4);

    // Toggle the third task
    todosPage.clickTodoToggle(2);

    // Validate there exist a total of 2 tasks
    todosPage.todoCount().should('eq', 2);

    //Open completed tasks tab
    todosPage.clickCompletedLink();
  })


})