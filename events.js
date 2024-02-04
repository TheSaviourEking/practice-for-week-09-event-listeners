// Your code here
window.addEventListener('DOMContentLoaded', event => {
    // alert('DOM has Loaded');
});

const addRedBackground = event => {
    if (event.target.value.includes('red')) {
        event.target.style.background = 'red';
    } else {
        event.target.style.background = 'transparent';
    }
}

const addLiToUl = event => {
    const ul = document.getElementById('section-2').children[1];
    const li = document.createElement('li');

    li.innerText = document.getElementById('list-add').value;
    ul.appendChild(li);
}

const changeBackgroundColor = event => {
    const section = document.getElementById('section-3');
    section.style.backgroundColor = event.target.value;
}

window.onload = () => {
    document.getElementById('red-input').addEventListener('input', addRedBackground);

    document.getElementById('add-item').addEventListener('click', addLiToUl);

    document.getElementById('color-select').addEventListener('click', changeBackgroundColor);

    document.getElementById('remove-listeners').addEventListener('click', event => {
        document.getElementById('red-input').removeEventListener('input', addRedBackground);
        /* Had to reset background color so it changes when eventListeners are removes*/
        document.getElementById('red-input').style.backgroundColor = '';

        document.getElementById('add-item').removeEventListener('click', addLiToUl);
        document.getElementById('color-select').removeEventListener('click', changeBackgroundColor);
    })
}
