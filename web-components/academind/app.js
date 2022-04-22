// nguồn: https://academind.com/tutorials/web-components-introduction

import './web-components/search-result.js';

const nameInput = document.getElementById('name-input');
const nameSearchResult = document.getElementById('name-search-result');

let name = '';

nameInput.value = name;
nameInput.onchange = function (newValue) {
    name = newValue.target.value;
    nameSearchResult.setAttribute('name-attribute', name)
};

nameSearchResult.setAttribute('name-attribute', name)