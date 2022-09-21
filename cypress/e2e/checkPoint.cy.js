/// <reference types="Cypress" />
    let email = "testNG2022@outlook.com"
    let password = "prueba2022"
    let test = "TestDidWithCypress"
    let search = "drum"
    
    
beforeEach(()=>{
        cy.visit('https://reverb.com/')
 
 
    })

    it('Sign In to account',()=>{
        cy.get(".reverb-header__nav__links").contains("Log In").click()     
        cy.get('input[id="signin--login"]').type(email)
        cy.get('input[id="signin--password"]').type(password)
        cy.get(".scaling-mtb-2").contains("Log In").click()     
        cy.get('[alt="User Avatar"]').should('be.visible')
    })

    it.only('Add Review',()=>{
        cy.get('.site-search__controls__input').type("Bass")
        .type('{enter}')
        cy.get('.image-box').eq(2).click()
        cy.get(".csp-review-button").contains("Write a Product Review").click()     
        cy.get(".signup-signin__tab").contains("Log In").click()  
        cy.get('input[id="signin--login"]').type(email)
        cy.get('input[id="signin--password"]').type(password)
        cy.get(".scaling-mtb-2").contains("Log In").click()     
        cy.get(".csp-review-button").contains("Write a Product Review").click()     
        cy.get('.rc-star-rating-selector__star').first().click()
        cy.get('input[id="title"]').type(test)
        cy.get('textarea[id="review"]').type(test)
        cy.get(".reverb-modal__actions__save").contains("Post Review").click() 
        cy.get(".alert-box__content").contains("Your review has been published. Thanks for helping other musicians!").should('be.visible')

    })
    it('Add to cart',()=>{
       // cy.get('.site-search__controls__input').type(search)
       // .type('{enter}')
       // cy.get('.image-box').first().click()
        cy.get(".input-group__input").eq(1).type(email) 
        .type('{enter}')
        cy.get(".newsletter-signup").should('be.visible')

    })
    
    
    