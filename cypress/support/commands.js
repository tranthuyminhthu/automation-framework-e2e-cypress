import * as Contants from "../constant";
import { HomePageAction } from "../pages/page-actions/orange-hrm-home-action/HomePageAction";

const HOME_PAGE_ACTION = new HomePageAction();

// Đăng ký lệnh "visitURLSuccessfully" để mở URL
Cypress.Commands.add("visitURLSuccessfully", () => {
  cy.visit(Contants.URL);  // Dùng Contants.URL thay vì tham số url
});

// Đăng ký lệnh "loginSuccessWithRoleAdmin" để đăng nhập với vai trò Admin
Cypress.Commands.add("loginSuccessWithRoleAdmin", () => {
  cy.visit(Contants.URL);  // Mở URL từ Contants.URL
  cy.get('input[name="username"]').type("Admin");  // Nhập tên người dùng
  cy.get('input[name="password"]').type("admin123");  // Nhập mật khẩu
  cy.get('button[type="submit"]').click();  // Thực hiện đăng nhập (giả sử có nút submit)
});

// Đăng ký lệnh "navigateToAdminPage" để điều hướng đến trang quản trị
Cypress.Commands.add("navigateToAdminPage", () => {
  cy.get('selector-to-check').should('be.visible').then(() => {
    HOME_PAGE_ACTION.clickOnAdminSelector();  
  });  // Giả sử HomePageAction có phương thức clickOnAdminSelector()
});
