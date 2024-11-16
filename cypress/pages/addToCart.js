export class addToCart{
    locators={
        searchBox1:"input.form-control",
        clickOnSearch:".input-group-btn > .btn > .fa",
        addToCart1:'.button-group> button:nth-child(1)',
        successMessage:'.alert-success',

    }
    clickOnSearch(){
        cy.get(this.locators.clickOnSearch).click();
    }
    enterTextOnSearch(productName){
        cy.get(this.locators.searchBox1).click();
        cy.get(this.locators.searchBox1).type(productName);
    }
    clickOnAddToCart(){
        cy.get(this.locators.addToCart1).click();
    }
    verifyMessage(){
        return cy.get(this.locators.successMessage);
    }

}