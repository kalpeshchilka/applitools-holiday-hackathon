/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Test 3 - Product Details Test`, () => {
  it('should display Product details page correctly', () => {
    cy.eyesOpen({
      appName: 'AppliFashion',
      testName: 'Test 3',
      stepName: 'product details',
      batchId: "Testing Lifecycle",
      browser: {
        width: 1200,
        height: 800,
        name: 'chrome'
      }
    });
    cy.visit(Cypress.env('APP_NAME'));
    cy.contains('Appli Air x Night').click();
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});