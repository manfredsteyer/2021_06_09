it('loads examples', () => {
  cy.intercept('http://www.angular.at/api/*').as('api');

  cy.visit('/');
  cy.get('input[name=from]').type('Graz');
  cy.get('input[name=to]').type('Hamburg').blur();

  cy.get('button[name=btnSearch]').click();
  cy.screenshot();

  cy.wait('@api');

  cy.screenshot();
  cy.get('app-flight-card').its('length').should('eq', 9);
});
