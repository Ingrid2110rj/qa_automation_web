/// <reference types="cypress" />


describe('Desafio Manu 2', () => {
  
    beforeEach(() => {
      cy.viewport(1366, 766);
       
   })
  
    it('Acessa o site e clica na opção de unidades', () => {
     
      cy.visit('https://www.fleury.com.br/');
      cy.get(':nth-child(16) > #button-title-desktop-header > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3').should('have.text', 'Unidades');
      cy.get(':nth-child(16) > #button-title-desktop-header > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3').click({ force: true });
      cy.get('.checkbox-selectcomponentstyle__CheckboxSelectPlaceholderStyled-sc-7ktrvg-2').click({ force: true });
    });
    it('Seleciona 3 facilidades ', () => {
  
      cy.get(':nth-child(6) > .fa-check-square > path').click({ force: true })//Bicicletário e vaga verde
      cy.get(':nth-child(7) > .fa-check-square').click({ force: true })//Unidades em shoppings
      cy.get(':nth-child(8) > .fa-check-square > path').click({ force: true });// Atendimento aos domingos
    });
    it('Valida nome da Unidade', () => {
      
      cy.get('.typographycomponentstyle__H3-sc-1oox73n-3').invoke('text').then((unidades) => {
        cy.log(unidades);
  
        cy.get('#button-see-on-map-2-shopping-analia-franco > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3').click({ force: true });
        cy.get('.typographycomponentstyle__H1-sc-1oox73n-1').should('have.text', unidades);
  
     });
  
    });
  })
  
  