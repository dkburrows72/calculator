const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";

export default function createUI() {
    const numberButtons = [];

    for (let i = 0; i <= 9; i++) {
        numberButtons[i] = createButton("B" + i, i);
    }

    const clearButton = createButton("clear", "C");
    const equalsButton = createButton("equals", "=");
    const plusButton = createButton("plus", "+");
    const minusButton = createButton("minus", "-");
    const timesButton = createButton("times", "*");
    const divideButton = createButton("divide", "/");

    container.appendChild(
        createRow([
            numberButtons[7],
            numberButtons[8],
            numberButtons[9],
            divideButton,
        ]),
    );
    container.appendChild(
        createRow([
            numberButtons[4],
            numberButtons[5],
            numberButtons[6],
            timesButton,
        ]),
    );
    container.appendChild(
        createRow([
            numberButtons[1],
            numberButtons[2],
            numberButtons[3],
            minusButton,
        ]),
    );
    container.appendChild(
        createRow([numberButtons[0], clearButton, equalsButton, plusButton]),
    );

    function createButton(id, text) {
        const newButton = document.createElement("button");
        newButton.style.width = "60px";
        newButton.style.height = "60px";
        newButton.style.border = "2px solid black";
        newButton.style.borderRadius = "3px";
        newButton.textContent = text;
        newButton.id = id;
        newButton.style.flexGrow = "0";
        newButton.style.flexShrink = "0";

        return newButton;
    }

    function createRow(buttonList) {
        const row = document.createElement("div");

        for (let elem of buttonList) {
            row.appendChild(elem);
        }
        row.style.display = "flex";
        return row;
    }
}
