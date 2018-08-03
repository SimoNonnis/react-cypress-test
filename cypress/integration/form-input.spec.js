describe('Test Form Input', () => {
  it('should visit the app', () => {
    cy.visit('/');
    cy.focused().should('have.class', 'new-todo');
  });
});
