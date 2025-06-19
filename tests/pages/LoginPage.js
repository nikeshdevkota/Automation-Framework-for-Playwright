exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.header = '.login_logo'; // Example header selector
    this.errorMessage = '[data-test="error"]';
  }
  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
  async validateHeader() {
    return await this.page.isVisible(this.header);
  }
  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
  async isErrorMessageVisible() {
    return await this.page.isVisible(this.errorMessage);
  }
  async clearFields() {
    await this.page.fill(this.usernameInput, '');
    await this.page.fill(this.passwordInput, '');
  }
  async isLoginButtonEnabled() {
    return await this.page.isEnabled(this.loginButton);
  }
  async areFieldsVisible() {
    const usernameVisible = await this.page.isVisible(this.usernameInput);
    const passwordVisible = await this.page.isVisible(this.passwordInput);
    return usernameVisible && passwordVisible;
  }
}; 