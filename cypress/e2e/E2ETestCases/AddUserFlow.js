import { HomePageAction } from "../../PageObjects/PageActions/HomePageAction";
const HOME_PAGE_ACTION = new HomePageAction();

describe("Add user flow", () => {
    it("Verify that add user is successful", () => {
        cy.loginSuccessWithRoleAdmin();
        HOME_PAGE_ACTION.clickOnAdminSelector();
   
    })
}) 