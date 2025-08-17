import { BasePage } from '../base.page';

class TrashPage extends BasePage {
  public menuBtn: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.ImageButton',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/icon_nav',
  });
  public trashCanOptionBtn: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Trash Can' });
}

export default new TrashPage();
