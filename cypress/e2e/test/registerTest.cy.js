import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
const registerPage1 = new registerPage()



describe('register page wiyth fixture data ', function() {
  it('validTestCase', () => {
        registerPage1.openUrl()
        cy.fixture('registerData').then((regData) => {
            registerPage1.enterfirstName(regData.firstName);
            registerPage1.eneterLastName(regData.lastname);
            registerPage1.enterEmail(regData.email);
            registerPage1.eneterTelephone(regData.telNum);
            registerPage1.enterPassword(regData.passw);
            registerPage1.eneterPasswordConfirm(regData.passwordChecking);
        })
        registerPage1.clickOnPolicyCheckBox();
       // registerPage.clickOnContinue();
    })
    it('validTestCase wiuth import the file', () => {
        
         registerPage1.openUrl();
        registerPage1.enterfirstName(registerData.firstName);
        registerPage1.eneterLastName(registerData.lastname);
        registerPage1.enterEmail(registerData.email);
        registerPage1.eneterTelephone(registerData.telNum);
        registerPage1.enterPassword(registerData.passw);
        registerPage1.eneterPasswordConfirm(registerData.passwordChecking);
        registerPage1.clickOnPolicyCheckBox();
        // registerPage.clickOnContinue();
    })
})

