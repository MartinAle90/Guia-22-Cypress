describe('Practica Login', () => {
  beforeEach(() => {
    // Visita la página directamente sin verificar el origen
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('Login y verificar', () => {
    // Login
    cy.get('#username').should('be.visible').type('student');
    cy.get('#password').should('be.visible').type('Password123');
    cy.get('#submit.btn').click();

    // Verificar que el login fue exitoso
    cy.get('.post-title').should('contain.text', 'Logged In Successfully');

  });

  // Otras pruebas...
});
