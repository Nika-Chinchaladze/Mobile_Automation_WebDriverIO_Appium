import { BasePage } from "../basePage";

class MainPage extends BasePage {
    public skipBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip' });
    public addNoteText: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Add note' });
    public addWindowTitle: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.TextView', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/alertTitle' });
    public addTextBtn: string = `${this.selectorFactory.getByResourceId({ tagName: 'android.widget.ListView', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview' })}/android.widget.LinearLayout[1]`;
    public editingTitle: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.TextView', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative' });
    public editTextArea: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.EditText', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/edit_note' });
    public savedTextArea: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.TextView', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/view_note' });
    public editBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.ImageButton', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/edit_btn' });
    public noteListItem: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.TextView', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/title' });
    public threeDotBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.ImageButton', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/menu_btn' });
    public deleteBtn: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Delete' });
    public confirmDeleteBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'android:id/button1' });
    public menuBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.ImageButton', idValue: 'com.socialnmobile.dictapps.notepad.color.note:id/icon_nav' });
    public trashCanOptionBtn: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Trash Can' });
}

export default new MainPage();
