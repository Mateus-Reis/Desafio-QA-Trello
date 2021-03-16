const quadroPage = require("../elements/QuadroElements");
const url = Cypress.config("baseUrl")

class QuadroPage {
    criarQuadro(titulo) {
        //cy.get(quadroPage.spn_novoQuadro).click();
        cy.get('span').contains('Criar novo quadro').click();
        cy.get(quadroPage.ipt_tituloQuadro).type(titulo);
        //cy.get(quadroPage.btn_criarQuadro).click();
        cy.get('span').contains('Criar Quadro').click();

        cy.url().should('eq', 'https://trello.com/b/C1Tyx1RN/'+titulo)
    }

    removerQuadro(titulo) {
        cy.get('div[title=]'+titulo).click();
        cy.get(quadroPage.btn_mostrarMenu).click();
        cy.get(quadroPage.btn_mais).click();
        cy.get(quadroPage.fecharQuadro).click();
        cy.get(quadroPage.btn_fechar).click();

        cy.get(quadroPage.message).should('eq', titulo+'está fechado.');

        cy.get(quadroPage.excluir).click();
        cy.get(quadroPage.btn_excluir).click();

        cy.get(quadroPage.message).should('eq', 'Quadro não encontrado.');
    }
}

export default QuadroPage;