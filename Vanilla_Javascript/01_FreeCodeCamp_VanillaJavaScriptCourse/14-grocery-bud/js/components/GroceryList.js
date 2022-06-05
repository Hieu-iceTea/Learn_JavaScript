import { createElementFromString } from "../untils/index.js";
import { GroceryItem } from "../components/GroceryItem.js";

export class GroceryList {
    element = null;
    components = {};
    callBacks = {};

    constructor(context) {
        this.id = context.data.id;
        this.components = context.components;
        this.callBacks = context.callBacks;

        this.#render(context.data);
        this.#initComponents();
        this.#initEvent();
    }

    #render(data) {
        const template = `
            <div class="grocery-container show-container">
                <div class="grocery-list">
                    <!-- item -->
                </div>
                <button class="clear-btn">clear items</button>
            </div>
        `;

        this.element = createElementFromString(template);
    }

    #initComponents() {
    }

    #initEvent() {
        let clearAllClick = this.callBacks.clearAllClick;
        const clearBtn = this.element.querySelector(".clear-btn");
        clearBtn.addEventListener("click", function (e) {
            clearAllClick();
        });
    }

    addToList(grocery) {
        let groceryItem = new GroceryItem({ callBacks: { editClick: this.callBacks.editClick, deleteClick: this.callBacks.deleteClick }, data: grocery });

        const groceryList = this.element.querySelector(".grocery-list")

        groceryList.appendChild(groceryItem.element)
    }

    clearList() {
        const groceryList = this.element.querySelector(".grocery-list");
        groceryList.innerHTML = '';

        this.show = false;
    }

    /**
     * @param {boolean} value
     */
    set show(value) {
        if (value) {
            this.element.classList.add("show-container");
        } else {
            this.element.classList.remove("show-container");
        }

    }

}