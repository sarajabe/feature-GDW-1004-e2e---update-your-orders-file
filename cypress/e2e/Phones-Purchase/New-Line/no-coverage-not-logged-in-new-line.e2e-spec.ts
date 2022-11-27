import { PageObjects } from '../../../support/pageObjects'
import { CONSTANT } from '../../../fixtures/constants'

describe('Purchase a phone - new line - no coverage - not logged in', () => {
     before(() => {
          PageObjects.BeforeAll.executeBeforeAll();
     });
     it('Should click on shop menu', () => {
          PageObjects.HomePage.clickOnShopMenu();
     });
     it('Should click on phones', () => {
          PageObjects.HomePage.clickOnPhones();
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
     it('Should sclick on add a new line', () => {
          PageObjects.PurchasedPhones.clickOnAddANewLine();
     });
     it('Should go to select line page', () => {
          PageObjects.TitleExpectations.goToSelectLinePage();
     });
     it('Should sclick on next', () => {
          PageObjects.PurchasedPhones.clickOnNextBtn();
     });
     it('Should go to plans page', () => {
          PageObjects.TitleExpectations.goToPlansG2GPage();
     });
     it('Should select plan', () => {
          cy.get('#select-plan-GOOD2GO-20GB-50').click();
     });
     it('Should go to Service Coverage Check page', () => {
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
     it('Should check that the Done is disabled and the assert no coverage message', () => {
          cy.get('.right > .primary').should('be.disabled');
          cy.get('.banner-title').should('have.text','Oops, No Coverage.');
     });
});
