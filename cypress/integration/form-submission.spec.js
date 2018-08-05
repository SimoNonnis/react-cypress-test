describe('Test form submission', () => {
  it('should add a todo item', () => {
    const newTodo = 'Buy Pizza';
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/todos',
      response: { id: 333, name: newTodo, isComplete: false }
    }).as('save');
    cy.loadAndVisit([]);
    cy.get('.new-todo')
      .type(newTodo)
      .type('{enter}');
    cy.wait('@save');
    cy.get('.todo-list li').should('have.length', 1);
  });

  it('should show an error message for a failed form submission', () => {
    const newTodo = 'New Todo Test';
    cy.server();
    cy.route({
      method: 'POST',
      url: '/api/todos',
      status: 500,
      response: {}
    }).as('save');
    cy.loadAndVisit([]);
    cy.get('.new-todo')
      .type(newTodo)
      .type('{enter}');
    cy.wait('@save');

    cy.get('.todo-list li').should('have.length', 0);
    cy.get('.error').should('be.visible');
  });
});
