/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Test 2 - Filtered Product Grid Test`, () => {
  it('should filter black shoes correctly', () => {
    cy.eyesOpen({
      appName: 'AppliFashion',
      testName: 'Test 2',
      stepName: 'filter by color',
      batchId: "Testing Lifecycle",
      browser: {
        width: 1200,
        height: 800,
        name: 'chrome'
      }
    });
    cy.visit(Cypress.env('APP_NAME'));
    cy.get('#colors__Black').click();
    cy.get('#filterBtn').click();
    cy.eyesCheckWindow({
      selector: '#product_grid'
    });
    cy.eyesClose();
  });
});