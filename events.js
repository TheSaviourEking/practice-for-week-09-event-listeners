// Your code here
window.addEventListener('DOMContentLoaded', event => {
    alert('DOM has Loaded');
});

const addRedBackground = event => {
    event.target.style.background = 'transparent';
    if (event.target.value.includes('red')) {
        event.target.style.background = 'red';
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
    const redInput = document.getElementById('red-input');
    redInput.addEventListener('input', addRedBackground);

    const addItem = document.getElementById('add-item');
    addItem.addEventListener('click', addLiToUl);

    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('click', changeBackgroundColor);

    const removeListenersBtn = document.getElementById('remove-listeners')
    removeListenersBtn.addEventListener('click', event => {
        redInput.removeEventListener('input', addRedBackground);
        /* Had to reset background color so it changes 
            when eventListeners are removed
        */
        redInput.style.backgroundColor = '';

        addItem.removeEventListener('click', addLiToUl);
        colorSelect.removeEventListener('click', changeBackgroundColor);
    })

    /* Bonus 1 */
    /* Button to re-add the event listeners */
    /* Button section so it can inherit styles */
    const section = document.getElementById('section-4');

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerText = 'Add Listeners';

    section.style.flexDirection = 'row';
    section.appendChild(button);

    button.addEventListener('click', (event) => {
        redInput.addEventListener('input', addRedBackground);
        addItem.addEventListener('click', addLiToUl);
        colorSelect.addEventListener('click', changeBackgroundColor);
    });

    /* Bonus 2 */
    /* New Section that contains a DIV and a HOVER event */
    const newSection = document.createElement('section');
    const div = document.createElement('div');

    /* pardon my use of js for styling, I am trying to get 
        used to this thing
    */
    div.style.border = '1px currentColor solid';
    div.style.textAlign = 'center';
    div.style.padding = '1rem';

    div.innerText = 'Hover over me!';

    newSection.appendChild(div);
    document.body.appendChild(newSection);

    div.addEventListener('mouseover', (event) => {
        event.target.innerText = 'Yeah that\'s right, hover more please';
        event.target.style.backgroundColor = 'yellow';
    })
    div.addEventListener('mouseout', (event) => {
        event.target.innerText = 'Hover over me again please';
        event.target.style.backgroundColor = '';
    })


    /* Bonus 3 */
    /* Global event Listener to alert the user the spacebar is clicked */
    window.addEventListener('keypress', event => {
        if (event.key === ' ' && event.charCode === 32) {
            alert('spacebar clicked!');
        }
    });
}
