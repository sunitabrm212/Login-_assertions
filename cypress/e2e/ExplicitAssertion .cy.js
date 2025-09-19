describe("Explicit assertion", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Check page title", () => {
        
        let expTitle = "OrangeHRM"

        cy.title().then((title) => {
            expect(title).to.equal(expTitle)
        })

    })

    it("Assert that the username field placeholder is Username", () => {

        cy.get('input[name = "username"]')
        .invoke('attr', 'placeholder').then((placeholder) => {
            expect(placeholder).is.equal("Username")
        })

    })

    it("Assert that the password field placeholder is Password", () => {

        cy.get('input[name = "password"]')
        .invoke('attr', 'placeholder').then((placeholder) => {

            expect(placeholder).is.equal("Password")

        })

    })

    it("Assert that the OrangeHRM logo img has the correct src attribute", () => {

        cy.get('img[alt="orangehrm-logo"]')
        .invoke('attr', 'src').then((src) => {

            expect(src).is.equal("/web/images/ohrm_logo.png")

        })

    })

    it("Assert that the login button text is “Login”", () => {

        cy.get('button[type = "submit"]')
        .invoke('text').then((text) => {

            expect(text.trim()).is.equal("Login")

        })

    })

})