function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultElement = document.getElementById('result');


    resultElement.innerHTML = "";

    // Validate inputs user
    if (!weight || isNaN(weight) || weight <= 0) {
        resultElement.textContent = "Please enter a valid weight (greater than 0).";
        return;
    }

    if (!height || isNaN(height) || height <= 0) {
        resultElement.textContent = "Please enter a valid height (greater than 0).";
        return;
    }

    // Perform the BMI calculation if validation passes
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let resultText = `Your BMI is <strong>${bmi}</strong>. `;
    if (bmi < 18.5) {
        resultText += "You are <strong>underweight</strong>.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += "You have a <strong>normal</strong> weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += "You are <strong>overweight</strong>.";
    } else {
        resultText += "You are <strong>obese</strong>.";
    }

    // menampilkan result
    resultElement.innerHTML = resultText;
}
