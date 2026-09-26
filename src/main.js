import createUI from "./ui.js";

const container = document.querySelector(".container");
const display = document.querySelector(".output");
let x = 0;
let y = 0;
let operator;
const operatorSymbols = ["+", "-", "*", "/"];
const operatorLookup = {
    plus: "+",
    minus: "-",
    times: "*",
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

    if (id === "equals") {
        display.textContent = evaluateExpression(display.textContent);
    }
}

function evaluateExpression(exp) {
    // Split into numbers and operators, e.g. "12+7*3" -> ["12","+","7","*","3"]
    const tokens = exp.match(/-?\d+\.?\d*|[+\-*/]/g);
    if (!tokens || tokens.length === 0) return "";

    // If the expression doesn't end in a number (trailing operator), ignore it
    if (operatorSymbols.includes(tokens[tokens.length - 1])) {
        tokens.pop();
    }

    let result = parseFloat(tokens[0]);
    if (isNaN(result)) return "";

    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const operand = parseFloat(tokens[i + 1]);
        if (operand === undefined || isNaN(operand)) break;

        switch (op) {
            case "+":
                result += operand;
                break;
            case "-":
                result -= operand;
                break;
            case "*":
                result *= operand;
                break;
            case "/":
                result = operand === 0 ? "Error" : result / operand;
                break;
        }

        if (result === "Error") break;
    }

    return result;
}
