const el = require('./elements').ELEMENTS

class Profile {
    accessProfilePage(){
        cy.visit('https://github.com/AndreyJP')
    }

    validateProfileName(nome){
        cy.get(el.nameField).should('contain', nome)
    }
}

export default new Profile()