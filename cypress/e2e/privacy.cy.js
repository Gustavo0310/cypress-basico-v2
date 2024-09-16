//SEÇÃO 8 AULA 35 - LIDANDO COM LINKS QUE ABRE EM OUTRA PAGINA NO NAVEGADOR

//EXERCICIO EXTRA 2 - DESAFIO
it('testa a página da política de privacidade de forma independente', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
   cy.visit('./src/privacy.html') //primeiro passo é visitar a URL "Privacy".

   cy.contains('Talking About Testing').should('be.visible') //segundo passo usei o "cy.contains('Talking About Testing').should('be.visible')" para verificar que contem um elemento que tem um texto, e que esse elemento está visível. 
})

