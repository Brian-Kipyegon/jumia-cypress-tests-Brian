


export class SearchPage {

    searchForProduct(product) {
        // Types product name in the search field
        cy.get('#fi-q').type(product, { force: true });
        cy.wait(1000);
        // Clicks the search button
        cy.get('[class="btn _prim _md -mls -fsh0"]').click({ force: true });
        cy.wait(1000);
    }

    searchForProductAndVerifyResults(product) {
        // Search for a product.
        this.searchForProduct(product);
        cy.contains(product);
        cy.wait(1500);
    }

    searchForNonExistingProductAndVerifyResults(product) {
        // Search for a product.
        this.searchForProduct(product);
        cy.wait(1500);
        // Verifies there are no search results.
        cy.contains('There are no results for “kodfjaiesadfasli”.');
        cy.wait(1500);
    }

    // Search for a product and navigate to the product details page.
    searchForProductNaviteToDetailsPage(product) {

        //search for the product
        this.searchForProduct(product);
        cy.wait(3000);

        // Save the product name.
        let productName;
        cy.get("h3[class='name']").first().invoke("text").then((text) => {
            productName = text;
            cy.wait(1000);
            console.log(productName);
            // Navigate to the product details page.
            cy.get('.core').first().click({ force: true });
            cy.wait(1500);

            // Verify that the product details page has the product name.
            cy.contains(productName);
            cy.wait(1500);
        });
    }

}

export const searchPage = new SearchPage();