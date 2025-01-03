import { HomePageElement } from "../../PageObjects/PageElements/HomePageElement";
export class HomePageAction {
  getAdminSelector() {
    return cy.get(HomePageElement.MAIN_MENU_SELECTOR).contains(HomePageElement.ADMIN);
  }

  getPIMSelector() {
    return cy.get(HomePageElement.PIM_SELECTOR);
  }

  getLeaveSelector() {
    return cy.get(HomePageElement.LEAVE_SELECTOR);
  }

  getTimeSelector() {
    return cy.get(HomePageElement.TIME_SELECTOR);
  }

  getRecruitmentSelector() {
    return cy.get(HomePageElement.RECRUITMENT_SELECTOR);
  }

  getMyInfoSelector() {
    return cy.get(HomePageElement.MY_INFO_SELECTOR);
  }

  getPerformanceSelector() {
    return cy.get(HomePageElement.PERFORMANCE_SELECTOR);
  }

  getDashboardSelector() {
    return cy.get(HomePageElement.DASHBOARD_SELECTOR);
  }

  getDirectorySelector() {
    return cy.get(HomePageElement.DIRECTORY_SELECTOR);
  }

  getMaintenanceSelector() {
    return cy.get(HomePageElement.MAINTENANCE_SELECTOR);
  }

  getClamSelector() {
    return cy.get(HomePageElement.CLAIM_SELECTOR);
  }

  getBuzzSelector() {
    return cy.get(HomePageElement.BUZZ_SELECTOR);
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
