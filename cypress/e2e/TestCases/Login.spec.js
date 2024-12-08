import { LoginPageAction } from "../../PageObjects/PageActions/LoginPageAction";

const LOGIN_PAGE_ACTION = new LoginPageAction();
describe("Login Test", () => {
  it("Login with valid credentials", () => {
    cy.fixture("credential").then((data) => {
      const username = data.username;
      const password = data.password;
      console.log(password);
      cy.visitURLSuccessfully();
      LOGIN_PAGE_ACTION.typeUserName(username);
      LOGIN_PAGE_ACTION.typePassword(password);
      LOGIN_PAGE_ACTION.clickOnLoginButton();
    });
  });
});
