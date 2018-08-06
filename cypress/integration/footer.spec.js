describe('Test Footer', () => {
  it('should filter todos', () => {
    cy.loadAndVisit('fixture:mixed_todos');

    cy.contains('Active').click();

    cy.get('.todo-list li').should('have.length', 2);
  });
});
