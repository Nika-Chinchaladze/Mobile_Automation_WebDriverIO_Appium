import { BasePage } from "../basePage";

export class AppPage extends BasePage {
    public actionBar: string = this.selectorFactory.getByAccessibilityId('Action Bar');
    public alertDialog: string = this.selectorFactory.getByXPath({ tagName: 'android.widget.TextView', attr: 'content-desc', value: 'Alert Dialogs' });
    public alertDialogUiSelector: string = this.selectorFactory.getByUiAutomatorTextContains('Alert');
}

