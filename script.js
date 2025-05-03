function calculateBMI() {
    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.className = ''; // Reset class
        resultDiv.innerHTML = `<p style="color: red;">Please enter valid positive height and weight values.</p>`;
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    
    // Determine BMI category
    let category = '';
    let categoryClass = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
        categoryClass = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        categoryClass = 'overweight';
    } else {
        category = 'Obese';
        categoryClass = 'overweight';
    }

    // Display result
    resultDiv.className = categoryClass;
    resultDiv.innerHTML = `
        <p>Your BMI is: <strong>${bmi.toFixed(1)}</strong></p>
        <p>Category: <strong>${category}</strong></p>
        <p class="bmi-range">BMI Range: ${getBMIRange(category)}</p>
    `;
}

function getBMIRange(category) {
    switch(category) {
        case 'Underweight':
            return '< 18.5';
        case 'Normal weight':
            return '18.5 - 24.9';
        case 'Overweight':
            return '25.0 - 29.9';
        case 'Obese':
            return '≥ 30.0';
        default:
            return '';
    }
} 