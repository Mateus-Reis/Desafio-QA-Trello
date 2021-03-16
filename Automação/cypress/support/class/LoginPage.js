const loginPage = require("../elements/LoginElements");
const url = Cypress.config("baseUrl")

class LoginPage {
    realizarLogin(email, senha) {
        cy.visit(url);

        cy.get(loginPage.ipt_email).type(email);
        cy.get(loginPage.btn_login).click();

        cy.get(loginPage.ipt_senha).type(senha);
        cy.get(loginPage.btn_login).click();

        //cy.visit('https://start.atlassian.com/')
        cy.get(loginPage.trello).click();

        cy.url().should('eq*', 'trello.com')
    }
}

export default LoginPage;