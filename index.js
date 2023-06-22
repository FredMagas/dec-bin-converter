function converter(inputId, targetId) {
    const input = document.getElementById(inputId);
    const target = document.getElementById(targetId);
    
    const inputValue = input.value;
    
    if (input.placeholder === 'Decimal') {
        const parsedInput = parseInt(inputValue, 10);
        if (!isNaN(parsedInput)) {
            const convertedValue = parsedInput.toString(2);
            target.value = convertedValue;
        } else {
            target.value = '';
        }
    } else if (input.placeholder === 'Binário') {
        const parsedInput = parseInt(inputValue, 2);
        if (!isNaN(parsedInput)) {
            const convertedValue = parsedInput.toString(10);
            target.value = convertedValue;
        } else {
            target.value = '';
        }
    }
}

function swapInputs() {
    const decimalInput = document.getElementById("decimalInput");
    const binaryInput = document.getElementById("binaryInput");
    
    // Troca os valores dos inputs
    const tempValue = decimalInput.value;
    decimalInput.value = binaryInput.value;
    binaryInput.value = tempValue;
    
    // Troca os placeholders dos inputs
    const tempPlaceholder = decimalInput.placeholder;
    decimalInput.placeholder = binaryInput.placeholder;
    binaryInput.placeholder = tempPlaceholder;
}
