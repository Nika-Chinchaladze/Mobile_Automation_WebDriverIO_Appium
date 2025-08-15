import { BasePage } from "../basePage";

class ListDialogWindow extends BasePage {
    public commandTwo: string = this.selectorFactory.getByText({ tagName: 'android.widget.TextView', text: 'Command two' });
    public selectedCommandTwo: string = this.selectorFactory.getByClass('android.widget.TextView');
}

export default new ListDialogWindow();
