import { createElementFromString } from "../untils/index.js";

export class GroceryItem {
    element = null;
    callBacks = {};
    id = null;

    constructor(context) {
        this.id = context.data.id;
        this.callBacks = context.callBacks;

        this.#render(context.data);
        this.#initEvent();
    }

    #render(data) {
        const template = `
            <article data-id="${data.id || ''}" class="grocery-item">
                <p class="title">${data.title || ''}</p>
                <div class="btn-container">
                    <!-- edit btn -->
                    <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                    </button>
                    <!-- delete btn -->
                    <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                    </button>
                </div>
            </article>
        `;

        this.element = createElementFromString(template);
    }

    #initEvent() {
        let id = this.id;

        let editClick = this.callBacks.editClick;
        const editBtn = this.element.querySelector(".edit-btn");
        editBtn.addEventListener("click", function (e) {
            editClick(e, id);
        });

        let deleteClick = this.callBacks.deleteClick;
        const deleteBtn = this.element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function (e) {
            deleteClick(e, id);
        });
    }

    get title() {
        return this.element.querySelector('.title').textContent
    }

    set title(value) {
        this.element.querySelector('.title').textContent = value
    }

}