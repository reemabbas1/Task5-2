document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.querySelector('button');
    const inputField = document.querySelector('.input-form .input-field');
    const inputUnit = document.querySelector('.input-form .select-field');
    const outputField = document.querySelector('.output-form .input-field');
    const outputUnit = document.querySelector('.output-form .select-field');

    function convertUnits() {
        const inputValue = parseFloat(inputField.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(inputValue)) {
            outputField.value = "Invalid input"; 
            return;
        }

        let valueInMeters;
        switch (fromUnit) {
            case 'm':
                valueInMeters = inputValue;
                break;
            case 'cm':
                valueInMeters = inputValue / 100;
                break;
            case 'km':
                valueInMeters = inputValue * 1000;
                break;
            default:
                valueInMeters = inputValue;
        }

        let result;
        switch (toUnit) {
            case 'm':
                result = valueInMeters;
                break;
            case 'cm':
                result = valueInMeters * 100;
                break;
            case 'km':
                result = valueInMeters / 1000;
                break;
            default:
                result = valueInMeters;
        }

        outputField.value = result;
    }

    convertButton.addEventListener('click', convertUnits);
});
