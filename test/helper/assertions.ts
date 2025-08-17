import { expect } from '@wdio/globals';
import { BaseHelp } from './baseHelp';

class Assertions extends BaseHelp {
  async verifyAlertText(args: { alertText: string }): Promise<void> {
    const alertActualText: string = await driver.getAlertText();
    await expect(alertActualText).toEqual(args.alertText);
  }

  async verifyElementIsExisting(args: { selector: string }): Promise<void> {
    const element = await this.findElement({ address: args.selector });
    await expect(element).toBeExisting();
  }

  async verifyElementIsNotExisting(args: { selector: string }): Promise<void> {
    const element = await this.findElement({ address: args.selector });
    await expect(element).not.toBeExisting();
  }

  async verifyElementIsDisplayed(args: { selector: string }): Promise<void> {
    const element = await this.findElement({ address: args.selector });
    await expect(element).toBeDisplayed();
  }

  async verifyElementHaveText(args: { selector: string; text: string }): Promise<void> {
    const element = await this.findElement({ address: args.selector });
    await expect(element).toHaveText(args.text);
  }

  async verifyElementContainsText(args: { selector: string; text: string }): Promise<void> {
    const element = await this.findElement({ address: args.selector });
    const textContent = await element.getText();
    await expect(textContent).toContain(args.text);
  }

  async verifyNotEqual(args: { value1: string | number; value2: string | number }): Promise<void> {
    const { value1, value2 } = args;
    await expect(value1).not.toEqual(value2);
  }

  async verifyArrayContainsValue(args: { textArray: string[]; value: string }): Promise<void> {
    await expect(args.textArray).toContain(args.value);
  }

  async verifyArrayContainsMultipleValue(textArray: string[], ...params: string[]): Promise<void> {
    for (const param of params) {
      await this.verifyArrayContainsValue({ textArray: textArray, value: param });
    }
  }
}

export default new Assertions();
