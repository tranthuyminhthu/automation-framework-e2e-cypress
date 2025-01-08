import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { HomePageAction } from '../../../pages/page-actions/orange-hrm-home-action/HomePageAction';

const HOME_PAGE_ACTION = new HomePageAction();

Given("I am on the login page", ()=> {
    cy.visitURLSuccessfully();

})

When("I login with username {string} and password {string}", ()=> {
    cy.loginSuccessWithRoleAdmin();
})

Then("System will show Dashboard page", ()=> {
    HOME_PAGE_ACTION.getMainMenu().find('span').contains('Dashboard').should('be.visible');
    
})