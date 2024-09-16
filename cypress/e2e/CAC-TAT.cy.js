   /// <reference types="Cypress" /> 

   //PRIMEIRO TESTE AUTOMATIZADO COM CYPRESS

   //EXERCICIO Pré requisito - ACESSANDO A URL
describe('Central de Atendimento ao Cliente TAT', function() { //o texto do "describe" é a descrição da suite de testes. E o "function" é a função de callback.
  beforeEach(function() { //o "beforEach" recebe uma função de callback e tambem ele serve para antes de qualquer teste executar a URL do cy.visit
        cy.visit('./src/index.html')//visitando URL "index.html"

  })
    
    it('verifica o título da aplicação', function() { //it é o nome do test case, e o "function" é a função de callback.
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') //função "cy.title" usei para buscar o titulo da aplicação, e engadeou ".should" para verificar que o titulo ta correto utilizando o "be.equal".
    })

    //SEÇÃO 3 AULA 09 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS 

    //EXERCICIO
    it('preenche os campos obrigatórios e envia o formulário', function() { //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        
        cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador

        cy.get('#firstName').type('Gustavo') //segundo passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o primeiro nome "Gustavo".
        cy.get('#lastName').type('Lacerda') //terceiro passo eu busquei o "cy.get('#lastName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o sobrenome "Lacerda".
        cy.get('#email').type('Gustavolacerda@cypress.com') //quarto passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o email "Gustavolacerda@cypress.com".
        cy.get('#open-text-area').type('Teste') //quinto passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o "Teste".
        cy.contains('button', 'Enviar').click() //sexto passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

        cy.get('.success').should('be.visible') //setimo  passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de sucesso está visível na tela.

        cy.tick(3000) //oitavo passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

        cy.get('.success').should('not.be.visible') //nono passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.
  
    })
  
     
    //AULA 10 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS

    //EXERCICIO EXTRA 1
    it('prencher campos obrigatorios e adicionar um delay quando inserir um texto longo', function() { //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      const textoLongo = 'A poluição plástica é um dos principais problemas ambientais da atualidade, com efeitos devastadores nos ecossistemas marinhos e na vida selvagem. Este artigo apresenta uma revisão abrangente dos estudos científicos sobre o impacto da poluição plástica nos oceanos, destacando suas consequências para a sociedade e a humanidade.' //aqui eu criei uma variavel do tipo "const" chamada de "textoLongo". E logo em seguida inserir o texto longo.
      
      cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador

      cy.get('#firstName').type('Gustavo') //segundo passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o primeiro nome "Gustavo".
      cy.get('#lastName').type('Lacerda') //terceiro passo eu busquei o "cy.get('#lastName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o sobrenome "Lacerda".
      cy.get('#email').type('Gustavolacerda@cypress.com') //quarto passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o email "Gustavolacerda@cypress.com".
      cy.get('#open-text-area').type(textoLongo, { delay: 0 }) //quinto passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo. No ".type('')" como primeiro argumento chamei a variavel "textoLongo" para digitar o texto. E o segundo argumento digitei o objeto de "Options" com a propriedade delay com valor zero "{ delay: 0 }".
      cy.contains('button', 'Enviar').click() //sexto passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

      cy.get('.success').should('be.visible') //setimo passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de sucesso está visível na tela.

      cy.tick(3000) //oitavo passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

      cy.get('.success').should('not.be.visible') //nono passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.

  })

    //AULA 11 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS

    //EXERCICIO EXTRA 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){  //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback

        cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador
        
        cy.get('#firstName').type('Gustavo') //segundo passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o primeiro nome "Gustavo".
        cy.get('#lastName').type('Lacerda')  //terceiro passo eu busquei o "cy.get('#lastName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o sobrenome "Lacerda".
        cy.get('#email').type('Gustavolacerda@cypress,com') //quarto passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, aonde eu digitei um email invalido para verificar o teste.
        cy.get('#open-text-area').type('Teste') //quinto passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o "Teste".
        cy.contains('button', 'Enviar').click() //sexto passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

        cy.get('.error').should('be.visible') //setimo passo usei a classe ".error" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de erro está visível na tela.
        
        cy.tick(3000) //oitavo passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

        cy.get('.error').should('not.be.visible') //nono passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.
  
    })
  

    //AULA 12 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS

    //EXERCICIO EXTRA 3
    it('campo Telefone continua vazio quando preenchido com valor não-númerico', function(){  //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#phone') //primeiro passo eu busquei o "cy.get('#phone')" para pegar o elemento id do campo.
          .type('Teste') //segundo passo utilizei ".type('Teste')" para digitar um valor texto no campo numerico.
          .should('have.value', '') //terceiro passo com ".should" encadeei um "('have.value', '')" com uma string vazia pois o campo nao conseguiu digitar o numero de telefone porque coloquei um texto, ao invez do numero.
    })

    //AULA 13 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS

    //EXERCICIO EXTRA 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){  //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback.

        cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador

        cy.get('#firstName').type('Gustavo') //segundo passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o primeiro nome "Gustavo".
        cy.get('#lastName').type('Lacerda') //terceiro passo eu busquei o "cy.get('#lastName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o sobrenome "Lacerda".
        cy.get('#email').type('Gustavolacerda@cypress.com') //quarto passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, aonde eu digitei um email invalido para verificar o teste.
        cy.get('#phone-checkbox').click() //quinto passo eu busquei o "cy.get('#phone-checkbox')" para pegar o elemento id do campo. E depois usei um ".click()" para clicar no elemento.
        cy.get('#open-text-area').type('Teste') //sexto passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o "Teste".
        cy.contains('button', 'Enviar').click() //setimo passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

        cy.get('.error').should('be.visible') //oitavo passo usei a classe ".error" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de erro está visível na tela.
        
        cy.tick(3000) //nono passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

        cy.get('.error').should('not.be.visible') //decimo passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.
  
    })

    //AULA 14 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS

    //EXERCICIO EXTRA 5
    it('preenche e limpa os campos nome, sobrenome, email, telefone e texto', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#firstName') //primeiro passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo.
          .type('Gustavo') //segundo passo utilizei ".type('Gustavo')" para digitar texto no campo.
          .should('have.value', 'Gustavo') //terceiro passo com o ".should" encadeei um "('have.value', 'Gustavo')" para verificação que o campo foi digitado corretamente.
          .clear() //quarto passo usei o ".clear()" para limpar o campo digitado.
          .should('have.value', '') //quinto passo com ".should" encadeei um "('have.value', '')" com um valor vazio.

        cy.get('#lastName') //primeiro passo eu busquei o "cy.get(#lastName')" para pegar o elemento id do campo.
          .type('Lacerda') //segundo passo utilizei ".type('Lacerda')" para digitar texto no campo.
          .should('have.value', 'Lacerda') //terceiro passo com o ".should" encadeei um "('have.value', 'Lacerda')" para verificação que o campo foi digitado corretamente.
          .clear() //quarto passo usei o ".clear()" para limpar o campo digitado.
          .should('have.value', '') //quinto passo com ".should" encadeei um "('have.value', '')" com um valor vazio.

        cy.get('#email') //primeiro passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo.
          .type('Gustavolacerda@cypress.com') //segundo passo utilizei ".type('Gustavolacerda@cypress.com')" para digitar texto no campo.
          .should('have.value', 'Gustavolacerda@cypress.com') //terceiro passo com o ".should" encadeei um "('have.value', 'Gustavolacerda@cypress.com')" para verificação que o campo foi digitado corretamente.
          .clear() //quarto passo usei o ".clear()" para limpar o campo digitado.
          .should('have.value', '') //quinto passo com ".should" encadeei um "('have.value', '')" com um valor vazio.

        cy.get('#phone') //primeiro passo eu busquei o "cy.get('#phone')" para pegar o elemento id do campo.
          .type('12345678') //segundo passo utilizei ".type('12345678')" para digitar texto no campo.
          .should('have.value', '12345678') //terceiro passo com o ".should" encadeei um "('have.value', '12345678')" para verificação que o campo foi digitado corretamente.
          .clear() //quarto passo usei o ".clear()" para limpar o campo digitado.
          .should('have.value', '') //quinto passo com ".should" encadeei um "('have.value', '')" com um valor vazio.
        
        cy.get('#open-text-area') //primeiro passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo.
          .type('teste') //segundo passo utilizei ".type('teste')" para digitar texto no campo.
          .should('have.value', 'teste') //terceiro passo com o ".should" encadeei um "('have.value', 'teste')" para verificação que o campo foi digitado corretamente.
          .clear() //quarto passo usei o ".clear()" para limpar o campo digitado.
          .should('have.value', '') //quinto passo com ".should" encadeei um "('have.value', '')" com um valor vazio.
    })

    //AULA 15 - DIGITANDO EM CAMPO E CLICANDO EM ELEMENTOS

    //EXERCICIO EXTRA 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){  //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback

      cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador
      
      cy.contains('button', 'Enviar').click() //segundo passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

      cy.get('.error').should('be.visible') //terceiro passo usei a classe ".error" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de erro está visível na tela.
      
      cy.tick(3000) //quarto passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

      cy.get('.error').should('not.be.visible') //quinto passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.

  })

    //AULA 16 - CRIANDO COMANDOS CUSTOMIZADOS

    //EXERCICIO EXTRA 7
    it('envia o formuário com sucesso usando um comando customizado', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback

       cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador

       cy.fillMandatoryFieldsAndSubmit() //segundo passo criar um comando na pasta de "Commands.js" e logo depois chamar o comando.

       cy.get('.success').should('be.visible') //terceiro passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de sucesso está visível na tela.
       
       cy.tick(3000) //quarto passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

       cy.get('.success').should('not.be.visible') //quinto passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.
  
    })

    //SEÇÃO 4 AULA 19 - SELECIONANDO OPÇOES DE CAMPOS DE SELEÇÃO SUSPENSA

    //EXERCICIO
    it('seleciona um produto (YouTube) por seu texto', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      cy.get('#product') //primeiro passo eu busquei o "cy.get('#product')" para pegar o elemento id do campo.
        .select('YouTube') //segundo passo utilizei ".select('YouTube')" aonde eu insiro o texto para ser selecionado.
        .should('have.value', 'youtube') //terceiro passo com ".should" encadeei um "('have.value', 'youtube')" para verificar que o valor foi selecionado corretamente.
    })

    //AULA 20 - SELECIONANDO OPÇOES DE CAMPOS DE SELEÇÃO SUSPENSA

    //EXERCICIO EXTRA 1
    it('seleciona um produto (Mentoria) por seu valor (value)', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#product') //primeiro passo eu busquei o "cy.get('#product')" para pegar o elemento id do campo.
          .select('mentoria') //segundo passo utilizei ".select('Mentoria')" aonde eu insiro o texto para ser selecionado.
          .should('have.value', 'mentoria') //terceiro passo com ".should" encadeei um "('have.value', 'mentoria')" para verificar que o valor foi selecionado corretamente.
    })

    //AULA 21 - SELECIONANDO OPÇOES DE CAMPOS DE SELEÇÃO SUSPENSA

    //EXERCICIO EXTRA 2
    it('seleciona um produto (Blog) por seu indice', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#product') //primeiro passo eu busquei o "cy.get('#product')" para pegar o elemento id do campo.
          .select(1) //segundo passo utilizei ".select('Blog')" aonde eu insiro o valor para ser selecionado.
          .should('have.value', 'blog') //terceiro passo com ".should" encadeei um "('have.value', 'blog')" para verificar que o valor foi selecionado corretamente.
    })

    it('seleciona um produto (Cursos) por seu indice', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#product') //primeiro passo eu busquei o "cy.get('#product')" para pegar o elemento id do campo.
          .select(2) //segundo passo utilizei ".select('Blog')" aonde eu insiro o texto para ser selecionado.
          .should('have.value', 'cursos') //terceiro passo com ".should" encadeei um "('have.value', 'blog')" para verificar que o valor foi selecionado corretamente.
    })

    //SEÇÃO 5 AULA 23 - MARCANDO INPUTS DO CAMPO "RADIO"

    //EXERCICIO
    it('marca o tipo de atendimento "Feedback"', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('input[type="radio"][value="feedback"]') //primeiro passo eu busquei o "cy.get(input[type="radio"][value="feedback"])" para pegar o input que tenha o "[type="radio"][value="feedback"]".
          .check() //Segundo passo utilizei o ".check()" para marcar a opção.
          .should('have.value', 'feedback') //terceiro passo com ".should" encadeei um "('have.value', 'feedback')" para verificar que o valor foi selecionado corretamente.
    })

    //AULA 24 - MARCANDO INPUTS DO CAMPO "RADIO"

    //EXERCICIO EXTRA
    it('marca cada tipo de atendimento', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('input[type="radio"]') //primeiro passo eu busquei o "cy.get(input[type="radio"])" para pegar o input que tenha o "[type="radio"]".
          .should('have.length', 3) //segundo passo com ".should" encadeei um "('have.length', '3')" para verificar que existe 3 opções.
          .each(function($radio){ //terceiro passo encadeei o ".each" para passar por cada um dos 3 elementos, e dentro do each ele recebe uma função de callback para pegar cada um dos "$Radio".
              cy.wrap($radio).check() //quarto passo usei o "cy.wrap" para marcar 1 a 1 dos 3 elementos, e o ".check" para marcar o elemento.
              cy.wrap($radio).should('be.checked') //quinto passo usei o "cy.wrap($radio).should('be.checked'" para verificar que deve ter sido marcado.
          })
    })

    //SEÇÃO 6 AULA 26 - MARCANDO E DESMARCANDO INPUTS DO TIPO CHECKBOX

    //EXERCICIO
    it('marca ambos checkboxes, depois desmarca o último', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('input[type="checkbox"]') //primeiro passo eu busquei o "cy.get(input[type="checkbox"])" para pegar o input que tenha o "[type="checkbox"]".
          .check() //segundo passo usei ".check()" para marcar os checkbox.
          .should('be.checked') //terceiro passo usei o ".should('be.checked')" para verificar que todos os checkbox foram marcados.
          .last() //quarto passo usei o ".last()" para quando tiver todos os checkbox selecionado, ele pegue so o ultimo para desmarcar.
          .uncheck() //quinto passo usei o ".uncheck" para desmarcar o checkbox.
          .should('not.be.checked') //sexto passo com o ".should('not.be.checked')" estou verificando que não está mais marcado o checkbox.
    })

    //AULA 27 - MARCANDO E DESMARCANDO INPUTS DO TIPO CHECKBOX

    //EXERCICIO EXTRA
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário, para garantir que em vez de um .click(), o comando .check() é utilizado para marcar o checkbox Telefone.', function(){  //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        
        cy.clock() //primeiro passo eu usei a função "cy.clock()" para congelar o relogio do navegador 

        cy.get('#firstName').type('Gustavo') //segundo passo eu busquei o "cy.get('#firstName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o primeiro nome "Gustavo".
        cy.get('#lastName').type('Lacerda') //terceiro passo eu busquei o "cy.get('#lastName')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o sobrenome "Lacerda".
        cy.get('#email').type('Gustavolacerda@cypress.com') //quarto passo eu busquei o "cy.get('#email')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, aonde eu digitei um email invalido para verificar o teste.
        cy.get('#phone-checkbox').check() //quinto passo eu busquei o "cy.get('#phone-checkbox')" para pegar o elemento id do campo. E depois usei um ".check()" para marcar o elemento.
        cy.get('#open-text-area').type('Teste') //sexto passo eu busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo. O ".type('')" é para escrever o texto do campo, neste caso o "Teste".
        cy.contains('button', 'Enviar').click() //setimo passo aqui busquei o id do botão de "Enviar" e o ".click()" é o comando para o cypress clicar nele.

        cy.get('.error').should('be.visible') //oitavo passo usei a classe ".error" para verificação do resultado esperado, e utilizei o ".should('be.visible')" para mostrar que a mensagem de erro está visível na tela.
        
        cy.tick(3000) //nono passo eu usei a função "cy.tick(3000)" para avançar 3 segundos no tempo depois que a mensagem de resultado esperado ja foi visualizado.

        cy.get('.error').should('not.be.visible') //decimo passo usei a classe ".success" para verificação do resultado esperado, e utilizei o ".should('not.be.visible')" para mostrar que a mensagem de sucesso não está visível mais.
  
    })


    //SEÇÃO 7 AULA 29 - FAZENDO UPLOAD DE ARQUIVOS COM CYPRESS

    //EXERCICIO 
    it('seleciona um arquivo da pasta fixtures', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('input[type="file"]') //primeiro passo fiz um "cy.get('input[type="file"]')" para pegar o input que tenha o "[type="file"]".
          .should('not.have.value') //segundo passo encadeei o ".should('not.have.value')" para verificar que nao tem nenhum valor marcado ainda.
          .selectFile('./cypress/fixtures/example.json') //terceiro passo utilizei a função "selectFile", que é a função que faz o upload de arquivos no cypress. E dentro da aspas estar o caminho que coloca do arquivo.
          .should(function($input){ //quarto passo encadeei o "should" que recebe uma função de callback. E a função de callback recebe o como argumento o "$input" que foi retornado pelo "cy.get('input[type="file"]')".
            expect($input[0].files[0].name).to.equal('example.json') //quinto passo com o "expect" faço a verificação de "input[0]", aonde o ".file[0]" que é um array vai pegar o primeiro item. E o ".name).to.equal('example.json')" vai retornar o nome do arquivo.
          })
          
    })

    //AULA 30 - FAZENDO UPLOAD DE ARQUIVOS COM CYPRESS

    //EXERCICIO EXTRA 1    
    it('seleciona um arquivo simulando um drag-and-drop', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('input[type="file"]') //primeiro passo fiz um "cy.get('input[type="file"]')" para pegar o input que tenha o "[type="file"]".
          .should('not.have.value') //segundo passo encadeei o ".should('not.have.value')" para verificar que nao tem nenhum valor ainda.
          .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop'}) //terceiro passo utilizei a função "selectFile", com o primeiro argumento sendo o caminho para selecionar o arquivo, e o segundo argumento será um objeto de options com a opção "action" e o valor "drag-drop" { action: 'drag-drop'} e com isso simula que está com a pasta do arquivo aberta e estar arrastando o arquivo até onde fica o botão de "Escolher arquivo".
          .should(function($input){ //quarto passo encadeei o "should" que está recebe uma função de callback. E a função de callback recebe o "$input" que foi retornado pelo "cy.get('input[type="file"]')".
            expect($input[0].files[0].name).to.equal('example.json') //quinto passo faço a verificação do "input[0]", aonde o ".file[0]" que é um array vai pegar o primeiro item. E o ".name).to.equal('example.json')" vai retornar o nome do arquivo.
      })

    })  

    //AULA 31 - FAZENDO UPLOAD DE ARQUIVOS COM CYPRESS

    //EXERCICIO EXTRA 2 
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.fixture('example.json').as('arquivoExample') //passo utilizei o comando "cy.fixture" para pegar uma fixture "example.json", e depois usei um alias ".as('arquivoExample')" para dar o nome do arquivo. 
        cy.get('input[type="file"]') //segundo passo fiz um "cy.get('input[type="file"]')" para pegar o input que tenha o "[type="file"]".
          .selectFile('@arquivoExample') //terceiro passo usei o "select.File" passar o "Alias" criado na "cy.fixture('example.json').as('arquivoExample')" acima. O @ na frente é para identificar que é um "Alias". 
          .should(function($input){ //quarto passo encadeei o "should" que está recebe uma função de callback. E a função de callback recebe o "$input" que foi retornado pelo "cy.get('input[type="file"]')".
            expect($input[0].files[0].name).to.equal('example.json') //quinto passo faço a verificação do "input[0]", aonde o ".file[0]" que é um array vai pegar o primeiro item. E o ".name).to.equal('example.json')" vai retornar o nome do arquivo.
      })
    })

    //SEÇÃO 8 AULA 33 - LIDANDO COM LINKS QUE ABRE EM OUTRA PAGINA NO NAVEGADOR

    //EXERCICIO
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#privacy a') //primeiro passo fiz um "cy.get('#privacy a')" para pegar o id "#privacy" e dentro dele tem o "a".
          .should('have.attr', 'target', '_blank') //segundo passo usei o ".should('have.attr', 'target', '_blank') para verificar que tem atributo "target" com o valor "_blank".
    })

    //EXERCICIO EXTRA 1
    it('acessa a página da política de privacidade removendo o target e então clicando no link para não ter que mudar de pagina e abrir na mesma pagina', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      cy.get('#privacy a') //primeiro passo fiz um "cy.get('#privacy a')" para pegar o id "#privacy" e dentro dele tem o "a".
        .invoke('removeAttr', 'target') //segundo passo usei metodo ".invoke('removeAttr', 'target')" que vai remover o atributo "target".
        .click() //terceiro passo usei ".click()" para clicar no atributo.

      cy.contains('Talking About Testing').should('be.visible') //quarto passo usei o "cy.contains('Talking About Testing').should('be.visible')" para verificar que contem um elemento que tem um texto, e que esse elemento está visível. 
      
    })
    
    //EXERCICIO EXTRA 2 - DESAFIO TA NA CLASSE DE "Privacy.spec.js"


    //SEÇÃO 9 AULA 37 - SIMULANDO O VIEWPORT DE UM DISPOSITIVO

    //EXERCICIO - TA NA CLASSE DE "package.json"

    //Foi criado um novo script para simular um teste a partir de um dispositivel mobile "cy:open:mobile": "cypress open --config viewportWidth=410 viewportHeight=860".

    //EXERCICIO EXTRA - TA NA CLASSE DE "package.json" teste

    //Foi criado um novo script para simular um teste a partir de um dispositivel mobile "test:mobile": "cypress run --config viewportWidth=410 viewportHeight=860".



    //SEÇÃO 10 AULA 40 - CRIANDO DOCUMENTAÇÃO NO ARQUIVO "README"

    //EXERCICIO - TA NO ARQUIVO DE "README.md"




    //SEÇÃO 11 AULA 42 - INTEGRAÇÃO CONTINUA COM GIT ACTIONS

    

    //SEÇÃO 12 AULA 48 - AVANÇANDO NO USO DO CYPRESS UTILIZANDO OS COMANDO "Lodash"

    //EXERCICIO EXTRA 1

    Cypress._.times(5, function() { //primeiro passo usei a função "Cypress._.times(5, function()", isso significa que coloquei o mesmo teste para rodar 5 vezes seguida. O segundo argumento usei a função de callback.
      it('campo Telefone continua vazio quando preenchido com valor não-númerico', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
        cy.get('#phone') //primeiro passo eu busquei o "cy.get('#phone')" para pegar o elemento id do campo.
        .type('Teste') //segundo passo utilizei ".type('Teste')" para digitar um valor texto no campo numerico.
        .should('have.value', '') //terceiro passo com ".should" encadeei um "('have.value', '')" com uma string vazia pois o campo nao conseguiu digitar o numero de telefone porque coloquei um texto, ao invez do numero.
      })
        
    })

    //AULA 50 - AVANÇANDO NO USO DO CYPRESS UTILIZANDO OS COMANDO "invoke('show')" e "invoke('hide')"

    //EXERCICIO EXTRA 2

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() { //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      cy.get('.success') //segundo passo usei a função "cy.get('.success')" para buscar o elemento com a classe ".success".
        .should('not.be.visible') //terceiro passo usei a função ".should('not.be.visible')" para verificar que não está mais visível.
        .invoke('show') //terceiro passo usei a função ".invoke('show')" para exibir o elemento que está escondido.
        .should('be.visible') //quarto passo usei a função ".should('be.visible')" para verificar que o elemento voltou a estar sendo visível.
        .and('contain', 'Mensagem enviada com sucesso.') //quinto passo usei a função ".and('contain', 'Mensagem enviada com sucesso.')" para verificar que ele contem a mensagem "Mensagem enviada com sucesso.".
        .invoke('hide') //sexto passo usei a função ".invoke('hide')" para esconder a mensagem.
        .should('not.be.visible') //setimo passo usei a função ".should('not.be.visible')" para verificar que não está mais visível.
      
      cy.get('.error') //oitavo passo usei a função "cy.get('.error')" para buscar o elemento com a classe ".error".
        .should('not.be.visible') //nono passo usei a função ".should('not.be.visible')" para verificar que não está mais visível.
        .invoke('show') //decimo passo usei a função ".invoke('show')" para exibir o elemento que está escondido.
        .should('be.visible') //decimo primeiro passo usei a função ".should('be.visible')" para verificar que o elemento voltou a estar sendo visível.
        .and('contain', 'Valide os campos obrigatórios!') //decimo segundo passo usei a função ".and('contain', 'Valide os campos obrigatórios!')" para verificar que ele contem a mensagem "Valide os campos obrigatórios!".
        .invoke('hide') //decimo terceiro passo usei a função ".invoke('hide')" para esconder a mensagem.
        .should('not.be.visible') //decimo quarto passo usei a função ".should('not.be.visible')" para verificar que não está mais visível.
    })
        

    //AULA 52 - AVANÇANDO NO USO DO CYPRESS UTILIZANDO OS COMANDO "invoke('val')

    //EXERCICIO EXTRA 3

    it('preenche a area de texto usando o comando invoke', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      const textoLongo = Cypress._.repeat('12345678910', 20) //primeiro passo criei uma variavel do tipo "const" chamada de "textoLongo". E logo em seguida usei a função "Cypress._.repeat('12345678910', 20)" para criar dentro da variavel "textoLongo" o valor de "12345678910" repetindo 20 vezes dentro do campo.
   
      cy.get('#open-text-area') //segundo passo busquei o "cy.get('#open-text-area')" para pegar o elemento id do campo de texto. 
        .invoke('val', textoLongo) //terceiro passo usei a função ".invoke('val', textoLongo)" para invocar o valor que estar dentro da variavel "textoLongo" que definiu no primeiro passo.
        .should('have.value', textoLongo) //quarto passo usei a função ".should('have.value', textoLongo)" para verificar que o valor é realmente o mesmo valor que estar dentro da variavel "textoLongo".
    })


    //AULA 54 - AVANÇANDO NO USO DO CYPRESS UTILIZANDO OS COMANDO "cy.request()')

    //EXERCICIO EXTRA 4

    it('faz uma requisição HTTP', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html') //primeiro passo usei a função "cy.request()" para fazer a requisição da URL que adicionei dentro dela.
        .should(function(response){ //segundo passo usei a função ".should(function(response)" para fazer a verificação, e dentro da função ".should()" criei uma função de callback "function", e essa função de callback vai receber a resposta da requisição "response".  
          const { status, statusText, body } = response //terceiro passo com a resposta da requisição "response", estou desestruturando o "status, statusText, body". Para isso deve rodar o teste e inspecionar. Logo em seguida ir no "Console" e verificar os campos "status, statusText, body" se tem os valores.
          expect(status).to.equal(200) //quarto passo usei a função "expect(status).to.equal(200)" para verificar que o "status" é igual a "200".
          expect(statusText).to.equal('OK') //quinto passo usei a função "expect(statusText).to.equal('OK')" para verificar que o "statusText" é igual a "OK".
          expect(body).to.include('CAC TAT') //sexto passo usei a função "expect(body).to.include('CAC TAT')" para verificar que o "body" inclui o texto "CAC TAT".
        }) 

    })


    //SEÇÃO 13 AULA 56 - DESAFIO ENCONTRE O GATO

    //EXERCICIO 

    it('encontre o gato escondido', function(){ //o primeiro argumento do bloco "it" é o nome do test case, e segundo argumento é a função de callback
      cy.get('#cat') //primeiro passo usei a função "cy.get('#cat')" para pegar o elemento com id do campo.
        .invoke('show') //segundo passo usei a função ".invoke('show')" para exibir o elemento que está escondido.
        .should('be.visible') //terceiro passo usei a função ".should('be.visible')" para verificar que está visível.

        //Esse cy.get a baixo, é só para teste ensinando como modificar o nome da aplicação que é "CAC TAT" para "CAT TAT".

      cy.get('#title') //primeiro passo usei a função "cy.get('#title')" para pegar o elemento com id do campo.
        .invoke('text', 'DOG TAT') //segundo passo usei a função ".invoke('text')" para invocar o "text" do "title", e o segundo argumento é adicinando um valor que vai alterar o nome dele para qualquer coisa ex: "CAT TAT".

        //Esse cy.get a baixo, é só para teste ensinando como modificar o nome da aplicação que é "CAC TAT" para "DOG TAT".

      cy.get('#subtitle') //primeiro passo usei a função "cy.get('#subtitle')" para pegar o elemento com id do campo.
        .invoke('text', 'Eu amo 🐕') //segundo passo usei a função ".invoke('text')" para invocar o "text" do "title", e o segundo argumento é alterando o icone do gatinho para o cachorro.

    })
    
})