/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe(`AppliFashion V${Cypress.env(
  'VERSION'
)} Test 1 - Main Page test`, () => {
  it('should display the hackathon landing page correctly', () => {
    cy.eyesOpen({
      appName: 'AppliFashion',
      testName: 'Test 1',
      stepName: 'main page',
      batchId: "Testing Lifecycle",
      browser: {
        width: 1200,
        height: 800,
        name: 'chrome'
      }
    });
    cy.visit(Cypress.env('APP_NAME'));
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});