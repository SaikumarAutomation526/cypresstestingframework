import registerData from "../../fixtures/registerData.json"
import { addToCart } from "../../pages/addToCart";
let addtoCart =new addToCart();


describe('custom commands',()=>{
    before(()=>{
        cy.loginPage(registerData.email,registerData.passw);
    })
 
  it('searching product',()=>{
    addtoCart.enterTextOnSearch("Samsung Galaxy Tab 10.1");
    addtoCart.clickOnSearch();
    addtoCart.clickOnAddToCart();
    addtoCart.verifyMessage().should('contain',registerData.productSucess.message)
   
  })
 })
