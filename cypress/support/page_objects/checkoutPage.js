import { cartPage } from "./cartPage";

export class CheckoutPage {

    checkoutProduct(product) {
        // Adds a product to the cart
        cartPage.addProductToCart(product);
        // Nagite to the cart page
        cy.get("[class='-df -i-ctr -gy9 -hov-or5 -phs -fs16']").click({ force: true });
        cy.wait(2000);
        // Click on the checkout button
        cy.get("[class='btn _prim _md -fw']").click({ force: true });
        cy.wait(2000);
        // Type my email on the login page
        cy.get("[id='input_identifierValue']").type("bryancheru4@gmail.com");
        cy.wait(2000);
        // click the submit button
        cy.get("button[class='mdc-button mdc-button--touch mdc-button--raised access-btn']").click();
        cy.wait(500);
        // Verify the page that the page prompts for email verification.
        cy.contains("Verify your email address");
    }

}

export const checkoutPage = new CheckoutPage();