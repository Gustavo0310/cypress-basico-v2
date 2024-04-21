/// <reference types="Cypress" />

const cypress = require("cypress")

//Pré requisito
describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
        cy.visit('./src/index.html')

  })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })


    it('cadastro com sucesso preenchendo apenas campos obrigatorios', function() {
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Lacerda')
        cy.get('#email').type('Gustavolacerda@cypress.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })
     

    it('prencher campos obrigatorios e adicionar um delay quando inserir um texto longo', function() {
        const textoLongo = 'A poluição plástica é um dos principais problemas ambientais da atualidade, com efeitos devastadores nos ecossistemas marinhos e na vida selvagem. Este artigo apresenta uma revisão abrangente dos estudos científicos sobre o impacto da poluição plástica nos oceanos, destacando suas consequências para a sociedade e a humanidade.'
        
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Lacerda')
        cy.get('#email').type('Gustavolacerda@cypress.com')
        cy.get('#open-text-area').type(textoLongo, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })


    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Lacerda')
        cy.get('#email').type('Gustavolacerda@cypress,com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })


    it('campo Telefone continua vazio quando preenchido com valor não-númerico', function(){
        cy.get('#phone')
          .type('Teste')
          .should('have.value', '')
    })


    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Lacerda')
        cy.get('#email').type('Gustavolacerda@cypress.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })


     it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
          .type('Gustavo')
          .should('have.value', 'Gustavo')
          .clear()
          .should('have.value', '')

        cy.get('#lastName')
          .type('Lacerda')
          .should('have.value', 'Lacerda')
          .clear()
          .should('have.value', '')

        cy.get('#email')
          .type('Gustavolacerda@cypress.com')
          .should('have.value', 'Gustavolacerda@cypress.com')
          .clear()
          .should('have.value', '')

        cy.get('#phone')
          .type('88687291')
          .should('have.value', '12345678')
          .clear()
          .should('have.value', '')
        
        cy.get('#open-text-area')
          .type('teste')
          .should('have.value', 'teste')
          .clear()
          .should('have.value', '')
     })


     it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
      cy.contains('button', 'Enviar').click()

      cy.get('.error').should('be.visible')
     })


     it('envia o formuário com sucesso usando um comando customizado', function(){
       cy.fillMandatoryFieldsAndSubmit()

       cy.get('.success').should('be.visible')
     })


     it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
          .select('YouTube')
          .should('have.value', 'youtube')
     })


     it('seleciona um produto (Mentoria) por seu texto', function(){
        cy.get('#product')
          .select('Mentoria')
          .should('have.value', 'mentoria')
     })


     it('seleciona um produto (Blog) por seu texto', function(){
        cy.get('#product')
          .select('Blog')
          .should('have.value', 'blog')
     })


     it('seleciona um produto (Cursos) por seu texto', function(){
        cy.get('#product')
          .select('Cursos')
          .should('have.value', 'cursos')
     })


     it('marca o tipo de atendimento "Feedback"', function(){
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.value', 'feedback')
     })


     it('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(function($radio){
              cy.wrap($radio).check()
              cy.wrap($radio).should('be.checked')
          })
     })


     it('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')
     })


     it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário, para garantir que em vez de um .click(), o comando .check() é utilizado para marcar o checkbox Telefone.', function(){
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Lacerda')
        cy.get('#email').type('Gustavolacerda@cypress.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
     })

  })