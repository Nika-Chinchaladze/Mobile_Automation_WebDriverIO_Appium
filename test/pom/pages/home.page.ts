import { BasePage } from '../base.page';

class HomePage extends BasePage {
  public skipBtn: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.Button',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip',
  });
  public addNoteText: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Add note' });
}

export default new HomePage();
