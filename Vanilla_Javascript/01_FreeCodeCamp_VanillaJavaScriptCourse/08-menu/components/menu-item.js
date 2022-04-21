export function buildHtmlMenu(item) {
    let template =
        `<article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
            </div>
        </article>`

    return template;
}

export function buildHtmlMenus(items) {
    if (items.length === 0) {
        return "No data found!"
    }

    return items.map(function (item) {
        return buildHtmlMenu(item);
    }).join('\n');
}