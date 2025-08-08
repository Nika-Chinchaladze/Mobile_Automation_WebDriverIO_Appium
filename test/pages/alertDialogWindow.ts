import { BasePage } from "./basePage";

export class AlertDialogWindow extends BasePage {
    public alertDialogWindow: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.LinearLayout', idValue: 'android:id/title_template' });
    public okBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'android:id/button1' });
    public cancelBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'android:id/button2' });
    public title: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.TextView', idValue: 'android:id/alertTitle' });
}
 