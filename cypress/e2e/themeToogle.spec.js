/**
 * Toogle the theme of the application
 */

describe('Toogle the theme', () => {
  it('Should toogle the theme to dark"', () => {
    cy.viewport(1680, 1050)
    cy.visit('http://localhost:3000/')
    cy.findByPlaceholderText('Your best e-mail').type('andre.castelo@gmail.com').type('{enter}')
    cy.get('.react-switch-bg').click()
  })
})
