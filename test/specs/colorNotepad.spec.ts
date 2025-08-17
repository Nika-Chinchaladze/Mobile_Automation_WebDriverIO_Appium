import HomePage from '../pom/pages/home.page';
import EditPage from '../pom/pages/edit.page';
import SavedPage from '../pom/pages/saved.page';
import TrashPage from '../pom/pages/trash.page';
import AddWindow from '../pom/windows/add.window';
import DeleteWindow from '../pom/windows/delete.window';

describe('ColorNotepad android application', () => {
  it('Add, Save, Delete & Verify Note', async () => {
    // HomePage
    await HomePage.actions.clickOnElement({ selector: HomePage.skipBtn });
    await HomePage.assertions.verifyElementIsDisplayed({ selector: HomePage.addNoteText });
    await HomePage.actions.clickOnElement({ selector: HomePage.addNoteText });
    // AddWindow
    await AddWindow.assertions.verifyElementIsExisting({ selector: AddWindow.addWindowTitle });
    await AddWindow.actions.clickOnElement({ selector: AddWindow.addTextBtn });
    // EditPage
    await EditPage.assertions.verifyElementIsDisplayed({ selector: EditPage.editingTitle });
    const validText: string = 'Fav Anime List';
    await EditPage.actions.setValueIntoField({ selector: EditPage.editTextArea, value: validText });
    await EditPage.assertions.verifyElementHaveText({ selector: EditPage.editTextArea, text: validText });
    // SavedPage
    await SavedPage.actions.goBack({ times: 2 });
    await SavedPage.assertions.verifyElementIsExisting({ selector: SavedPage.editBtn });
    await SavedPage.assertions.verifyElementHaveText({ selector: SavedPage.savedTextArea, text: validText });
    await SavedPage.actions.goBack({ times: 1 });
    await SavedPage.assertions.verifyElementHaveText({ selector: SavedPage.noteListItem, text: validText });
    await SavedPage.actions.clickOnElement({ selector: SavedPage.noteListItem });
    // DeleteWindow
    await DeleteWindow.actions.clickOnElement({ selector: DeleteWindow.threeDotBtn });
    await DeleteWindow.actions.clickOnElement({ selector: DeleteWindow.deleteBtn });
    await DeleteWindow.actions.clickOnElement({ selector: DeleteWindow.confirmDeleteBtn });
    await SavedPage.assertions.verifyElementIsNotExisting({ selector: SavedPage.noteListItem });
    // TrashPage
    await TrashPage.actions.clickOnElement({ selector: TrashPage.menuBtn });
    await TrashPage.actions.clickOnElement({ selector: TrashPage.trashCanOptionBtn });
    await TrashPage.assertions.verifyElementIsDisplayed({ selector: SavedPage.noteListItem });
    await SavedPage.assertions.verifyElementHaveText({ selector: SavedPage.noteListItem, text: validText });
  });
});
