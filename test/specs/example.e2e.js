import loginPage from  '../pageobjects/login.page';
import homePage from '../pageobjects/home.page';

describe('I am able to see clip', () => {
    it('should login with valid credentials and see clip', async () => {
        await loginPage.open();
        await loginPage.login('mykola.glavach@gmail.com', '211286Kola');
        await homePage.playFirstClip();
        const $pauseVideoButton = await $('[class="play-button-container"]');
        await expect($pauseVideoButton).toBeDisplayed();
    });
});


