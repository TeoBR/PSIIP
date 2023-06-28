// calculator.js

// Функция для выполнения расчета по формуле
function calculateFormula(inputValue) {
    
    let result = (Math.abs(Math.PI + Math.sin(inputValue) + Math.pow(inputValue, 1/3)))/
    (Math.abs(Math.PI + inputValue - 2 * Math.pow(inputValue,3)));

    // Возвращаем результат расчета
    return result;
}

// Функция для обновления HTML-элемента с результатами расчета
function updateResult() {
    // Находим HTML-элемент, куда будем выводить результат
    var resultElement = document.getElementById("result");

    // Получаем значение из входного поля
    var inputValue = document.getElementById("inputValue").value;

    // Выполняем расчет по формуле
    var result = calculateFormula(inputValue);

    // Обновляем содержимое HTML-элемента
    resultElement.textContent = "Результат: " + result;
}
