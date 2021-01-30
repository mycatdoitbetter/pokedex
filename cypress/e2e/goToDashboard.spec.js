/**
 * Enter into the application and find the Bulbasaur image.
 */

describe('Get into dashboard', () => {
  it('Should entry the and see the first result (Bulbasaur)"', () => {
    cy.viewport(1680, 1050)
    cy.visit('http://localhost:3000/')
    cy.findByPlaceholderText('Your best e-mail').type('andre.castelo@gmail.com').type('{enter}')
    cy.findByAltText('bulbasaur-artwork').should('be.visible')
  })
})
