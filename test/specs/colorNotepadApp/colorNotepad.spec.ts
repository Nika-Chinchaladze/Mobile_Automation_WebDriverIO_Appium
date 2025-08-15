import MainPage from "../../pages/colorNotepadApp/mainPage";

describe('ColorNotepad android application', () => {

    const addSaveVerifyStep = async () => {
        // Add Note
        await MainPage.actions.clickOnElement({ selector: MainPage.skipBtn });
        await MainPage.assertions.verifyElementIsDisplayed({ selector: MainPage.addNoteText });
        await MainPage.actions.clickOnElement({ selector: MainPage.addNoteText });
        await MainPage.assertions.verifyElementIsExisting({ selector: MainPage.addWindowTitle });
        await MainPage.actions.clickOnElement({ selector: MainPage.addTextBtn });
        await MainPage.assertions.verifyElementIsDisplayed({ selector: MainPage.editingTitle });
        const validText: string = 'Fav Anime List';
        await MainPage.actions.setValueIntoField({ selector: MainPage.editTextArea, value: validText });
        await MainPage.assertions.verifyElementHaveText({ selector: MainPage.editTextArea, text: validText });
        // Save Note
        await MainPage.actions.goBack({ times: 2 });
        await MainPage.assertions.verifyElementIsExisting({ selector: MainPage.editBtn });
        await MainPage.assertions.verifyElementHaveText({ selector: MainPage.savedTextArea, text: validText });
    };

    it.only('Add, Save & Verify Note', async () => {
        await addSaveVerifyStep();
    });

    it('Add, Save, Delete & Verify Note', async () => {
        await addSaveVerifyStep();
        // Delete Note
        const validText: string = 'Fav Anime List';
        await MainPage.actions.goBack({ times: 1 });
        await MainPage.assertions.verifyElementHaveText({ selector: MainPage.noteListItem, text: validText });
        await MainPage.actions.clickOnElement({ selector: MainPage.noteListItem });
        await MainPage.actions.clickOnElement({ selector: MainPage.threeDotBtn });
        await MainPage.actions.clickOnElement({ selector: MainPage.deleteBtn });
        await MainPage.actions.clickOnElement({ selector: MainPage.confirmDeleteBtn });
        await MainPage.assertions.verifyElementIsNotExisting({ selector: MainPage.noteListItem });
        // Verify Deletion
        await MainPage.actions.clickOnElement({ selector: MainPage.menuBtn });
        await MainPage.actions.clickOnElement({ selector: MainPage.trashCanOptionBtn });
        await MainPage.assertions.verifyElementIsDisplayed({ selector: MainPage.noteListItem });
        await MainPage.assertions.verifyElementHaveText({ selector: MainPage.noteListItem, text: validText });
    });
});
