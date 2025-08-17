import { BasePage } from '../base.page';

class DeleteWindow extends BasePage {
  public threeDotBtn: string = this.selectorFactory.getByResourceId({
    tagName: 'android.widget.ImageButton',
    idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/menu_btn',
  });
  public deleteBtn: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Delete' });
  public confirmDeleteBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'android:id/button1' });
}

export default new DeleteWindow();
