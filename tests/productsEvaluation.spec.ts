/* import { test } from '@playwright/test';

test('Verify All Products and product detail page', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click on 'Products' button", async () => {});
    await test.step("Then I verify user is navigated to ALL PRODUCTS page successfully", async () => {});
    await test.step("Then I verify the products list is visible", async () => {});
    await test.step("When I click on 'View Product' of first product", async () => {});
    await test.step("Then I verify user is landed to product detail page", async () => {});
    await test.step("Then I verify that detail is visible: product name, category, price, availability, condition, brand", async () => {});
});

test('Search Product', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click on 'Products' button", async () => {});
    await test.step("Then I verify user is navigated to ALL PRODUCTS page successfully", async () => {});
    await test.step("When I enter product name in search input and click search button", async () => {});
    await test.step("Then I verify 'SEARCHED PRODUCTS' is visible", async () => {});
    await test.step("Then I verify all the products related to search are visible", async () => {});
});

test('Add Products in Cart', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click 'Products' button", async () => {});
    await test.step("When I hover over first product and click 'Add to cart'", async () => {});
    await test.step("When I click 'Continue Shopping' button", async () => {});
    await test.step("When I hover over second product and click 'Add to cart'", async () => {});
    await test.step("When I click 'View Cart' button", async () => {});
    await test.step("Then I verify both products are added to Cart", async () => {});
    await test.step("Then I verify their prices, quantity and total price", async () => {});
});

test('Verify Product quantity in Cart', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click 'View Product' for any product on home page", async () => {});
    await test.step("Then I verify product detail is opened", async () => {});
    await test.step("When I increase quantity to 4", async () => {});
    await test.step("When I click 'Add to cart' button", async () => {});
    await test.step("When I click 'View Cart' button", async () => {});
    await test.step("Then I verify that product is displayed in cart page with exact quantity", async () => {});
});

test('Remove Products From Cart', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I add products to cart", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("Then I verify that cart page is displayed", async () => {});
    await test.step("When I click 'X' button corresponding to particular product", async () => {});
    await test.step("Then I verify that product is removed from the cart", async () => {});
});

test('View Category Products', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that categories are visible on left side bar", async () => {});
    await test.step("When I click on 'Women' category", async () => {});
    await test.step("When I click on any category link under 'Women' category, for example: Dress", async () => {});
    await test.step("Then I verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'", async () => {});
    await test.step("When on left side bar, I click on any sub-category link of 'Men' category", async () => {});
    await test.step("Then I verify that user is navigated to that category page", async () => {});
});

test('View & Cart Brand Products', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("When I click on 'Products' button", async () => {});
    await test.step("Then I verify that Brands are visible on left side bar", async () => {});
    await test.step("When I click on any brand name", async () => {});
    await test.step("Then I verify that user is navigated to brand page and brand products are displayed", async () => {});
    await test.step("When on left side bar, I click on any other brand link", async () => {});
    await test.step("Then I verify that user is navigated to that brand page and can see products", async () => {});
});

test('Search Products and Verify Cart After Login', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("When I click on 'Products' button", async () => {});
    await test.step("Then I verify user is navigated to ALL PRODUCTS page successfully", async () => {});
    await test.step("When I enter product name in search input and click search button", async () => {});
    await test.step("Then I verify 'SEARCHED PRODUCTS' is visible", async () => {});
    await test.step("Then I verify all the products related to search are visible", async () => {});
    await test.step("When I add those products to cart", async () => {});
    await test.step("Then I click 'Cart' button and verify that products are visible in cart", async () => {});
    await test.step("When I click 'Signup / Login' button and submit login details", async () => {});
    await test.step("When I again go to Cart page", async () => {});
    await test.step("Then I verify that those products are visible in cart after login as well", async () => {});
});

test('Add review on product', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("When I click on 'Products' button", async () => {});
    await test.step("Then I verify user is navigated to ALL PRODUCTS page successfully", async () => {});
    await test.step("When I click on 'View Product' button", async () => {});
    await test.step("Then I verify 'Write Your Review' is visible", async () => {});
    await test.step("When I enter name, email and review", async () => {});
    await test.step("When I click 'Submit' button", async () => {});
    await test.step("Then I verify success message 'Thank you for your review.'", async () => {});
});

test('Add to cart from Recommended items', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("When I scroll to bottom of page", async () => {});
    await test.step("Then I verify 'RECOMMENDED ITEMS' are visible", async () => {});
    await test.step("When I click on 'Add To Cart' on Recommended product", async () => {});
    await test.step("When I click on 'View Cart' button", async () => {});
    await test.step("Then I verify that product is displayed in cart page", async () => {});
});
*/