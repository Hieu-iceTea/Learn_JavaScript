import { createElementFromString } from "../untils/index.js";

export class Alert {
    element = null;
    timeout = 2000;

    constructor(text, type) {
        this.#render(text, type);
    }

    #render(text, type) {
        const template = `
            <p class="alert ${type ? `alert-${type}` : ''}">${text || ''}</p>
        `;

        this.element = createElementFromString(template);
    }

    alert(text, type, timeout = this.timeout) {
        this.element.textContent = text;
        this.element.classList.add(`alert-${type}`);

        // remove alert
        let _element = this.element;
        setTimeout(function () {
            _element.textContent = "";
            _element.classList.remove(`alert-${type}`);
        }, timeout);
    }

    alertSuccess(text, timeout = this.timeout) {
        this.alert(text, 'success', timeout);
    }

    alertDanger(text, timeout = this.timeout) {
        this.alert(text, 'danger', timeout);
    }

}