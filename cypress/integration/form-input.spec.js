describe('Test Form Input', () => {
  it('should visit the app', () => {
    cy.visit('/');
    cy.focused().should('have.class', 'new-todo');
  });

  it.only('should accept input value', () => {
    const typedInput = 'Buy Pizza';

    cy.visit('/');
    cy.get('.new-todo')
      .type(typedInput)
      .should('have.value', typedInput);
  });
});
