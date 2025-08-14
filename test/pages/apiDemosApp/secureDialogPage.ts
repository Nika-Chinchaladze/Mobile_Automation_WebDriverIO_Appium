import { BasePage } from "../basePage";

export class SecureDialogPage extends BasePage {
    public secureSurfaces: string = this.selectorFactory.getByAccessibilityId('Secure Surfaces');
    public secureDialog: string = this.selectorFactory.getByAccessibilityId('Secure Dialog');
}