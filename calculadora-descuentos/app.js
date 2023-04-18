const originalPriceInput = document.getElementById('original-price');
const percentageInput = document.getElementById('percentage');
const calculateButton = document.getElementById('calculate');
const resultSpan = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const originalPrice = parseFloat(originalPriceInput.value);
    const percentage = parseFloat(percentageInput.value);

    if(!isNaN(originalPrice) && !isNaN(percentage)){
        const discount = originalPrice * (percentage / 100);
        const finalPrice = originalPrice - discount;
        resultSpan.textContent = `$${finalPrice.toFixed(2)}`;
    } else {
        resultSpan.textContent = 'Ingresa un valor válido';
    }
});