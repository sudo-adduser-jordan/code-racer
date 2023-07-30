export class RacePage {

    languageDropdown(): Cypress.Chainable{ return cy.get('[data-cy="language-dropdown"]') }
    htmlLanguageOption(): Cypress.Chainable{ return cy.get('[data-cy="html-value"]') }
    practiceButton(): Cypress.Chainable{ return cy.get('[data-cy="practice-button"]') }
    codeSnippet(): Cypress.Chainable{ return cy.get('[data-cy="code-snippet-preformatted"]') }
}