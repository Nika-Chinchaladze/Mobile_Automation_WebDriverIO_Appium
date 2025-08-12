import { BasePage } from "./basePage";

export class CalendarWindow extends BasePage {
    public currentDate: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.TextView', idValue: 'io.appium.android.apis:id/dateDisplay' });
    public changeDateBtn: string = this.selectorFactory.getByAccessibilityId('change the date');
    public window: string = this.selectorFactory.getByResourceId({ tagName: 'android.view.View', idValue: 'android:id/month_view' });
    public tenthDay: string = this.selectorFactory.getByUiAutomatorText('10');
    public okBtn: string = this.selectorFactory.getByResourceId({ tagName: 'android.widget.Button', idValue: 'android:id/button1' });
}