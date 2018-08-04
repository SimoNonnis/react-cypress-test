describe('Test App init', () => {
  it('should load list of todos from API', () => {
    cy.server();
    cy.route('GET', '/api/todos', 'fixture:todos').as('load');
    cy.visit('/');
    cy.wait('@load');
    cy.get('.todo-list li').should('have.length', 4);
  });
});
