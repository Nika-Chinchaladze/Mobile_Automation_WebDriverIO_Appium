import { BasePage } from '../base.page';

class SavedPage extends BasePage {
  public savedTextArea: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.TextView',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/view_note',
  });
  public editBtn: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.ImageButton',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/edit_btn',
  });
  public noteListItem: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.TextView',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/title',
  });
}

export default new SavedPage();
