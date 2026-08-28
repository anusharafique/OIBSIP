function convertTemp() {
    const inputTemp = parseFloat(
        document.getElementById('inputTemp').value
    );
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    // Validate input
    if (isNaN(inputTemp)) {
        document.getElementById('result').textContent =
            'Please enter a valid number';
        return;
    }
    let celsius;
    // Convert input to Celsius first
    switch (fromUnit) {
        case 'celsius':
            celsius = inputTemp;
            break;
        case 'fahrenheit':
            celsius = (inputTemp - 32) * 5 / 9;
            break;
        case 'kelvin':
            celsius = inputTemp - 273.15;
            break;
    }
    // Absolute zero validation
    if (celsius < -273.15) {
        document.getElementById('result').textContent =
            'Temperature cannot be below absolute zero.';
        return;
    }
    let result;
    // Convert Celsius to target unit
    switch (toUnit) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = (celsius * 9 / 5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
    }
    document.getElementById('result').textContent =
        `${inputTemp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}