import QuadroPage from '../support/class/QuadroPage'
const quadroPage = new QuadroPage

describe ("Criar Quadro", () => {

    it ("Criar Quadro", () => {
        cy.login('mateus.ficagna@hotmail.com', 'Before*123');
        quadroPage.criarQuadro('Quadro Before');
    })
})