import { searchPage } from "./searchPage";

export class CartPage {
    addProductToCart(product) {
        searchPage.searchForProduct(product);
        cy.get(".core").first().click();
        cy.wait(1000);
        cy.get("button[class='add btn _prim -pea _i -fw']").click({ force: true });
        cy.wait(2000);
    }

    addProductToCartFromSearchPageAndVerify(product) {
        // adding prduct to cart
        this.addProductToCart(product);
        // navigating to the cart page
        cy.get("[class='-df -i-ctr -gy9 -hov-or5 -phs -fs16']").click({ force: true });
        cy.wait(2000);
        // cy.contains(productName);
        cy.wait(2000);
    }

    removeProductFromCartAndVerify() {
        // Adding product to cart
        this.addProductToCart("iphone");
        // Navigating to the cart page
        cy.get("[class='-df -i-ctr -gy9 -hov-or5 -phs -fs16']").click({ force: true });
        cy.wait(2000);
        // Clicking on the remove button
        cy.get("button[class='btn _def _ti -mra']").click({ force: true });
        cy.wait(2000);
        // confirming the removal
        cy.get("button[class='btn _prim _i -fw -fh']").click({ force: true });
        cy.wait(2000);
        // Verifying the cart is empty.
        cy.contains("Your cart is empty!");
        cy.wait(2000);
        // Clicking on the start shopping button.
        cy.get("a[class='btn _prim -mtl']").click({ force: true });
        cy.wait(2000);
    }
}

export const cartPage = new CartPage();