export function buildHtmlCategory(item) {
    // let template =
    //     `<button type="button" class="filter-btn" data-category=${item}>
    //         ${item}
    //     </button>`;

    let template =
        `
        <category-web-compoent 
            name="${item}"
            >
        </category-web-compoent>
        `;

    return template;
}

export function buildHtmlCategories(items) {
    if (items.length === 0) {
        return "Empty"
    }

    return items.map(function (item) {
        return buildHtmlCategory(item);
    }).join('\n');
}