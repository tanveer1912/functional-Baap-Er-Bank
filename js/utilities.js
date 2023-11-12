function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputAmountString = inputField.value;
    const newInputAmount = parseFloat(newInputAmountString);
    inputField.value = '';
    return newInputAmount;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const previousElementAmountString = textElement.innerText;
    const previousElementAmount = parseFloat(previousElementAmountString);
    return previousElementAmount;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}