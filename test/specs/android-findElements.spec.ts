import { MainPage } from "../pages/mainPage";
import { AppPage } from "../pages/appPage";
import { AlertDialogPage } from "../pages/alertDialogPage";
import { ViewsPage } from "../pages/viewsPage";
import { ListDialogWindow } from "../pages/listDialogWindow";
import { AlertDialogWindow } from "../pages/alertDialogWindow";

describe('Android Elements Tests', () => {
    const mainPage: MainPage = new MainPage();
    const appPage: AppPage = new AppPage();
    const alertDialogPage: AlertDialogPage = new AlertDialogPage();
    const viewsPage: ViewsPage = new ViewsPage();
    const listDialogWindow: ListDialogWindow = new ListDialogWindow();
    const alertDialogWindow: AlertDialogWindow = new AlertDialogWindow();

    it('Find element by accessibility id', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await appPage.assertions.verifyElementIsExisting({ selector: appPage.actionBar });
    });

    it('Find Element By Class Name', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.apiDemos });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.apiDemos, text: 'API Demos' });
    });

    it('Find Element By XPath', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await appPage.assertions.verifyElementIsExisting({ selector: appPage.alertDialog });
        await appPage.actions.clickOnElement({ selector: appPage.alertDialog });
        await alertDialogPage.assertions.verifyElementIsExisting({ selector: alertDialogPage.listDialog });
        await alertDialogPage.actions.clickOnElement({ selector: alertDialogPage.listDialog });
        await listDialogWindow.assertions.verifyElementIsExisting({ selector: listDialogWindow.commandTwo });
        await listDialogWindow.actions.clickOnElement({ selector: listDialogWindow.commandTwo });
        await listDialogWindow.assertions.verifyElementIsExisting({ selector: listDialogWindow.selectedCommandTwo });
        await listDialogWindow.assertions.verifyElementHaveText({ selector: listDialogWindow.selectedCommandTwo, text: 'You selected: 1 , Command two' });
    });

    it('Find Element By UIAutomator', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await appPage.assertions.verifyElementIsExisting({ selector: appPage.alertDialogUiSelector });
        await appPage.actions.clickOnElement({ selector: appPage.alertDialogUiSelector });
    })

    it('Find Multiple elements', async () => {
        const textContents = await mainPage.actions.getMultipleElementsTextContent({ selector: mainPage.elementList });
        mainPage.assertions.verifyArrayContainsMultipleValue(textContents, 'Accessibility', 'Animation', 'Preference');
    });

    it('Set Value Into Country Input Field', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.views });
        await viewsPage.actions.clickOnElement({ selector: viewsPage.autoComplete });
        await viewsPage.actions.clickOnElement({ selector: viewsPage.screenTop });
        await viewsPage.actions.setValueIntoField({ selector: viewsPage.countryInput, value: 'Canada' });
        await viewsPage.assertions.verifyElementHaveText({ selector: viewsPage.countryInput, text: 'Canada' });
    });

    it('Navigate To Specific Page Directly', async () => {
        await mainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.app.AlertDialogSamples' });
        await alertDialogPage.assertions.verifyElementIsExisting({ selector: alertDialogPage.listDialog });
    });

    it('Test Ok & Cancel Dialog window without - Clicking', async () => {
        await mainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.app.AlertDialogSamples' });
        await alertDialogPage.assertions.verifyElementIsExisting({ selector: alertDialogPage.okCancelDialog });
        // Accept Flow
        await alertDialogPage.actions.clickOnElement({ selector: alertDialogPage.okCancelDialog });
        await alertDialogWindow.assertions.verifyElementIsExisting({ selector: alertDialogWindow.alertDialogWindow });
        await alertDialogWindow.actions.acceptAlert();
        await alertDialogWindow.assertions.verifyElementIsNotExisting({ selector: alertDialogWindow.alertDialogWindow });
        // Dismiss Flow
        await alertDialogPage.actions.clickOnElement({ selector: alertDialogPage.okCancelDialog });
        await alertDialogWindow.assertions.verifyElementIsExisting({ selector: alertDialogWindow.alertDialogWindow });
        await alertDialogWindow.actions.dismissAlert();
        await alertDialogWindow.assertions.verifyElementIsNotExisting({ selector: alertDialogWindow.alertDialogWindow });
    });

    it('Test Ok & Cancel Dialog window with - Clicking + Title Content', async () => {
        await mainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.app.AlertDialogSamples' });
        await alertDialogPage.assertions.verifyElementIsExisting({ selector: alertDialogPage.okCancelDialog });
        // Accept Flow
        await alertDialogPage.actions.clickOnElement({ selector: alertDialogPage.okCancelDialog });
        await alertDialogWindow.assertions.verifyElementIsExisting({ selector: alertDialogWindow.alertDialogWindow });
        await alertDialogWindow.actions.clickOnElement({ selector: alertDialogWindow.okBtn });
        await alertDialogWindow.assertions.verifyElementIsNotExisting({ selector: alertDialogWindow.alertDialogWindow });
        // Dismiss Flow
        await alertDialogPage.actions.clickOnElement({ selector: alertDialogPage.okCancelDialog });
        await alertDialogWindow.assertions.verifyElementIsExisting({ selector: alertDialogWindow.alertDialogWindow });
        await alertDialogWindow.actions.clickOnElement({ selector: alertDialogWindow.cancelBtn });
        await alertDialogWindow.assertions.verifyElementIsNotExisting({ selector: alertDialogWindow.alertDialogWindow });
        // Title Content
        await alertDialogPage.actions.clickOnElement({ selector: alertDialogPage.okCancelDialog });
        const titleText: string = await alertDialogWindow.actions.getAlertText();
        await alertDialogWindow.assertions.verifyAlertText({ alertText: titleText });
    });

    it.only('Test Verical Scrolling', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.app });
        await mainPage.actions.clickOnElement({ selector: mainPage.activity });
        await mainPage.actions.scrollToScrollable(mainPage.selectorFactory.getScrollableElement());
        await mainPage.actions.clickOnElement({ selector: mainPage.secureSurfaces });
    });
})
