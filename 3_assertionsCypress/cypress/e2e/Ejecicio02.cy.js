describe('Practica Login', () => {

  beforeEach(() => {
    // Visita la página directamente sin verificar el origen
    cy.visit('https://qavalidation.com/demo-form/');
  });

  it('Ingresar al login', () => {
    // Wait for the element to be visible
    cy.get('#username').should('be.visible').type('student');
    cy.get('#password').should('be.visible').type('Password123');
    // Si hay un botón de envío, es posible que desees interactuar con él
    // cy.get('#submit-button').click()  // Reemplaza #submit-button con el ID o selector real
    cy.get('#submit.btn').click()

    // Verifica que el elemento con la clase 'post-title' contenga el texto 'Logged In Successfully'
    cy.get('.post-title').should('contain.text', 'Logged In Successfully');
  });

});
