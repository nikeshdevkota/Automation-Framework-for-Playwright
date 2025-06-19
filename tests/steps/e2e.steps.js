const { When, Then } = require('@cucumber/cucumber');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CheckoutOverviewPage } = require('../pages/CheckoutOverviewPage');
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');
const { expect } = require('@playwright/test');

When('I add the first item to the cart', async function () {
  await this.inventoryPage.addFirstItemToCart();
  await this.inventoryPage.goToCart();
  this.cartPage = new CartPage(this.page);
});

When('I proceed to checkout', async function () {
  await this.cartPage.checkout();
  this.checkoutPage = new CheckoutPage(this.page);
});

When('I enter checkout information {string} {string} {string}', async function (first, last, zip) {
  await this.checkoutPage.enterInfo(first, last, zip);
  this.checkoutOverviewPage = new CheckoutOverviewPage(this.page);
});

When('I finish the order', async function () {
  await this.checkoutOverviewPage.finish();
  this.checkoutCompletePage = new CheckoutCompletePage(this.page);
});

Then('I should see the order confirmation', async function () {
  expect(await this.checkoutCompletePage.isOrderComplete()).toBeTruthy();
});

Then('the checkout complete page header should be visible', async function () {
  expect(await this.checkoutCompletePage.validateHeader()).toBeTruthy();
  expect(await this.checkoutCompletePage.isCompleteTextVisible()).toBeTruthy();
}); 