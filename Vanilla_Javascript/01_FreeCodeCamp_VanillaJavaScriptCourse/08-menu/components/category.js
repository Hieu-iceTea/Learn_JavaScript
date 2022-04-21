export function buildHtmlCategory(item) {
    let template =
        `<button type="button" class="filter-btn" data-category=${item}>
            ${item}
        </button>`;

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