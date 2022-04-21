export function renderHtml(querySelector, innerHTML) {
    document.querySelector(querySelector).innerHTML = innerHTML;
}

export function renderHtmls(htmls) {
    for (const key in htmls) {
        if (Object.hasOwnProperty.call(htmls, key)) {
            const element = htmls[key];
            renderHtml(key, element)
        }
    }
}