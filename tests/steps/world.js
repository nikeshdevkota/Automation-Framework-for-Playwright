const { setWorldConstructor, World } = require('@cucumber/cucumber');
const path = require('path');

class CustomWorld extends World {
  async openBrowser() {
    const browserType = process.env.PW_BROWSER || 'chromium';
    const headless = process.env.HEADLESS !== 'false'; // default true
    this.browser = await require('playwright')[browserType].launch({ headless });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 },
      // recordVideo: {
      //   dir: path.join(__dirname, '../../videos'),
      //   size: { width: 1920, height: 1080 }
      // }
    });
    this.page = await this.context.newPage();
    // No need to setViewportSize again, as context is already set to max
  }
  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld); 