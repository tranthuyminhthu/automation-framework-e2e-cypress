
import { UserManagementAction } from "../../../pages/PageActions/orange-hrm-admin-action/UserManagementAction";
const USER_MANAGEMENT_ACTION = new UserManagementAction()
describe("Functional Testing", () => {
  beforeEach(() => {
    cy.loginSuccessWithRoleAdmin();
    cy.navigateToAdminPage();
  });
  it.only("Verify that a user is added successfully when logged in with the admin role", () => {
    USER_MANAGEMENT_ACTION.typeUserName("thuuuuuuuu")
  });

  it("Verify that the search function works successfully when logged in with the admin role", () => {});

  it("Verify that the reset function works successfully when logged in with the admin role", () => {});

  it("Verify that a user is deleted successfully when clicking on the delete icon in the 'Actions' column", () => {});

  it("Verify that a user or multiple users are deleted successfully based on the selected checkboxes", () => {});

  it("Verify that the Admin user cannot be deleted when the Admin is logged in", () => {});

  it("Verify that the user is modified successfully when editing with valid data", () => {});
});
