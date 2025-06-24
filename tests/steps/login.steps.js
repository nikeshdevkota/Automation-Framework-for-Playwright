const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const credentials = require('./credentials.json');

When('I login with invalid credentials set {int}', async function (index) {
  const invalid = credentials.invalid[index];
  await this.loginPage.login(invalid.username, invalid.password);
});

Then('I should see a login error message', async function () {
  expect(await this.loginPage.isErrorMessageVisible()).toBeTruthy();
});

Then('the login page header should be visible', async function () {
  expect(await this.loginPage.validateHeader()).toBeTruthy();
  expect(await this.loginPage.areFieldsVisible()).toBeTruthy();
}); 