

 export class registerPage{
    webLocators={
        firstName:'#input-firstname',
        lastname:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckBox:'input[name="agree"]',
        continue:'input[type="submit"]'
    }
    openUrl(){
        let url1=Cypress.env('baseUrl');
     cy.visit(url1);
    }
    enterfirstName(firstName){
        cy.get(this.webLocators.firstName).type(firstName)
    }
    eneterLastName(lastName){
        cy.get(this.webLocators.lastname).type(lastName)
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }
    eneterTelephone(telNumber){
        cy.get(this.webLocators.telephone).type(telNumber)
    }
    enterPassword(passw){
        cy.get(this.webLocators.password).type(passw)
    }
    eneterPasswordConfirm(passwCon){
        cy.get(this.webLocators.passwordConfirm).type(passwCon);
    }
    clickOnPolicyCheckBox(){
        cy.get(this.webLocators.policyCheckBox).click();
    }
    clickOnContinue(){
        cy.get(this.webLocators.continue).click();
    }
}

