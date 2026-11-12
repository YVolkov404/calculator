const themeSwitch = document.getElementById('slider');

themeSwitch.addEventListener('change', event => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'light') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'light');
    }

    addClassToHTML();
});

function addClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'light') {
            document.querySelector('#container').classList.add('light');
        } else {
            document.querySelector('#container').classList.remove('light');
        }
    } catch (error) {}
}

addClassToHTML();
