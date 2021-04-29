import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('#username')}
    get inputPassword () { return $('#password')}
    get btnSubmit () { return $('//*[@type="submit"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputEmail).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).waitForClickable({ timeout: 3000 });
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}
export default new loginPage();
