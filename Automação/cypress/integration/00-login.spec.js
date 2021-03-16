//const { LoginPage } = require("../support/class/LoginPage");
import LoginPage from '../support/class/LoginPage'
const loginPage = new LoginPage

describe ("Realizar Login no Trello", () => {
    it("Login", () => {
        loginPage.realizarLogin('mateus.ficagna@hotmail.com', 'Before*123');
    })
})