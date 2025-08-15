import Actions from "../helper/actions";
import Assertions from "../helper/assertions";
import SelectorFactory from "../helper/selectorFactory";

export class BasePage {
    public readonly actions;
    public readonly assertions;
    public readonly selectorFactory;

    constructor() {
        this.actions = Actions;
        this.assertions = Assertions;
        this.selectorFactory = SelectorFactory;
    }
}
