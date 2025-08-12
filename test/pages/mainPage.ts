import { BasePage } from "./basePage";

export class MainPage extends BasePage {
    public elementList: string = this.selectorFactory.getByClass('android.widget.TextView');
    public app: string = this.selectorFactory.getByAccessibilityId('App');
    public apiDemos: string = this.selectorFactory.getByResourceId({ tagName: 'android.view.ViewGroup', idValue: 'android:id/action_bar' });
    public views: string = this.selectorFactory.getByAccessibilityId('Views');
    public activity: string = this.selectorFactory.getByAccessibilityId('Activity');
}
