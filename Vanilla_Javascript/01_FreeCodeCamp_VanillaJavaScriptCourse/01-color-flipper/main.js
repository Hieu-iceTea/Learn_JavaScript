import { getRandomColorSimple, getRandomColorHex } from "./random-color.js";
import { getParameter, getAllParameters, getFragment } from "./utils.js";

// query DOM :
const btnChangeColor = document.getElementById("btnChangeColor");
const btnSwitchToSimple = document.getElementById("btnSwitchToSimple");
const btnSwitchToHex = document.getElementById("btnSwitchToHex");
const color = document.querySelector(".color");

// variables :
const MODE = {
    SIMPLE: 'simple',
    HEX: 'hex'
}

let currentMode = null;
getCurrentModeFromUriFragment();
// getCurrentModeFromUriParam();
renderActiveMode();

// add event clidck :
btnChangeColor.addEventListener("click", changeColor);
btnSwitchToSimple.addEventListener("click", switchToSimple);
btnSwitchToHex.addEventListener("click", switchToHex);

// funtions :
function changeColor() {
    let randomColor = '';

    if (currentMode === MODE.SIMPLE) {
        randomColor = getRandomColorSimple();
    } else {
        randomColor = getRandomColorHex();
    }

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
}

function switchToSimple() {
    currentMode = MODE.SIMPLE;
    renderActiveMode();
}

function switchToHex() {
    currentMode = MODE.HEX;
    renderActiveMode();
}

function renderActiveMode() {
    console.log('renderActiveMode: ' + currentMode);
    if (currentMode === MODE.SIMPLE) {
        document.title = 'Color Flipper || Simple';
        btnSwitchToSimple.classList.add('active-mode');
        btnSwitchToHex.classList.remove('active-mode');
    } else if (currentMode === MODE.HEX) {
        document.title = 'Color Flipper || Hex';
        btnSwitchToSimple.classList.remove('active-mode');
        btnSwitchToHex.classList.add('active-mode');
    } else {
        document.title = 'Color Flipper';
        btnSwitchToSimple.classList.remove('active-mode');
        btnSwitchToHex.classList.remove('active-mode');
    }
}

function getCurrentModeFromUriFragment() {
    let mode = getFragment();

    currentMode = mode || MODE.SIMPLE;

}

function getCurrentModeFromUriParam() {
    let mode = getParameter('mode');
    // let mode = getAllParameters().mode;

    currentMode = mode || MODE.SIMPLE;
}

