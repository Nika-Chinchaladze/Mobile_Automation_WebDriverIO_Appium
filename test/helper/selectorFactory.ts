import { BaseHelp } from "./baseHelp";

export class SelectorFactory extends BaseHelp {
    getByAccessibilityId(id: string): string {
        return `~${id}`;
    }

    getByClass(className: string): string {
        return `//${className}`;
    }

    getByXPath(args: { tagName: string, attr: string, value: string }): string {
        return `//${args.tagName}[@${args.attr}="${args.value}"]`;
    }

    getByResourceId(args: { tagName: string, idValue: string }): string {
        return `//${args.tagName}[@resource-id="${args.idValue}"]`;
    }

    getByText(args: { tagName: string, text: string }): string {
        return `//${args.tagName}[@text="${args.text}"]`;
    }

    getByUiAutomatorText(text: string): string {
        return `android=new UiSelector().text("${text}")`;
    }

    getByUiAutomatorTextContains(text: string): string {
        return `android=new UiSelector().textContains("${text}")`;
    }

    getScrollable(): string {
        return 'android=new UiScrollable(new UiSelector().scrollable(true))';
    }
}
