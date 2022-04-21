import { getRandomNumber } from "./utils.js";
export { getRandomColorSimple, getRandomColorHex };

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomColorSimple() {
    const randomIndex = getRandomNumber(colors.length);
    return colors[randomIndex];
}

function getRandomColorHex() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = getRandomNumber(hex.length);
        hexColor += hex[randomIndex];
    }

    return hexColor;
}