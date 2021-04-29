import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends Page {
    /**
     * define selectors using getter methods
     */
    get fistClip () { return $('[class="preview-box-view"]')}
    get iconPlay () {return $('[class="icon icon-Play  ready   "]')}
    get btnPauseVideo() {return $('[class="play-button-container"]')}

    async playFirstClip () {
        await (await this.fistClip).waitForClickable({ timeout: 5000 });
        await (await this.fistClip).click();
        await (await this.iconPlay).waitForClickable({ timeout: 5000 });
        await (await this.iconPlay).click();
        await (await this.btnPauseVideo).waitForDisplayed({ timeout: 100000 });
    }
}
export default new homePage();
