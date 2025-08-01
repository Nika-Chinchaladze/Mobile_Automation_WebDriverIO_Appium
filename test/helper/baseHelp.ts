import type { ChainablePromiseElement } from 'webdriverio';

export class BaseHelp {
    protected findElement(args: { address: string }): ChainablePromiseElement {
        return $(args.address);
    }
}
