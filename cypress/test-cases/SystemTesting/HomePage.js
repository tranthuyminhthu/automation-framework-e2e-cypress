import { HomePageAction } from "../../pages/PageActions/HomePageAction";
import { LoginPageAction } from "../../pages/PageActions/LoginPageAction";

const HOME_PAGE_ACTION = new HomePageAction();
const LOGIN_PAGE_ACTION = new LoginPageAction();

describe("Home Page Test", () => {
  it.only("Navigate to Home Page", () => {
    cy.fixture("credential").then((data) => {
cy.loginSuccessWithRoleAdmin();
      HOME_PAGE_ACTION.clickOnAdminSelector();
    });
  });
  it("Verify that UI of Home Page display correctly", () => {
    cy.fixture("credential").then((data) => {
      const username = data.username;
      const password = data.password;
    });
  });
});
