const units = {
    'kb': 1024,
    'mb': 1024 ** 2, // Math.pow (1024, 2) = 1024 * 1024
    'gb': 1024 ** 3,
    'tb': 1024 ** 4,
    'pb': 1024 ** 5,
};

function convert(fromUnit, toUnit, value) {
    return (value * units[fromUnit] / units[toUnit]);
}

let input = document.getElementById('from');
let fromSelect = document.getElementById('fromUnit');
let toSelect = document.getElementById('toUnit');
let button = document.getElementById('convert');
let resultText = document.getElementById('result');

button.addEventListener('click', () => {
    let fromUnit = fromSelect.value;
    let toUnit = toSelect.value;
    let value = input.value;
    let result = convert(fromUnit, toUnit, value);
    resultText.innerText = result + ' ' + toUnit.toUpperCase();
})