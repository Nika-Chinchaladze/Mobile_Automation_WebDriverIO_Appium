import { Actions } from "../helper/actions";
import { Assertions } from "../helper/assertions";
import { SelectorFactory } from "../helper/selectorFactory";

export class BasePage {
    public readonly actions: Actions;
    public readonly assertions: Assertions;
    public readonly selectorFactory: SelectorFactory;

    constructor() {
        this.actions = new Actions();
        this.assertions = new Assertions();
        this.selectorFactory = new SelectorFactory();
    }
}
