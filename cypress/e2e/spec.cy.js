const { cartPage } = require("../support/page_objects/cartPage");
const { searchPage } = require("../support/page_objects/searchPage");
const { checkoutPage } = require("../support/page_objects/checkoutPage");

describe('Jumia Search functionality spec', () => {
  beforeEach(() => {
    cy.visit("https://www.jumia.co.ke/");
  });

  it('Search for a product and verify search results', () => {
    searchPage.searchForProductAndVerifyResults("laptop");
  });

  it('Search for a product that does not exist and verify the message', () => {
    searchPage.searchForNonExistingProductAndVerifyResults("kodfjaiesadfasli");
  });

  it('Search for a product and navigate to the product details page.', () => {
    searchPage.searchForProductNaviteToDetailsPage("laptop");
  });
})

describe("Jumia cart functionality test suite", () => {
  beforeEach(() => {
    cy.visit("https://www.jumia.co.ke/");
  });

  it("Add a product to the cart from the search results page.", () => {
    cartPage.addProductToCartFromSearchPageAndVerify("iphone");
  });

  it("Remove a product from the cart.", () => {
    cartPage.removeProductFromCartAndVerify();
  });
})

describe("Jumia checkout functionality test suite", () => {
  beforeEach(() => {
    cy.visit("https://www.jumia.co.ke/");
  });

  it("Checkout a product in the cart page", () => {
    checkoutPage.checkoutProduct("iphone");
  });
})
