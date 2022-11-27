import { PageObjects } from '../../../support/pageObjects'
import { CONSTANT } from '../../../fixtures/constants'



describe('Purchase plan & phone - new line - no coverage - logged in ', () => {
     before(() => {
          PageObjects.BeforeAll.executeBeforeAll();
     });
     after(() => {
          PageObjects.AccessControl.logoutFromAccount();
     });
     it('Should click on sign in', () => {
          PageObjects.HomePage.clickOnSignIn();
     });
     it('Should go to login page', () => {
          PageObjects.TitleExpectations.goToLogInPage();
     });
     it('Should fill login info with valid data', () => {
          PageObjects.AccessControl.logIn(CONSTANT.ACCESS.USER_G_ACCOUNT.EMAIL, CONSTANT.ACCESS.USER_G_ACCOUNT.PASSWORD);
     });
     it('Should click on login button', () => {
          PageObjects.AccessControl.logInButton();
     });
     it('Should go to account summary page', () => {
          PageObjects.TitleExpectations.goToAccountSummaryPage();
     });
     it('Should click on shop menu ', () => {
          PageObjects.HomePage.clickOnShopMenu();
     });
     it('Should click on puchase a new plan', () => {
          PageObjects.HomePage.clickOnPurchaseNewPlan();
     });
     it('Should go to plans page', () => {
          PageObjects.TitleExpectations.goToPlansG2GPage();
     });
     it('Should add a plan to cart', () => {
          PageObjects.Plans.clickOnPlan_2_GB_Plans_Page();
     });
     it('Should clickon I need a new phone', () => {
          PageObjects.PurchasedPhones.clickOnINeedToBuyAphone();
     });
     it('Should go to phones page', () => {
          PageObjects.TitleExpectations.goToPhonesPage();
     });
     it('Should click on shop iphone', () => {
          PageObjects.PurchasedPhones.clickOnShopIphonePhones();
     });
     it('Should go to phones models page', () => {
          PageObjects.TitleExpectations.goToPhoneModelPage();
     });
     it('Should select 2nd phone', () => {
          PageObjects.PurchasedPhones.clickOnSelect3rdPhone();
     });
     it('Should go to phones phone details page', () => {
          PageObjects.TitleExpectations.goToPhoneDetailsPage();
     });
     it('Should select gray', () => {
          PageObjects.PurchasedPhones.clickOnXSGray();
     });
     it('Should select phone btn', () => {
          PageObjects.PurchasedPhones.clickOnSelecPhoneBtn();
     });
     it('Should go to service coverage  page', () => {
          PageObjects.TitleExpectations.goToServiceCoverageCheckPage();
     });
     it('Should fill in address ref with no coverage', () => {
          PageObjects.Coverage.enterAddressRefNoCoverage();
     });
     it('Should handle the invisible recaptcha here', () => {
          PageObjects.Recaptcha.invisibleRecaptcha();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
     });
     it('Should click on check coverage btn', () => {
          PageObjects.PurchasedPhones.clickOncheckCoverageBtn();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
     });
     it('Should click on done btn', () => {
          cy.get('.banner-title').should('have.text','Oops, No Coverage.');
          cy.get('.right > .primary').should('be.disabled')
     });
     it('Should stay in Service Coverage Check page', () => {
          PageObjects.TitleExpectations.goToServiceCoverageCheckPage();
     });

});

