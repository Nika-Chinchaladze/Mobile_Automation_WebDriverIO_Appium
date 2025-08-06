import { BasePage } from "./basePage";

export class ViewsPage extends BasePage {
    public autoComplete: string = this.selectorFactory.getByXPath({ tagName: 'android.widget.TextView', attr: 'content-desc', value: 'Auto Complete' });
    public screenTop: string = this.selectorFactory.getByUiAutomatorTextContains('1. Screen Top');
    public countryInput: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.EditText', idValue: 'io.appium.android.apis:id/edit' });
}