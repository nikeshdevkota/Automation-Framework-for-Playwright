exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.header = '.title';
    this.checkoutButton = '#checkout';
    this.cartList = '.cart_list';
  }
  async checkout() {
    await this.page.click(this.checkoutButton);
  }
  async validateHeader() {
    return await this.page.isVisible(this.header);
  }
  async isCartListVisible() {
    return await this.page.isVisible(this.cartList);
  }
}; 