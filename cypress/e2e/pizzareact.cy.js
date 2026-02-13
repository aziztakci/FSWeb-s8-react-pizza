describe("Pizza Customization and Submission", () => {

    describe("Success Order In Test", () => {

        beforeEach(() => {
            cy.visit("http://localhost:5173/")
        })
        it("Should complete the order successfully and display results on the success page", () => {
            cy.get('[data-cy="btnHeader"]').click()
            cy.get('[data-cy="btnHome"]').click()
            cy.get('[data-cy="btnCardLarge"]').click()
            cy.get('[data-cy="btnHome"]').click()
            cy.get('[data-cy="btnCardTop"]').click()
            cy.get('[data-cy="btnHome"]').click()
            cy.get('[data-cy="btnCardBottom"]').click()
            cy.get('[data-cy="size-error-message"]').should('be.visible')
            cy.get('[data-cy="dough-error-message"]').should('be.visible')
            cy.get('[data-cy="checkbox-error-message"]').should('be.visible')
            cy.get('[data-cy="name-error-message"]').should('not.exist')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="size-s"]').click({ force: true })
            cy.get('[data-cy="size-m"]').click({ force: true })
            cy.get('[data-cy="size-l"]').click({ force: true })
            cy.get('[data-cy="size-error-message"]').should('not.exist')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="dough-select"]').select('İnce')
            cy.get('[data-cy="dough-error-message"]').should('not.exist')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="topping-1"]').check({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('be.visible')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="topping-3"]').check({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('be.visible')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="topping-5"]').check({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('be.visible')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="topping-9"]').check({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('not.exist')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')
            cy.get('[data-cy="topping-9"]').uncheck({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('be.visible')
            cy.get('[data-cy="topping-8"]').check({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('not.exist')
            cy.get('[data-cy="topping-2"]').check({ force: true })
            cy.get('[data-cy="label-10"]').click()
            cy.get('[data-cy="topping-11"]').check({ force: true })
            cy.get('[data-cy="topping-12"]').check({ force: true })
            cy.get('[data-cy="topping-13"]').check({ force: true })
            cy.get('[data-cy="topping-14"]').check({ force: true })
            cy.get('[data-cy="checkbox-error-message"]').should('not.exist')
            cy.get('[data-cy="topping-7"]').should('be.disabled')
            cy.get('[data-cy="label-7"]').should('have.css', 'opacity', '0.5')
            cy.get('[data-cy="name-input"]').type("fzbz")
            cy.get('[data-cy="name-error-message"]').should('be.visible')
            cy.get('[data-cy="btnSubmit"]').should('be.disabled')






        })
    })

})

