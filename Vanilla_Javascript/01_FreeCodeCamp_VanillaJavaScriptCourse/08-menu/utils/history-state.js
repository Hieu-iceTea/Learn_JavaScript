// https://stackoverflow.com/questions/824349/how-do-i-modify-the-url-without-reloading-the-page

import { renderHtmls } from "./render-html.js";

export function processAjaxData(title, datas, htmls, urlPath) {
    document.title = title;

    renderHtmls(htmls);

    let dataState = {
        title: title,
        datas: datas,
        htmls: htmls
    };

    console.log('>> processAjaxData');
    console.log(window.history);

    if (window.history.state == null) {
        window.history.replaceState(dataState, title, urlPath);
    } else {
        window.history.pushState(dataState, title, urlPath);
    }
}

export function onpopstateHandle(e) {
    let dataState = e.state;

    if (dataState) {
        document.title = dataState.title;
        renderHtmls(dataState.htmls);
        // dataState.datas;
    }
}