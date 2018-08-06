describe('Test Footer', () => {
  it('should filter todos', () => {
    const filters = [
      { link: 'All', expectedLength: 4 },
      { link: 'Active', expectedLength: 2 },
      { link: 'Completed', expectedLength: 2 }
    ];

    cy.loadAndVisit('fixture:mixed_todos');

    cy.wrap(filters).each(filter => {
      cy.contains(filter.link).click();
      cy.get('.todo-list li').should('have.length', filter.expectedLength);
    });
  });
});
