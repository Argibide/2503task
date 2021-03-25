function changeColor() {
    const h1Element = document.getElementById('styled-h1-element')
    if (h1Element.style.color === 'magenta') {
        h1Element.style.color = 'black';
        h1Element.style.fontSize = '24px';
    } else {
        h1Element.style.color = 'magenta';
        h1Element.style.fontSize = '70px';
    }
}