describe('Test List Item Behavior', () => {
  it('should delete an item', () => {
    cy.server();
    cy.route({
      method: 'DELETE',
      url: '/api/todos/*',
      response: {}
    }).as('delete');

    cy.loadAndVisit();

    cy.get('.todo-list li')
      .first()
      .find('.destroy')
      .invoke('show')
      .click();

    cy.wait('@delete');

    cy.get('.todo-list li').should('have.length', 3);
  });
});
