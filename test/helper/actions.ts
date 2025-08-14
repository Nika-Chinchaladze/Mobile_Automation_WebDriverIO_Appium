import { BaseHelp } from "./baseHelp";

export class Actions extends BaseHelp {
    async navigateToSpecificPageDirectly(args: { packageName: string, appActivity: string }): Promise<void> {
        await driver.startActivity(args.packageName, `${args.packageName}${args.appActivity}`);
    }

    async scrollToEnd( args: { scrollable: string, direction: 'vertical' | 'horizontal', aim?: 'front' | 'back' }): Promise<void> {
        const { scrollable, direction, aim } = args;
        switch (direction) {
            case 'vertical':
                await this.findElement({ address: `${scrollable}.scrollToEnd(1,5)` });
                break;
            
            case 'horizontal':
                if (aim === 'front') {
                    await this.findElement({ address: `${scrollable}.setAsHorizontalList().scrollForward()` });
                } else {
                    await this.findElement({ address: `${scrollable}.setAsHorizontalList().scrollBackward()` });
                }
                break;
        }
    }

    async scrollTextIntoView(args: {scrollable: string, text: string}): Promise<void> {
        const { scrollable, text } = args;
        await this.findElement({ address: `${scrollable}.scrollTextIntoView("${text}")` });
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

    async goBack(args: {times: number}): Promise<void> {
        for (let i = 0; i < args.times; i++) {
            await driver.back();
        }
    }

    async clickOnElement(args: { selector: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await element.click();
    }

    async setValueIntoField(args: { selector: string, value: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await element.setValue(args.value);
    }

    async addValueIntoField(args: { selector: string, value: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await element.addValue(args.value);
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
