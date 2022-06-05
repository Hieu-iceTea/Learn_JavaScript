export function createElementFromString(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}

export function parseElementFromString(xmlString) {
    var doc = new DOMParser().parseFromString(xmlString, "text/xml");

    return doc.firstChild;
}

export function mapOptions(list, lableKey, valueKey) {
    return list.map(item => { return { lable: item[lableKey], value: item[valueKey] } })
}

export function replaceElement(oldElement, newElement) {
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

export function pushState(newUrl) {
    window.history.pushState(null, null, newUrl);
} 