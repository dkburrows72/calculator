import createUI from "./ui.js";

const container = document.querySelector(".container");
const display = document.querySelector(".output");
let x = 0;
let y = 0;
let operator;
const operatorSymbols = ["+", "-", "x", "/"];
const operatorLookup = {
    plus: "+",
    minus: "-",
    times: "x",
    divide: "/",
};

createUI();

container.addEventListener("click", (event) => {
    handleClick(event.target.id);
});

function handleClick(id) {
    if (id[0] === "B") {
        display.textContent += id[1];
    }
    if (id === "clear") {
        display.textContent = "";
    }

    if (id in operatorLookup) {
        const currDisplay = display.textContent;
        operator = operatorLookup[id];
        if (operatorSymbols.includes(currDisplay.trim().slice(-1))) {
            display.textContent = display.textContent.slice(0, -1) + operator;
        } else {
            display.textContent += operator;
        }
    }
}
