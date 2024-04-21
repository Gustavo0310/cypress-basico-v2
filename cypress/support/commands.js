Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Lacerda')
    cy.get('#email').type('Gustavolacerda@cypress.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})