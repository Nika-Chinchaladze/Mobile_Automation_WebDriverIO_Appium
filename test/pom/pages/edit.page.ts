import { BasePage } from '../base.page';

class EditPage extends BasePage {
  public editingTitle: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.TextView',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative',
  });
  public editTextArea: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.EditText',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/edit_note',
  });
}

export default new EditPage();
