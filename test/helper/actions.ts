import { BaseHelp } from "./baseHelp";

export class Actions extends BaseHelp {
    async clickOnElement(args: { selector: string }): Promise<void> {
        const element = this.findElement({ address: args.selector });
        await element.click();
    }
}
