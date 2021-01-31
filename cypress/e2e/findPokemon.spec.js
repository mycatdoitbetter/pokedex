/* eslint-disable cypress/no-unnecessary-waiting */
/**
 * Into the dashboard, find one Pokemon and the details
 */

describe('Search a Pokemon', () => {
  it('Should entry and get all Pokemon details"', () => {
    cy.viewport(1680, 1050)
    cy.visit('http://localhost:3000/')
    cy.findByPlaceholderText('Your best e-mail').type('andre.castelo@gmail.com').type('{enter}')
    cy.findByPlaceholderText('Search by name or number').type('Gyarados')
    cy.findByText('#130 - Gyarados').click()

    // Find images
    cy.wait(500).findAllByAltText('evolutions-artwork')
    cy.findByAltText('gyarados-artwork')

    // Find physical attributes
    cy.findByText('21\'04" / 6.5 m') // Height result
    cy.findByText('518.lbs. / 235kg') // Weight result

    // Find evolutions
    cy.findByText('Magikarp')
    cy.findByText('Gyarados')

    // Find characteristics
    cy.findByText('It appears when ever there is world conflict burning down any place it travels through')

    // Find attributes
    cy.findByText('95 HP')
    cy.findByText('125 ATK')
    cy.findByText('79 DEF')
    cy.findByText('60 SP. ATK.')
    cy.findByText('100 SP. DEF.')
    cy.findByText('81 SPEED')
  })
})
