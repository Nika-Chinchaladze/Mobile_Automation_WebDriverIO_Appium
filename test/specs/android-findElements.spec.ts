import { MainPage } from "../pages/mainPage";

describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        const mainPage: MainPage = new MainPage();
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.actionBar });
    })
})
