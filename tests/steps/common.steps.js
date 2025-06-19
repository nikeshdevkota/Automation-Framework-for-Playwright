const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const credentials = require('./credentials.json');
const { baseUrl } = require('../config');

setDefaultTimeout(20000); // 20 seconds

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});

Given('I am on the SauceDemo login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto(baseUrl);
});

When('I login with valid credentials', async function () {
  await this.loginPage.login(credentials.valid.username, credentials.valid.password);
  this.inventoryPage = new InventoryPage(this.page);
});

When('I login with invalid credentials set {int}', async function (index) {
  const invalid = credentials.invalid[index];
  await this.loginPage.login(invalid.username, invalid.password);
});

When('I login with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
  this.inventoryPage = new InventoryPage(this.page);
});

Then('I should be redirected to the inventory page', async function () {
  expect(await this.inventoryPage.validateHeader()).toBeTruthy();
  expect(await this.inventoryPage.isInventoryListVisible()).toBeTruthy();
});

Then('I should see a login error message', async function () {
  expect(await this.loginPage.isErrorMessageVisible()).toBeTruthy();
});

Then('the login page header should be visible', async function () {
  expect(await this.loginPage.validateHeader()).toBeTruthy();
  expect(await this.loginPage.areFieldsVisible()).toBeTruthy();
});

Then('the inventory page header should be visible', async function () {
  expect(await this.inventoryPage.validateHeader()).toBeTruthy();
}); 