exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.header = '.title';
    this.firstItemButton = '.inventory_item button';
    this.cartLink = '.shopping_cart_link';
    this.inventoryList = '.inventory_list';
  }
  async addFirstItemToCart() {
    await this.page.click(this.firstItemButton);
  }
  async goToCart() {
    await this.page.click(this.cartLink);
  }
  async validateHeader() {
    return await this.page.isVisible(this.header);
  }
  async isInventoryListVisible() {
    return await this.page.isVisible(this.inventoryList);
  }
}; 