describe('login page', () => {
  it('login in the site', () => {
    cy.visit('https://www.saucedemo.com')
    cy.wait(2000)
    cy.get('[name="user-name"]').type('problem_user')
    cy.get('[type="password"]').type('secret_sauce')
    cy.get('[type="submit"]').click()

    // Clica no item e verifica se foi adicionado ao carrinho
    cy.get('#item_4_title_link').click()
    cy.get('#add-to-cart').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    // Vai ao carrinho e remove o item e volta para as compras
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="continue-shopping"]').click()

  });
})