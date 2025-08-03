import { expect } from '@wdio/globals';
import { BaseHelp } from "./baseHelp";

export class Assertions extends BaseHelp {
    async verifyElementIsExisting(args: { selector: string }): Promise<void> {
        const element = this.findElement({ address: args.selector });
        await expect(element).toBeExisting();
    }

    async verifyElementHaveText(args: { selector: string, text: string }): Promise<void> {
        const element = this.findElement({ address: args.selector });
        await expect(element).toHaveText(args.text);
    }

    async verifyElementContainsText(args: { selector: string, text: string }): Promise<void> {
        const element = this.findElement({ address: args.selector });
        await expect(element).toContain(args.text);
    }
}
