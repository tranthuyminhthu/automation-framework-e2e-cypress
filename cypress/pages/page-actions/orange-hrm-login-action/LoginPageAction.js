// PageActions/LoginPageAction.js
import { LoginPageElement } from "../../page-elements/orange-hrm-login-element/LoginPageElement";

const LOGIN_PAGE_ELEMENT = new LoginPageElement();

export class LoginPageAction {
  getUserName() {
    return cy.get(LoginPageElement.USER_NAME_SELECTOR);
  }

  getPassword() {
    return cy.get(LoginPageElement.PASS_WORD_SELECTOR);
  }

  getLoginButton() {
    return cy.get(LoginPageElement.LOGIN_BUTTON_SELECTOR);
  }

  typeUserName(userName) {
    console.log("username", this.getUserName());
    this.getUserName().type(userName);
  }

  typePassword(password) {
    this.getPassword().type(password);
  }

  clickOnLoginButton() {
    this.getLoginButton().click();
  }
}
