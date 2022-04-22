import { getDataMenus, getDataCategories, getDataCategoriesFromMenus, getDataMenusByCategory } from "./data.js";
import { buildHtmlMenu, buildHtmlMenus } from "./components/menu-item.js";
import { buildHtmlCategory, buildHtmlCategories } from "./components/category.js";
import { renderHtml, renderHtmls } from "./utils/render-html.js";
import { processAjaxData, onpopstateHandle } from "./utils/history-state.js";
import { getParameter, capitalizeString } from "./utils/utils.js";
import { CategoryWebCompoent } from "./components/web-components/category-web-compoent.js";

let dataMenus = null;
let dataCategories = null;
let currentCategory = null;

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", mounted); // display all items when page loads
// mounted(); // render hiển thị ngay lập tức, kể cả khi page chưa được load

function mounted() {
    customElements.define("category-web-compoent", CategoryWebCompoent);
    
    currentCategory = getParameter('category');
    currentCategory === null ?
        dataMenus = getDataMenus() :
        dataMenus = getDataMenusByCategory(currentCategory);
    // dataCategories = getDataCategoriesFromMenus(dataMenus);
    dataCategories = getDataCategories();

    renderMenuItems();
    renderCategories();
    renderActiveCategory();

    // window.onpopstate = function(e){
    //     onpopstateHandle(e);
    // };
}

function renderMenuItems() {
    // sectionCenter.innerHTML = buildHtmlMenus(dataMenus);

    renderHtml('.section-center', buildHtmlMenus(dataMenus));
    // renderHtmls({'.section-center' : buildHtmlMenus(dataMenus)});

    // let htmls = {
    //     '.section-center': buildHtmlMenus(dataMenus),
    // }
    // processAjaxData('Menu', null, htmls, '');
}

function renderCategories() {
    btnContainer.innerHTML = buildHtmlCategories(dataCategories);

    addEventListenerFilterCategories();
}

function addEventListenerFilterCategories() {
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            currentCategory = e.currentTarget.dataset.category;
            dataMenus = getDataMenusByCategory(currentCategory);
            renderMenuItems();
            renderActiveCategory();

            buildHistory();
        });
    });
}

function renderActiveCategory() {
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    currentCategory = currentCategory || 'all';

    document.title = 'Menu | ' + capitalizeString(currentCategory);

    filterBtns.forEach(function (btn) {
        const category = btn.dataset.category;
        if (category === currentCategory) {
            btn.classList.add('active-category');
        } else {
            btn.classList.remove('active-category');
        }
    });
}

function buildHistory() {
    // location.href = '#' + currentCategory;

    // location.href = '?category=' + currentCategory;
    // location.assign('?category=' + currentCategory);
    // location.replace('?category=' + currentCategory);

    // window.history.replaceState(null, null, '?category=' + currentCategory);
    // window.history.pushState(null, null, '?category=' + currentCategory);

    window.history.replaceState({}, currentCategory, '?category=' + currentCategory);

    // let htmls = {
    //     '.section-center': buildHtmlMenus(dataMenus),
    // }
    // processAjaxData('Menu | ' + currentCategory, null, htmls, '?category=' + currentCategory);
}