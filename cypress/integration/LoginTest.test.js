describe('myTestSuite', () => {
it('Verify Login of the page and links validation of Mytheresa website', () => {

    cy.visit('https://www.mytheresa.com/en-de/men.html', {
      headers: {
        "Accept-Encoding": "br"
      }})

        
    cy.get('a[href*="https://www.mytheresa.com/int_en/men.html"]:not([href=""])').each(($el) => {
        cy.request($el.prop("href")).as("link");
      });
      
      cy.get("@link").should((response) => {
        expect(response.status).to.eq(200);
      });
      cy.get('a#myaccount').click();

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
      cy.get('div#qa-login-email.input-box').type('ashwin@maildrop.cc')
      cy.get('div#qa-login-password.input-box').type('Test@123{enter}')
      cy.get('p.welcome-msg', { timeout: 10000 }).should('be.visible');

    
})

})
