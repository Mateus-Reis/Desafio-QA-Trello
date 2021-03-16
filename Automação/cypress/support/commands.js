const loginPage = require("../support/elements/LoginElements");

Cypress.Commands.add("login", (email, senha) => { 
    cy.visit(Cypress.config("baseUrl"));

    cy.get(loginPage.ipt_email).type(email);
    cy.get(loginPage.btn_login).click();

    cy.get(loginPage.ipt_senha).type(senha);
    cy.get(loginPage.btn_login).click();

    //cy.visit('https://start.atlassian.com/')
    cy.get(loginPage.trello).click();

    cy.url().should('eq*', 'trello.com')
 })