import type { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

export abstract class BaseHelp {
    protected async findElement(args: { address: string }): Promise<ChainablePromiseElement> {
        return $(args.address);
    }

    protected async findMultipleElements(args: { address: string }): Promise<ChainablePromiseArray> {
        return $$(args.address);
    }
}
