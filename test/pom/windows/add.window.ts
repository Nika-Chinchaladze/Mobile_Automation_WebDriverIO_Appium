import { BasePage } from '../base.page';

class AddWindow extends BasePage {
  public addWindowTitle: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.TextView',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/alertTitle',
  });
  public addTextBtn: string = `${this.selectorFactory.getByResourceId({ tagName: 'android.widget.ListView', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview' })}/android.widget.LinearLayout[1]`;
}

export default new AddWindow();
