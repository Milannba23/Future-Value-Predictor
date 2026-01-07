function inflationCalculator() {
    // 1. SELECTING DOM ELEMENTS AND GETTING VALUES
    // Fetching the values from HTML input fields [cite: 25, 26]
    let moneyValue = parseFloat(document.getElementById('money').value);
    let yearsValue = parseInt(document.getElementById('years').value);
    let inflationValue = parseFloat(document.getElementById('inflationRate').value);
    let currencyValue = document.getElementById('currency').value;

    // 2. VALIDATION BLOCK
    // Checking if any field is empty or not a number (NaN) 
    if (isNaN(moneyValue) || isNaN(yearsValue) || isNaN(inflationValue)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers in all fields.";
        return; 
    }

    // 3. CALCULATION LOGIC
    // Using the formula: Present Value * (1 + inflation/100) ^ years 
    let finalValue = moneyValue * (Math.pow((1 + (inflationValue / 100)), yearsValue));

    // 4. NUMBER FORMATTING
    // Formatting numbers to show 2 decimal places and dot separators (European style) 
    let options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    
    let formattedInitial = moneyValue.toLocaleString('de-DE', options);
    let formattedFinal = finalValue.toLocaleString('de-DE', options);

    // 5. DISPLAYING THE RESULT [cite: 28, 29]
    let resultOutput = document.getElementById('result');
    resultOutput.innerHTML = `To maintain the same purchasing power as today's <b>${formattedInitial} ${currencyValue}</b>, 
    you will need <b>${formattedFinal} ${currencyValue}</b> in <b>${yearsValue} years</b>.`;
}

// 6. RESET FUNCTION
// This function clears all inputs and the result area 
function resetFields() {
    // Clearing values
    document.getElementById('money').value = "";
    document.getElementById('years').value = "";
    document.getElementById('inflationRate').value = "";
    
    // Clearing the result text
    document.getElementById('result').innerHTML = "";
    
    // Resetting currency to the first option
    document.getElementById('currency').selectedIndex = 0;

    // Focusing back on the first input field for better UX
    document.getElementById('money').focus();
}