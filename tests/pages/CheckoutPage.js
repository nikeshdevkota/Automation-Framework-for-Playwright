exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.header = '.title';
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.checkoutInfoForm = '.checkout_info';
  }
  async enterInfo(first, last, zip) {
    await this.page.fill(this.firstNameInput, first);
    await this.page.fill(this.lastNameInput, last);
    await this.page.fill(this.postalCodeInput, zip);
    await this.page.click(this.continueButton);
  }
  async validateHeader() {
    return await this.page.isVisible(this.header);
  }
  async isCheckoutInfoFormVisible() {
    return await this.page.isVisible(this.checkoutInfoForm);
  }
}; 