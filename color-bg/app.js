const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    
    document.body.style.backgroundColor = color;
});