describe('Test App init', () => {
  it('should load list of todos from API', () => {
    cy.visit('/');
    cy.get('.todo-list li').should('have.length', 3);
  });
});
