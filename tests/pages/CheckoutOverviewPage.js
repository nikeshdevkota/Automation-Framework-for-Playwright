exports.CheckoutOverviewPage = class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.header = '.title';
    this.finishButton = '#finish';
    this.summaryInfo = '.summary_info';
  }
  async finish() {
    await this.page.click(this.finishButton);
  }
  async validateHeader() {
    return await this.page.isVisible(this.header);
  }
  async isSummaryInfoVisible() {
    return await this.page.isVisible(this.summaryInfo);
  }
}; 