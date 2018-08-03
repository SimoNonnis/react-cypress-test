describe('Test Form Input', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should focus the input on load', () => {
    cy.focused().should('have.class', 'new-todo');
  });

  it('should accept input value', () => {
    const typedInput = 'Buy Pizza';

    cy.get('.new-todo')
      .type(typedInput)
      .should('have.value', typedInput);
  });
});
