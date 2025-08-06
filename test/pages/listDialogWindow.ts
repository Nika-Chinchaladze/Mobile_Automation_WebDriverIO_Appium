import { BasePage } from "./basePage";

export class ListDialogWindow extends BasePage {
    public commandTwo: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Command two' });
    public selectedCommandTwo: string = this.selectorFactory.getByClass('android.widget.TextView');
}
