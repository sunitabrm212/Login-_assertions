describe("Implicit login assertions", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Check that logo is visible", () => {

        cy.get('div.orangehrm-login-branding > img').should('be.visible')

    })

    it("Check that username and password fields are visible", () => {
        
        cy.get('input[name = "username"]').should('be.visible')
        cy.get('input[name = "password"]').should('be.visible')

    })

    it("Check that login button is visible and enabled", () => {

        cy.get('button[type = "submit"]').should('be.visible').and('be.enabled')

    })

    it("Check that error message appears when invalid username and invalid password are entered", () => {

        cy.get('input[name = "username"]').type("User")
        cy.get('input[name = "password"]').type("user123")
        cy.get('button[type = "submit"]').click()
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', "Invalid credentials")


    })

    it("Check that entering valid username and valid password redirects the admin to dashboard", () => {

        cy.get('input[name = "username"]').type("Admin")
        cy.get('input[name = "password"]').type("admin123")
        cy.get('button[type = "submit"]').click()
        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    })

    it("Check clicking 'Forget your password?' link navigate away from login", () => {

        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.url().should('include', "auth/requestPasswordResetCode")

    })

      it("Check after logging out, is the login form visible again", () => {

   
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.contains('Logout').click()

        cy.get('.orangehrm-login-form').should('be.visible')

  })


})