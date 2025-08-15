import { BasePage } from "../basePage";

class AlertDialogPage extends BasePage {
    public okCancelDialog: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'io.appium.android.apis:id/two_buttons' });
    public listDialog: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'io.appium.android.apis:id/select_button' });
}

export default new AlertDialogPage();
