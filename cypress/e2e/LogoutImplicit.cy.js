
describe("Implicit Log out functionality", () => {

  it("Check after logging out is the login form visible", () => {

    //   // Ignore uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
   })

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name = "username"]').type("Admin")
    cy.get('input[name = "password"]').type("admin123")
    cy.get('button[type = "submit"]').click()

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get('.oxd-userdropdown-link').contains('Logout').click()
    cy.get('.orangehrm-login-form').should('be.visible')

  })

})