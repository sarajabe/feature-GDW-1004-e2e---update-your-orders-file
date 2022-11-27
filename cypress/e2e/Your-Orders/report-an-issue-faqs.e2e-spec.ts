import { PageObjects } from '../../support/pageObjects'
import { CONSTANT } from '../../fixtures/constants'

describe('Sign in then go to your orders page,then to report an issue page and click on FAQS option', () => {
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
    it('Should click on your orders', () => {
        PageObjects.YouOrders.clickOnYourOrders7thChild();
    });
    it('Should go to your orders page', () => {
        PageObjects.TitleExpectations.goToOrdersPage();
    });
    it('Should click on view invoice', () => {
        PageObjects.YouOrders.clickOnOrderDetails();
    });
    it('Should go to order details page', () => {
        PageObjects.TitleExpectations.goToOrderDetailsPage();
    });
    it('Should click on report an issue', () => {
        PageObjects.YouOrders.clickOnReportAnIssue();
    });
    it('Should go to report an issue page', () => {
        PageObjects.TitleExpectations.goToReportAnIssuePage();
    });
    it('Should click on something else option', () => {
        PageObjects.YouOrders.clickOnFAQS();
    });
    it('Should validate going to faqs page', () => {
        PageObjects.TitleExpectations.goToFaqsPage();
    });
});