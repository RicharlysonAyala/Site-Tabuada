// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");

const multiplicationNumber = document.querySelector("#number");

const multiplicatorNumber = document.querySelector("#multiplicator");

const multiplicationOperations = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-title span");

// Funções
const operationTable = (number, multiplicator) => {
    multiplicationOperations.innerHTML = "";

    for (let i = 1; i <= multiplicator; i++) {
        let result = number * i

        const template = `<div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        </div>`;

        const parse = new DOMParser();

        const htmlTemplate = parse.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationOperations.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplication = +multiplicationNumber.value;

    const multiplicator = +multiplicatorNumber.value;

    if (!multiplication || !multiplicator) {
        alert("Digite os dois números a serem multiplicados!");
        return;
    } else if (multiplication < 0 || multiplication < 0) {
        alert("Digite apenas números positivos");
        return;
    }

    operationTable(multiplication, multiplicator);
})