import { expect } from '@wdio/globals';
import { BaseHelp } from "./baseHelp";

export class Assertions extends BaseHelp {
    async verifyAlertText(args: { alertText: string }): Promise<void> {
        const alertActualText: string = await driver.getAlertText();
        expect(alertActualText).toEqual(args.alertText);
    }

    async verifyElementIsExisting(args: { selector: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await expect(element).toBeExisting();
    }

    async verifyElementIsNotExisting(args: { selector: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await expect(element).not.toBeExisting();
    }

    async verifyElementHaveText(args: { selector: string, text: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        await expect(element).toHaveText(args.text);
    }

    async verifyElementContainsText(args: { selector: string, text: string }): Promise<void> {
        const element = await this.findElement({ address: args.selector });
        const textContent = await element.getText();
        expect(textContent).toContain(args.text);
    }

    verifyNotEqual(args: {value1: string | number, value2: string | number}): void {
        const { value1, value2 } = args;
        expect(value1).not.toEqual(value2);
    }

    verifyArrayContainsValue(args: { textArray: string[], value: string }): void {
        expect(args.textArray).toContain(args.value);
    }

    verifyArrayContainsMultipleValue(textArray: string[], ...params: string[]): void {
        params.forEach((param) => {
            this.verifyArrayContainsValue({ textArray: textArray, value: param });
        });
    }
}
