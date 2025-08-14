import { MainPage } from "../../pages/colorNotepadApp/mainPage";

describe('ColorNotepad android application', () => {
    const mainPage: MainPage = new MainPage();

    it('Add, Save & Verify Note', async () => {
        await mainPage.actions.clickOnElement({ selector: mainPage.skipBtn });
        await mainPage.assertions.verifyElementIsDisplayed({ selector: mainPage.addNoteText });
        await mainPage.actions.clickOnElement({ selector: mainPage.addNoteText });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.addWindowTitle });
        await mainPage.actions.clickOnElement({ selector: mainPage.addTextBtn });
        await mainPage.assertions.verifyElementIsDisplayed({ selector: mainPage.editingTitle });
        await mainPage.actions.setValueIntoField({ selector: mainPage.editTextArea, value: 'First\nSecond\nThird' });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.editTextArea, text: 'First\nSecond\nThird' });
        await mainPage.actions.goBack({ times: 2 });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.editBtn });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.savedTextArea, text: 'First\nSecond\nThird' });
        await browser.pause(500);
    });

    it.only('Add, Save, Delete & Verify Note', async () => {
        // Add Note
        await mainPage.actions.clickOnElement({ selector: mainPage.skipBtn });
        await mainPage.assertions.verifyElementIsDisplayed({ selector: mainPage.addNoteText });
        await mainPage.actions.clickOnElement({ selector: mainPage.addNoteText });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.addWindowTitle });
        await mainPage.actions.clickOnElement({ selector: mainPage.addTextBtn });
        await mainPage.assertions.verifyElementIsDisplayed({ selector: mainPage.editingTitle });
        const validText: string = 'Fav Anime List';
        await mainPage.actions.setValueIntoField({ selector: mainPage.editTextArea, value: validText });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.editTextArea, text: validText });
        // Save Note
        await mainPage.actions.goBack({ times: 2 });
        await mainPage.assertions.verifyElementIsExisting({ selector: mainPage.editBtn });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.savedTextArea, text: validText });
        // Delete Note
        await mainPage.actions.goBack({ times: 1 });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.noteListItem, text: validText });
        await mainPage.actions.clickOnElement({ selector: mainPage.noteListItem });
        await mainPage.actions.clickOnElement({ selector: mainPage.threeDotBtn });
        await mainPage.actions.clickOnElement({ selector: mainPage.deleteBtn });
        await mainPage.actions.clickOnElement({ selector: mainPage.confirmDeleteBtn });
        await mainPage.assertions.verifyElementIsNotExisting({ selector: mainPage.noteListItem });
        // Verify Deletion
        await mainPage.actions.clickOnElement({ selector: mainPage.menuBtn });
        await mainPage.actions.clickOnElement({ selector: mainPage.trashCanOptionBtn });
        await mainPage.assertions.verifyElementIsDisplayed({ selector: mainPage.noteListItem });
        await mainPage.assertions.verifyElementHaveText({ selector: mainPage.noteListItem, text: validText });
        await browser.pause(500);
    });
});
