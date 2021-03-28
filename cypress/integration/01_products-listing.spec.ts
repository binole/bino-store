
it('should list all products', () => {
  cy.visit('/')

  cy.fixture('products').then(products => {
    cy.findAllByTestId('product-item').should('have.length', products.length);
  })
})