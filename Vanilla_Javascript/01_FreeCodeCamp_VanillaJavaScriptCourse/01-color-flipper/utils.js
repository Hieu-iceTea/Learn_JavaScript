export function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

export function getParameter(name, urlString = window.location.href) {
    var url = new URL(urlString);

    return url.searchParams.get(name);
}

export function getAllParameters(urlString = window.location.href) {
    var url = new URL(urlString);

    return new Proxy(new URLSearchParams(url.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
}

export function getFragment(urlString = window.location.href) {
    var url = new URL(urlString);

    return url.hash.substring(1);
}