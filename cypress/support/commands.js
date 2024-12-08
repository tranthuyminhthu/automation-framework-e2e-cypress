// visit URL
import * as Contants from '../constant';
Cypress.Commands.add('visitURLSuccessfully', (url) => {
    cy.visit(Contants.URL);
});

Cypress.Commands.add('loginSuccessWithRoleAdmin', (url) => {
    cy.visit(Contants.URL);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin12');
})
