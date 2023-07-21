describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.exito.com/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    cy.wait(500)
    cy.get("#category-menu").click()
    cy.get('p').contains('Dormitorio').click()
    cy.wait(500)
    cy.get('p').contains('Dormitorio').click()
    cy.wait(500)
    cy.get('a').contains('Cabeceros').click()
     

    cy.get('#gallery-layout-container').children()
      .then(($listing) => {
        cy.wait(6000)
        const sample = Cypress._.sample($listing.toArray())
        cy.wrap(sample).as('item').click()
        }
        )
    cy.wait(6000)
    cy.get('span').contains('Agregar').click()
    cy.get('.exito-vtex-components-4-x-PricePDP').then(mesagge => {
     const wags = mesagge;
     cy.wrap(wags).as('wags')
    })

    cy.get('svg.vtex-menu-2-x-header-link-icon:nth-child(2)').click()
    cy.get('.exito-checkout-io-0-x-preLoginInputText > input').type('testing@hotmail.com')
    cy.get('.exito-checkout-io-0-x-preLoginActiveButton').click()

    cy.get('@wags').invoke('text').then(wags => {
      cy.get('div.exito-checkout-io-0-x-itemCartContainer > div > div > div:nth-child(5) > div > span > span')
      .invoke('text').should("eq", wags)
    })
    
    
    


    

    

  })
})