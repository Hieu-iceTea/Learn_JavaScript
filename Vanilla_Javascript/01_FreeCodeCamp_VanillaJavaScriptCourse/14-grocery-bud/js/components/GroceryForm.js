import { createElementFromString } from "../untils/index.js";

export class GroceryForm {
    element = null;
    components = {};
    callBacks = {};

    constructor(context) {
        this.components = context.components;
        this.callBacks = context.callBacks;

        this.#render();
        this.#initComponents();
        this.#initEvent();
    }

    #render() {
        const template = `
            <form class="grocery-form">
                <h3>grocery bud</h3>
                <div class="form-control">
                    <input type="text" id="grocery" placeholder="e.g. eggs" />
                    <button type="submit" class="submit-btn">submit</button>
                </div>
            </form>
        `;

        this.element = createElementFromString(template);
    }

    #initComponents() {
        let formAlert = this.components.formAlert;
        this.element.insertBefore(formAlert.element, this.element.firstChild)
    }

    #initEvent() {
        let submit = this.callBacks.submit
        this.element.addEventListener("submit", function (e) {
            e.preventDefault();
            submit(e);
        });
    }

    get inputGrocery() {
        return this.element.querySelector('#grocery').value
    }

    set inputGrocery(value) {
        this.element.querySelector('#grocery').value = value
    }

    /**
     * @param {string} value
     */
    set submitBtnText(value) {
        this.element.querySelector('.submit-btn').textContent = value
    }

}