import MainPage from "../../pages/apiDemosApp/mainPage";
import AppPage from "../../pages/apiDemosApp/appPage";
import AlertDialogPage from "../../pages/apiDemosApp/alertDialogPage";
import ViewsPage from "../../pages/apiDemosApp/viewsPage";
import SecureDialogPage from "../../pages/apiDemosApp/secureDialogPage";
import ListDialogWindow from "../../pages/apiDemosApp/listDialogWindow";
import AlertDialogWindow from "../../pages/apiDemosApp/alertDialogWindow";
import CalendarWindow from "../../pages/apiDemosApp/calendarWindow";

describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.app });
        await AppPage.assertions.verifyElementIsExisting({ selector: AppPage.actionBar });
    });

    it.only('Find Element By Class Name', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.apiDemos });
        await MainPage.assertions.verifyElementHaveText({ selector: MainPage.apiDemos, text: 'API Demos' });
    });

    it('Find Element By XPath', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.app });
        await AppPage.assertions.verifyElementIsExisting({ selector: AppPage.alertDialog });
        await AppPage.actions.clickOnElement({ selector: AppPage.alertDialog });
        await AlertDialogPage.assertions.verifyElementIsExisting({ selector: AlertDialogPage.listDialog });
        await AlertDialogPage.actions.clickOnElement({ selector: AlertDialogPage.listDialog });
        await ListDialogWindow.assertions.verifyElementIsExisting({ selector: ListDialogWindow.commandTwo });
        await ListDialogWindow.actions.clickOnElement({ selector: ListDialogWindow.commandTwo });
        await ListDialogWindow.assertions.verifyElementIsExisting({ selector: ListDialogWindow.selectedCommandTwo });
        await ListDialogWindow.assertions.verifyElementHaveText({ selector: ListDialogWindow.selectedCommandTwo, text: 'You selected: 1 , Command two' });
    });

    it('Find Element By UIAutomator', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.app });
        await AppPage.assertions.verifyElementIsExisting({ selector: AppPage.alertDialogUiSelector });
        await AppPage.actions.clickOnElement({ selector: AppPage.alertDialogUiSelector });
    })

    it('Find Multiple elements', async () => {
        const textContents = await MainPage.actions.getMultipleElementsTextContent({ selector: MainPage.elementList });
        MainPage.assertions.verifyArrayContainsMultipleValue(textContents, 'Accessibility', 'Animation', 'Preference');
    });

    it('Set Value Into Country Input Field', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.views });
        await ViewsPage.actions.clickOnElement({ selector: ViewsPage.autoComplete });
        await ViewsPage.actions.clickOnElement({ selector: ViewsPage.screenTop });
        await ViewsPage.actions.setValueIntoField({ selector: ViewsPage.countryInput, value: 'Canada' });
        await ViewsPage.assertions.verifyElementHaveText({ selector: ViewsPage.countryInput, text: 'Canada' });
    });

    it('Navigate To Specific Page Directly', async () => {
        await MainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.app.AlertDialogSamples' });
        await AlertDialogPage.assertions.verifyElementIsExisting({ selector: AlertDialogPage.listDialog });
    });

    it('Test Ok & Cancel Dialog window without - Clicking', async () => {
        await MainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.app.AlertDialogSamples' });
        await AlertDialogPage.assertions.verifyElementIsExisting({ selector: AlertDialogPage.okCancelDialog });
        // Accept Flow
        await AlertDialogPage.actions.clickOnElement({ selector: AlertDialogPage.okCancelDialog });
        await AlertDialogWindow.assertions.verifyElementIsExisting({ selector: AlertDialogWindow.alertDialogWindow });
        await AlertDialogWindow.actions.acceptAlert();
        await AlertDialogWindow.assertions.verifyElementIsNotExisting({ selector: AlertDialogWindow.alertDialogWindow });
        // Dismiss Flow
        await AlertDialogPage.actions.clickOnElement({ selector: AlertDialogPage.okCancelDialog });
        await AlertDialogWindow.assertions.verifyElementIsExisting({ selector: AlertDialogWindow.alertDialogWindow });
        await AlertDialogWindow.actions.dismissAlert();
        await AlertDialogWindow.assertions.verifyElementIsNotExisting({ selector: AlertDialogWindow.alertDialogWindow });
    });

    it('Test Ok & Cancel Dialog window with - Clicking + Title Content', async () => {
        await MainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.app.AlertDialogSamples' });
        await AlertDialogPage.assertions.verifyElementIsExisting({ selector: AlertDialogPage.okCancelDialog });
        // Accept Flow
        await AlertDialogPage.actions.clickOnElement({ selector: AlertDialogPage.okCancelDialog });
        await AlertDialogWindow.assertions.verifyElementIsExisting({ selector: AlertDialogWindow.alertDialogWindow });
        await AlertDialogWindow.actions.clickOnElement({ selector: AlertDialogWindow.okBtn });
        await AlertDialogWindow.assertions.verifyElementIsNotExisting({ selector: AlertDialogWindow.alertDialogWindow });
        // Dismiss Flow
        await AlertDialogPage.actions.clickOnElement({ selector: AlertDialogPage.okCancelDialog });
        await AlertDialogWindow.assertions.verifyElementIsExisting({ selector: AlertDialogWindow.alertDialogWindow });
        await AlertDialogWindow.actions.clickOnElement({ selector: AlertDialogWindow.cancelBtn });
        await AlertDialogWindow.assertions.verifyElementIsNotExisting({ selector: AlertDialogWindow.alertDialogWindow });
        // Title Content
        await AlertDialogPage.actions.clickOnElement({ selector: AlertDialogPage.okCancelDialog });
        const titleText: string = await AlertDialogWindow.actions.getAlertText();
        await AlertDialogWindow.assertions.verifyAlertText({ alertText: titleText });
    });

    it('Test Verical Scrolling - ScrollToEnd', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.app });
        await MainPage.actions.clickOnElement({ selector: MainPage.activity });
        await MainPage.actions.scrollToEnd({ scrollable: MainPage.selectorFactory.getScrollable(), direction: 'vertical' });
        await SecureDialogPage.actions.clickOnElement({ selector: SecureDialogPage.secureSurfaces });
        await SecureDialogPage.assertions.verifyElementIsExisting({ selector: SecureDialogPage.secureDialog });
    });

    it('Test Verical Scrolling - ScrollTextIntoView', async () => {
        await MainPage.actions.clickOnElement({ selector: MainPage.app });
        await MainPage.actions.clickOnElement({ selector: MainPage.activity });
        await MainPage.actions.scrollTextIntoView({ scrollable: MainPage.selectorFactory.getScrollable(), text: 'Secure Surfaces' });
        await SecureDialogPage.actions.clickOnElement({ selector: SecureDialogPage.secureSurfaces });
        await SecureDialogPage.assertions.verifyElementIsExisting({ selector: SecureDialogPage.secureDialog });
    });

    it('Test Horizontal Scrolling - ScrollToEnd', async () => {
        await MainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.view.Gallery1' });
        await MainPage.actions.scrollToEnd({ scrollable: MainPage.selectorFactory.getScrollable(), direction: 'horizontal', aim: 'front' });
        await MainPage.actions.scrollToEnd({ scrollable: MainPage.selectorFactory.getScrollable(), direction: 'horizontal', aim: 'back' });
    });

    it('Test Picking Date from calendar modal window', async () => {
        // Navigate and verify page
        await MainPage.actions.navigateToSpecificPageDirectly({ packageName: 'io.appium.android.apis', appActivity: '.view.DateWidgets1' });
        await CalendarWindow.assertions.verifyElementIsExisting({ selector: CalendarWindow.currentDate });
        const currentDateContent: string = await CalendarWindow.actions.getElementTextContent({ selector: CalendarWindow.currentDate });
        const today = new Date();
        await CalendarWindow.assertions.verifyElementContainsText({ selector: CalendarWindow.currentDate, text: `${today.getDay()}` });
        // Click and verify calendar window
        await CalendarWindow.actions.clickOnElement({ selector: CalendarWindow.changeDateBtn });
        await CalendarWindow.assertions.verifyElementIsExisting({ selector: CalendarWindow.window });
        await CalendarWindow.actions.scrollToEnd({ scrollable: MainPage.selectorFactory.getScrollable(), direction: 'horizontal', aim: 'front' });
        // Choose 10 day and Verify
        await CalendarWindow.actions.clickOnElement({ selector: CalendarWindow.tenthDay });
        await CalendarWindow.actions.clickOnElement({ selector: CalendarWindow.okBtn });
        await CalendarWindow.assertions.verifyElementContainsText({ selector: CalendarWindow.currentDate, text: '10' });
        const chosenDateContent: string = await CalendarWindow.actions.getElementTextContent({ selector: CalendarWindow.currentDate });
        CalendarWindow.assertions.verifyNotEqual({ value1: currentDateContent, value2: chosenDateContent });
    });
})
