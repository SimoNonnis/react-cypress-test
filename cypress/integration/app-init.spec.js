describe('Test App init', () => {
  it('should load list of todos from API', () => {
    cy.server();
    cy.route('GET', '/api/todos', [
      { id: 1, name: 'Make pizza', completed: false }
    ]);
    cy.visit('/');
    cy.get('.todo-list li').should('have.length', 1);
  });
});
