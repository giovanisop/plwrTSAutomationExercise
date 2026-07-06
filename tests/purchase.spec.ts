/*
import { test } from '@playwright/test';

test('Place Order: Register while Checkout', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I add products to cart", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("Then I verify that cart page is displayed", async () => {});
    await test.step("When I click Proceed To Checkout", async () => {});
    await test.step("When I click 'Register / Login' button", async () => {});
    await test.step("When I fill all details in Signup and create account", async () => {});
    await test.step("Then I verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {});
    await test.step("Then I verify ' Logged in as username' at top", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("When I click 'Proceed To Checkout' button", async () => {});
    await test.step("Then I verify Address Details and Review Your Order", async () => {});
    await test.step("When I enter description in comment text area and click 'Place Order'", async () => {});
    await test.step("When I enter payment details: Name on Card, Card Number, CVC, Expiration date", async () => {});
    await test.step("When I click 'Pay and Confirm Order' button", async () => {});
    await test.step("Then I verify success message 'Your order has been placed successfully!'", async () => {});
    await test.step("When I click 'Delete Account' button", async () => {});
    await test.step("Then I verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {});
});

test('Place Order: Register before Checkout', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click 'Signup / Login' button", async () => {});
    await test.step("When I fill all details in Signup and create account", async () => {});
    await test.step("Then I verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {});
    await test.step("Then I verify ' Logged in as username' at top", async () => {});
    await test.step("When I add products to cart", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("Then I verify that cart page is displayed", async () => {});
    await test.step("When I click Proceed To Checkout", async () => {});
    await test.step("Then I verify Address Details and Review Your Order", async () => {});
    await test.step("When I enter description in comment text area and click 'Place Order'", async () => {});
    await test.step("When I enter payment details: Name on Card, Card Number, CVC, Expiration date", async () => {});
    await test.step("When I click 'Pay and Confirm Order' button", async () => {});
    await test.step("Then I verify success message 'Your order has been placed successfully!'", async () => {});
    await test.step("When I click 'Delete Account' button", async () => {});
    await test.step("Then I verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {});
});

test('Place Order: Login before Checkout', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click 'Signup / Login' button", async () => {});
    await test.step("When I fill email, password and click 'Login' button", async () => {});
    await test.step("Then I verify 'Logged in as username' at top", async () => {});
    await test.step("When I add products to cart", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("Then I verify that cart page is displayed", async () => {});
    await test.step("When I click Proceed To Checkout", async () => {});
    await test.step("Then I verify Address Details and Review Your Order", async () => {});
    await test.step("When I enter description in comment text area and click 'Place Order'", async () => {});
    await test.step("When I enter payment details: Name on Card, Card Number, CVC, Expiration date", async () => {});
    await test.step("When I click 'Pay and Confirm Order' button", async () => {});
    await test.step("Then I verify success message 'Your order has been placed successfully!'", async () => {});
    await test.step("When I click 'Delete Account' button", async () => {});
    await test.step("Then I verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {});
});

test('Verify address details in checkout page', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I click 'Signup / Login' button", async () => {});
    await test.step("When I fill all details in Signup and create account", async () => {});
    await test.step("Then I verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {});
    await test.step("Then I verify ' Logged in as username' at top", async () => {});
    await test.step("When I add products to cart", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("Then I verify that cart page is displayed", async () => {});
    await test.step("When I click Proceed To Checkout", async () => {});
    await test.step("Then I verify that the delivery address is same address filled at the time registration of account", async () => {});
    await test.step("Then I verify that the billing address is same address filled at the time registration of account", async () => {});
    await test.step("When I click 'Delete Account' button", async () => {});
    await test.step("Then I verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {});
});

test('Download Invoice after purchase order', async ({ page }) => {
    await test.step("Given I launch the browser", async () => {});
    await test.step("Given I navigate to url 'http://automationexercise.com'", async () => {});
    await test.step("Then I verify that home page is visible successfully", async () => {});
    await test.step("When I add products to cart", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("Then I verify that cart page is displayed", async () => {});
    await test.step("When I click Proceed To Checkout", async () => {});
    await test.step("When I click 'Register / Login' button", async () => {});
    await test.step("When I fill all details in Signup and create account", async () => {});
    await test.step("Then I verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {});
    await test.step("Then I verify ' Logged in as username' at top", async () => {});
    await test.step("When I click 'Cart' button", async () => {});
    await test.step("When I click 'Proceed To Checkout' button", async () => {});
    await test.step("Then I verify Address Details and Review Your Order", async () => {});
    await test.step("When I enter description in comment text area and click 'Place Order'", async () => {});
    await test.step("When I enter payment details: Name on Card, Card Number, CVC, Expiration date", async () => {});
    await test.step("When I click 'Pay and Confirm Order' button", async () => {});
    await test.step("Then I verify success message 'Your order has been placed successfully!'", async () => {});
    await test.step("Then I click 'Download Invoice' button and verify invoice is downloaded successfully", async () => {});
    await test.step("When I click 'Continue' button", async () => {});
    await test.step("When I click 'Delete Account' button", async () => {});
    await test.step("Then I verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {});
});
*/