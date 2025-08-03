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

    it('Find Element By XPath', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.alertDialog });
        await mainPage.actions.clickOnElement({ selector: mainPage.alertDialog });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.listDialog });
        await mainPage.actions.clickOnElement({ selector: mainPage.listDialog });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.commandTwo });
        await mainPage.actions.clickOnElement({ selector: mainPage.commandTwo });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.selectedCommandTwo });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.selectedCommandTwo, text: 'You selected: 1 , Command two' });
    });

    it('Find Element By UIAutomator', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.alertDialogUiSelector });
        await mainPage.actions.clickOnElement({ selector: mainPage.alertDialogUiSelector });
    })

    it.skip('E2E Flow', async () => {
        // First Flow
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.animationSelector });
        await mainPage.actions.clickOnElement({ selector: mainPage.animationSelector });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.cloningSelector });
        await mainPage.actions.clickOnElement({ selector: mainPage.cloningSelector });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.runSelector });
        await mainPage.actions.clickOnElement({ selector: mainPage.runSelector });
        // Back To Start Stage
        await browser.pause(3000);
        await driver.back();
        await driver.back();
        await browser.pause(1000);
        // Second Flow
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.graphicSelector });
        await mainPage.actions.clickOnElement({ selector: mainPage.graphicSelector });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.arcSelector });
        await mainPage.actions.clickOnElement({ selector: mainPage.arcSelector });
        // Back To Start Stage
        await browser.pause(3000);
        await driver.back();
        await driver.back();
        await browser.pause(1000);
    });
})
