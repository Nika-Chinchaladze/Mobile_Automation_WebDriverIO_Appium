import { MainPage } from "../pages/mainPage";

describe('Android Elements Tests', () => {
    const mainPage: MainPage = new MainPage();

    it('Find element by accessibility id', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.actionBar });
    });

    it('Find Element By Class Name', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.accessibility });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.accessibility, text: 'API Demos' });
    });
})
