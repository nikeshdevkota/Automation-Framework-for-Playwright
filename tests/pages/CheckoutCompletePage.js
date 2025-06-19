exports.CheckoutCompletePage = class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.header = '.title';
    this.completeHeader = '.complete-header';
    this.completeText = '.complete-text';
  }
  async isOrderComplete() {
    return this.page.isVisible(this.completeHeader);
  }
  async validateHeader() {
    return await this.page.isVisible(this.header);
  }
  async isCompleteTextVisible() {
    return await this.page.isVisible(this.completeText);
  }
}; 