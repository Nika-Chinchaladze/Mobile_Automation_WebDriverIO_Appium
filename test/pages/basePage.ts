import { Actions } from "../helper/actions";
import { Assertions } from "../helper/assertions";

export class BasePage {
    public readonly actions: Actions;
    public readonly assertions: Assertions;

    constructor() {
        this.actions = new Actions();
        this.assertions = new Assertions();
    }
}
