describe('Test App init', () => {
  it('should load list of todos from API', () => {
    cy.loadAndVisit();
    cy.get('.todo-list li').should('have.length', 4);
  });
});
