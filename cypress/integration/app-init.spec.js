describe('Test App init', () => {
  it('should load list of todos from API', () => {
    cy.server();
    cy.fixture('todos').then(todos => {
      cy.route('GET', '/api/todos', todos);
    });
    cy.visit('/');
    cy.get('.todo-list li').should('have.length', 4);
  });
});
