import { CONSTANT } from "../../fixtures/constants";

class YouOrders {
    searchByID() {
        cy.get('[data-cy="ID"]').click();
        cy.get('[data-cy="ID"]').clear();
        cy.get('[data-cy="ID"]').type('2F7NBTSQH1KPZS92');
        return this;
    };
    addShippingAddress(addressName, city, state, postalCode, address) {
        cy.get('[data-cy="name"]').click();
        cy.get('[data-cy="name"]').clear();
        cy.get('[data-cy="name"]').type(addressName);
        cy.get('[data-cy="billingCity"]').click();
        cy.get('[data-cy="billingCity"]').clear();
        cy.get('[data-cy="billingCity"]').type(city);
        cy.get('[data-cy="billingState"]').click();
        cy.get('[data-cy="billingState"]').clear();
        cy.get('[data-cy="billingState"]').type(state);
        cy.get('[data-cy="billingPostal"]').click();
        cy.get('[data-cy="billingPostal"]').clear();
        cy.get('[data-cy="billingPostal"]').type(postalCode);
        cy.get('[data-cy="addressLookup"]').click();
        cy.get('[data-cy="addressLookup"]').clear();
        cy.get('[data-cy="addressLookup"]').type(address);
        cy.get('[data-cy="billingCity"]').click();
        return this;
    };
    clickOnLeaveUsAMessageLinkForReturnDevice() {
        cy.get('.link').click();
        return this;
    };
    clickOnUpdateBtn() {
        cy.get('[data-cy="updateBtn"]').click();
        return this;
    };
    clickOnShowMoreOrLess() {
        cy.get('[data-cy="showMoreAndLess"]').click();
        return this;
    };
    clickOnEditShippingAddress() {
        cy.get('[data-cy="editAddress"]').eq(0).click();
        return this;
    };
    clickOnLeaveUsAMessageBtn() {
        cy.get('[data-cy="leaveUsAMessage"]').click();
        return this;
    };
    clickOnCancelBtn() {
        cy.get('[data-cy="cancelBtn"]').click({multiple:true});
        return this;
    };
    clickOnYesFromPopUp() {
        cy.get('[data-cy="confirm-btn"]').click();
        return this;
    };
    clickOnSearchBtn() {
        cy.get('[data-cy="searchBtn"]').click();
        return this;
    };
    clickOnClearFilters() {
        cy.get('[data-cy="clearFilters"]').click({ force: true });
        return this;
    };
    clickOnRefillFilter() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(6) > .filter-label > input').click();
        return this;
    };
    clickOnChangePlanFilter() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(2) > .filter-label > input').click();
        return this;
    };
    clickOnAddOnsFilter() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(1) > .filter-label > input').click();
        return this;
    };
    clickOnCancelledFilter() {
        cy.get(':nth-child(3) > .filter-form > :nth-child(1) > .filter-label > input').click();
        return this;
    };
    clickOnApplyBtn() {
        cy.get('[data-cy="apply"]').click();
        return this;
    };
    clickOnPendingCheckBox() {
        cy.get(':nth-child(3) > .filter-form > :nth-child(3) > .filter-label > input').click();
        return this;
    };
    clickOnDeliveredCheckBox() {
        cy.get(':nth-child(3) > .filter-form > :nth-child(2) > .filter-label > input').click();
        return this;
    };
    clickOnChangePlanCheckBox() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(2) > .filter-label > input').click();
        return this;
    };
    clickOnPurchasedFilter() {
        cy.get(':nth-child(3) > .filter-form > :nth-child(4) > .filter-label > input').click();
        return this;
    };
    clickOnDoneBtn() {
        cy.contains('Done').click();
        cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);

    };
    clickOnSubmitBtn() {
        cy.get('[data-cy="submitBtn"]').click();
        cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL3);
    };
    clickOnShippedFilter() {
        cy.get(':nth-child(3) > .filter-form > :nth-child(5) > .filter-label > input').click();
        return this;
    };
    clickOnMigrationFilter() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(3) > .filter-label > input').click();
        return this;
    };
    clickOnNewPhoneFilter() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(4) > .filter-label > input').click();
        return this;
    };
    clickOnNewPlanFilter() {
        cy.get(':nth-child(4) > .filter-form > :nth-child(5) > .filter-label > input').click();
        return this;
    };
    clickOnReplacementSimFilter() {
        cy.get(':nth-child(7) > .filter-label > input').click();
        return this;
    };
    fillInDate() {
        cy.get('[data-cy="startDate"]').clear();
        cy.get('[data-cy="startDate"]').type('7/27/2021');
        cy.get('[data-cy="endDate"]').clear();
        cy.get('[data-cy="endDate"]').type('6/30/2022');
        return this;
    };
    clickOnNoBtnFromPopUp() {
        cy.get('[data-cy="cancel"]').click();
        return this;
    };
    clickOnReportIssueBtn() {
        cy.get('[data-cy="report-issue"]').click();
        return this;
    };
    fillInIssueDescription() {
        cy.get('[data-cy="description"]').clear();
        cy.get('[data-cy="description"]').type('issue description typed here');
        return this;
    };
    fillInPhoneNumber(phoneNumber) {
        cy.get('[data-cy="phoneNumber"]').clear();
        cy.get('[data-cy="phoneNumber"]').type(phoneNumber);
        return this;
    };
    clickOnNextStepBtn() {
        cy.get('[data-cy="nextStep"]').click();
        return this;
    };
    clickOnNextBtn() {
        cy.get('[data-cy="nextBtn"]').click();
        return this;
    };
    clickOnEditCurrentAddressIcon() {
        cy.get('[data-cy="editCurrentAddress"]').click();
        return this;
    };
    clickOnNeedHelpLink() {
        cy.get('[data-cy="needHelp?"]').click();
        return this;
    };
    clickOnAddANewAddress() {
        cy.get('[data-cy="addAnewAddress"]').click();
        return this;
    };
    clickOnUpdateShippingAddress() {
        cy.get('.options-container > :nth-child(3)').click();
        return this;
    };
    clickOnorderNotReceived() {
        cy.get('.options-container > :nth-child(1)').click();
        return this;
    };
    clickOnBackBtn() {
        cy.get('[data-cy="backBtn"]').click();
        return this;
    };
    clickOnReturnDevice() {
        cy.get('.options-container > :nth-child(4)').click();
        return this;
    };
    clickOnSomethingIssue() {
        cy.get('.options-container > :nth-child(6)').click();
        return this;
    };
    clickOnFAQS() {
        cy.get('.options-container > :nth-child(5)').click();
        return this;
    };
    clickOnWrongOrMissingItem() {
        cy.get('.options-container > :nth-child(2)').click();
        return this;
    };
    clickOnReportAnIssue() {
        cy.get('[data-cy="reportAnIssue"]').click();
        return this;
    };
    clickOnSecondOrderDetails() {
        cy.get('[data-cy="orderDetails"]').eq(1).click();
    };
    clickOnYourOrders6thChild() {
        cy.get(':nth-child(6) > .items-link').click();
        return this;
    };
    clickOnYourOrders7thChild() {
        cy.get(':nth-child(7) > .items-link').click();
        return this;
    };
    clickOnSortByDate() {
        cy.get('[data-cy="sortByDate"]').click();
        return this;
    };
    clickOnChangeAddress() {
        cy.get('[data-cy="changeShippingAddress"]').click();
        return this;
    };
    clickOnArrowForPackageContent() {
        cy.get('[data-cy="arrowIconPackageContent"]').click();
        return this;
    };
    clickOnArrowForShippingAddress() {
        cy.get('[data-cy="arrowIconShippingAddress"]').click();
        return this;
    };
    clickOnFilter() {
        cy.get('[data-cy="filter"]').click();
        return this;
    };
    clickOnViewInvoice() {
        cy.get('[data-cy="viewInvoice"]').eq(0).click();
        return this;
    };
    clickOnOrderDetails() {
        cy.get('[data-cy="orderDetails"]').eq(0).click({ force: true });
        cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL1);
        return this;
    };
    clickOn2ndViewOrderDetails() {
        cy.get('[data-cy="orderDetails"]').eq(1).click({ force: true });
        cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL1);
        return this;
    };
    clickOnNeedHelp() {
        cy.get('[data-cy="needHelp"]').eq(0).click();
        return this;
    };
    editShippingAddress(addressName, shippingAddressField, city, state, postal) {
        cy.get('[data-cy="addressName"]').clear();
        cy.get('[data-cy="addressName"]').type(addressName);
        cy.get('[data-cy="addressLookup"]').clear();
        cy.get('[data-cy="addressLookup"]').type(shippingAddressField);
        cy.get('[data-cy="billingCity"]').clear();
        cy.get('[data-cy="billingCity"]').type(city);
        cy.get('[data-cy="billingState"]').clear();
        cy.get('[data-cy="billingState"]').type(state);
        cy.get('[data-cy="billingPostal"]').clear();
        cy.get('[data-cy="billingPostal"]').type(postal);
        return this;
    };
    clickOnSave() {
        cy.get('[data-cy="save"]').click();
        return this;
    };
    clickOnNoBtnFromCancelOrderPopUp() {
        cy.get('[data-cy="cancel-btn"]').click();
        return this;
    };

};
export default new YouOrders();