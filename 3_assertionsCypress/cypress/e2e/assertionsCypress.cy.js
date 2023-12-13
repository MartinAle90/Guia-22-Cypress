describe('Practica Login', () => {

    beforeEach(() => {
        cy.visit('https://qavalidation.com/demo-form/ ');
    });

    it('#1 - formulario completo', () => {
        cy.get('#g4072-fullname').type('example');
        cy.get('#g4072-email').type('example@gmail.com');
        cy.get('#g4072-phonenumber').type('1234567890');
        //primer selector
        cy.get('#g4072-gender-button > .ui-selectmenu-icon').click()
        cy.get('#ui-id-3').click()
        //años de experiencia
        cy.get('[type="radio"]').check('1');
        //checkbox skill
        cy.get('[type="checkbox"]').check('Functional testing');
        //segundo selector
        cy.get('#g4072-qatools-button > .ui-selectmenu-icon').click()
        cy.get('#ui-id-4').click()
        //descripcion
        cy.get('#contact-form-comment-g4072-otherdetails').type('descripcion de ejemplo');
        //boton submit
        cy.get('.wp-block-button__link').contains('Submit!').click();

    });

    it('#2 - campos requeridos', () => {
        cy.get('#g4072-fullname').type('example');
        cy.get('#g4072-email').type('example@gmail.com');

        cy.get('.wp-block-button__link').contains('Submit!').click();

        cy.get('#contact-form-success-header').should('have.text', 'Your message has been sent');

    });

    it('#3 - 1 solo campos requeridos', () => {
        cy.get('#g4072-fullname').type('example');

        cy.get('.wp-block-button__link').contains('Submit!').click();
        //compara si el elemento no existe
        cy.get('#contact-form-success-header').should('not.exist')
        //si el elemento no existe, el formulario no se pudo enviar

    });

    it.only('#4 - verificar dato tipo email', () => {
        cy.get('#g4072-fullname').type('example');
        cy.get('#g4072-email').type('example@gmail.com.ar')


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //  // Selecciona el campo de correo electrónico y obtén su valor
        //  cy.get('#g4072-email').invoke('val').then((email) => {
        //    // Verifica que el valor del campo coincida con la expresión regular
        //    expect(email).to.match(emailRegex);


        cy.get('#g4072-email').invoke('val').should('match', emailRegex);


        // cy.get('.wp-block-button__link').contains('Submit!').click();
        // //compara si el elemento no existe
        // cy.get('#contact-form-success-header').should('not.exist')
        // //si el elemento no existe, el formulario no se pudo enviar

    });



});