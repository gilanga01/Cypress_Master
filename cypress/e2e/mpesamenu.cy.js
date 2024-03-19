describe('M-PESA Menu Restructure', () => {
  it('passes', () => {
    cy.visit('https://staging.isobarkenya.com/corporate/')
    cy.get('.item-2013 > a').click()
    cy.contains('Learn More').click().go('back')

  })
})