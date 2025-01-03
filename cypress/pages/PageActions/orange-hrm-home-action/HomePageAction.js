import { HomePageElement } from "../../PageElements/orange-hrm-home-element/HomePageElement";
const HOME_PAGE_ELEMENT = new HomePageElement();
export class HomePageAction {
  getAdminSelector() {
    return cy
      .get(HOME_PAGE_ELEMENT.MAIN_MENU_SELECTOR)
      .contains(HOME_PAGE_ELEMENT.ADMIN);
  }

  getPIMSelector() {
    return cy.get(HOME_PAGE_ELEMENT.PIM_SELECTOR);
  }

  getLeaveSelector() {
    return cy.get(HOME_PAGE_ELEMENT.LEAVE_SELECTOR);
  }

  getTimeSelector() {
    return cy.get(HOME_PAGE_ELEMENT.TIME_SELECTOR);
  }

  getRecruitmentSelector() {
    return cy.get(HOME_PAGE_ELEMENT.RECRUITMENT_SELECTOR);
  }

  getMyInfoSelector() {
    return cy.get(HOME_PAGE_ELEMENT.MY_INFO_SELECTOR);
  }

  getPerformanceSelector() {
    return cy.get(HOME_PAGE_ELEMENT.PERFORMANCE_SELECTOR);
  }

  getDashboardSelector() {
    return cy.get(HOME_PAGE_ELEMENT.DASHBOARD_SELECTOR);
  }

  getDirectorySelector() {
    return cy.get(HOME_PAGE_ELEMENT.DIRECTORY_SELECTOR);
  }

  getMaintenanceSelector() {
    return cy.get(HOME_PAGE_ELEMENT.MAINTENANCE_SELECTOR);
  }

  getClamSelector() {
    return cy.get(HOME_PAGE_ELEMENT.CLAIM_SELECTOR);
  }

  getBuzzSelector() {
    return cy.get(HOME_PAGE_ELEMENT.BUZZ_SELECTOR);
  }

  clickOnAdminSelector() {
    this.getAdminSelector().click();
  }

  clickOnPIMSelector() {
    this.getPIMSelector().click();
  }

  clickOnLeaveSelector() {
    this.getLeaveSelector().click();
  }

  clickOnTimeSelector() {
    this.getTimeSelector().click();
  }

  clickOnRecruitmentSelector() {
    this.getRecruitmentSelector().click();
  }

  clickOnMyInfoSelector() {
    this.getMyInfoSelector().click();
  }

  clickOnPerformanceSelector() {
    this.getPerformanceSelector().click();
  }

  clickOnDashboardSelector() {
    this.getDashboardSelector().click();
  }

  clickOnDirectorySelector() {
    this.getDirectorySelector().click();
  }

  clickOnMaintenanceSelector() {
    this.getMaintenanceSelector().click();
  }

  clickOnDirectorySelector() {
    this.getDirectorySelector().click();
  }

  clickOnClaimSelector() {
    this.getClamSelector().click();
  }

  clickOnBuzzSelector() {
    this.getBuzzSelector().click();
  }
}
