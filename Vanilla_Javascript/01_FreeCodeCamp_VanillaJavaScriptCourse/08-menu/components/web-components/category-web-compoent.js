export class CategoryWebCompoent extends HTMLElement {
    constructor() {
        super();

        this.name = "";
    }

    connectedCallback() {
        this.name = this.getAttribute("name");

        this.render();
    }

    render() {
        this.innerHTML = `
            <button type="button" class="filter-btn" data-category=${this.name}>
                ${this.name}
            </button>
            `;
    }
}

// customElements.define("category-web-compoent", CategoryWebCompoent);