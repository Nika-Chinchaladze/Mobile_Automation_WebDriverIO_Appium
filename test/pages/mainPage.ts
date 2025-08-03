import { BasePage } from "./basePage";

export class MainPage extends BasePage {
    public app: string = this.selectorFactory.getByAccessibilityId('App');
    public actionBar: string = this.selectorFactory.getByAccessibilityId('Action Bar');
    public accessibility: string = this.selectorFactory.getByClass('android.widget.TextView');
    public alertDialog: string = this.selectorFactory.getByXPath({ tagName: 'android.widget.TextView', attr: 'content-desc', value: 'Alert Dialogs' });
    public alertDialogUiSelector: string = this.selectorFactory.getByUiAutomatorTextContains('Alert');
    public listDialog: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'io.appium.android.apis:id/select_button' });
    public commandTwo: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Command two' });
    public selectedCommandTwo: string = this.selectorFactory.getByClass('android.widget.TextView');

    public animationSelector: string = this.selectorFactory.getByAccessibilityId('Animation');
    public cloningSelector: string = this.selectorFactory.getByAccessibilityId('Cloning');
    public runSelector: string = this.selectorFactory.getByAccessibilityId('Run');

    public graphicSelector: string = this.selectorFactory.getByAccessibilityId('Graphics');
    public arcSelector: string = this.selectorFactory.getByAccessibilityId('Arcs');
}
