import { BaseHelp } from "./baseHelp";

export class Actions extends BaseHelp {
    async navigateToSpecificPageDirectly(args: { packageName: string, appActivity: string }): Promise<void> {
        await driver.startActivity(args.packageName, `${args.packageName}${args.appActivity}`);
    }

    async scrollToScrollable(selector: string): Promise<void> {
        await this.findElement({ address: selector });
    }

    async acceptAlert(): Promise<void> {
        await driver.acceptAlert();
    }

    async dismissAlert(): Promise<void> {
        await driver.dismissAlert();
    }

    async getAlertText(): Promise<string> {
        return await driver.getAlertText();
    }

    async clickOnElement(args: { selector: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await element.click();
    }

    async setValueIntoField(args: { selector: string, value: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await element.setValue(args.value);
    }

    async getElementTextContent(args: { selector: string }): Promise<string> {
        const element = await this.findElement({ address: args.selector });
        return await element.getText();
    }

    async getMultipleElementsTextContent(args: { selector: string }): Promise<string[]> {
        const elements = await this.findMultipleElements({ address: args.selector });
        const elementsTextContent: string[] = [];
        for (const element of elements) {
            elementsTextContent.push(await element.getText());
        }
        return elementsTextContent;
    }
}
