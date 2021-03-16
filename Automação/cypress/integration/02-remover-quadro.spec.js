import QuadroPage from '../support/class/QuadroPage'
const quadroPage = new QuadroPage

describe ("Remover Quadro", () => {

    it ("Criar Quadro", () => {
        cy.login('mateus.ficagna@hotmail.com', 'Before*123');
        quadroPage.criarQuadro('Quadro Before');
    })

    it ("Remover Quadro", () => {
        quadroPage.removerQuadro('Quadro Before');
    })
})