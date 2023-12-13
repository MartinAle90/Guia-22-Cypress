
describe("template spec", () => {
    before(() => {
        Cypress.config("defaultCommandTimeout", 30000); // Set a default timeout of 10 seconds
    });

    it("logs in", () => {
        cy.visit("https://uitestingplayground.com/sampleapp");

        cy.fixture("users").then((users) => {
            Object.values(users).forEach((user) => {
                cy.get('input[name="UserName"]').type(user.username); // username
                cy.get('input[name="Password"]').type(user.password); // password
                cy.get("#login").click(); // login
                // cy.get("#loginstatus")
                // 	.invoke("text")
                // 	.should("be.oneOf", [
                // 		`Welcome, ${user.username}!`,
                // 		"Invalid username/password",
                // 	]); // check login status

                cy.get("#loginstatus").then(($el) => {
                    if ($el.text() === `Welcome, ${user.username}!`) {
                        console.log(
                            "logged in with '" + user.username + "' '" + user.password + "'"
                        );
                        cy.get("#login").click(); // logout
                    } else if ($el.text() === "Invalid username/password") {
                        console.log("invalid username/password");
                        cy.get("#login").click(); // logout
                    }
                });
                cy.get("#login").click(); // logout
            });
        });
    });

    it("Ajax data loading", () => {
        cy.intercept("GET", "/ajaxdata").as("ajaxdata");
        cy.visit("https://uitestingplayground.com/ajax");

        cy.get("#ajaxButton").click();

        // caso 1
        // cy.wait('@ajaxdata', {"timeout":"responseTimeout"}).its('response.statusCode').should('eq', 200);
        // caso 2
        // cy.wait(30000);
        // caso 3
        // Cypress.config("defaultCommandTimeout", 30000); // Set a default timeout of 30 seconds, esto se cambia en e2e.js o en before.
        cy.get(".bg-success").should("be.visible"); // Wait for 10 seconds
        cy.get("#spinner").should("not.be.visible");
    });

    it.only("form", () => {
        cy.visit("https://qavalidation.com/demo-form/");
        cy.get(":nth-child(3) > .radio").click();
        cy.get(":nth-child(3) > .radio").should("be.checked");
        cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();
    });
});