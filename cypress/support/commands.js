//ADICIONANDO UM COMANDO 'fillMandatoryFieldsAndSubmit'

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() { //o primeiro argumento "Cypress.Commands.add" é o nome do comando customizado, e segundo argumento é a função de callback
    cy.get('#firstName').type('Gustavo') //primeiro passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o primeiro nome "Gustavo".
    cy.get('#lastName').type('Lacerda') //segundo passo eu busquei o "cy.get('#lastName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o sobrenome "Lacerda".
    cy.get('#email').type('Gustavolacerda@cypress.com') //terceiro passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o email "Gustavolacerda@cypress.com".
    cy.get('#open-text-area').type('Teste') //quarto passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o "Teste".
    cy.contains('button', 'Enviar').click() //quinto passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

})