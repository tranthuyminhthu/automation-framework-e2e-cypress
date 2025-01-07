import { UserManagementElement } from "../../page-elements/orange-hrm-admin-element/UserManagementElement";
const USER_MANAGEMENT_ELEMENT = new UserManagementElement();
export class UserManagementAction {
  getUserNameInput() {
    return cy.contains("label", "Username").parent().siblings().find("input");
  }
  typeUserName(userName) {
    this.getUserNameInput().type(userName);
  }
}
