const selectElem = document.querySelector('select');
const logo = document.querySelector('img');
const body = document.querySelector('body');
const h2heading = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // Change colors and logo to dark theme
        logo.setAttribute("src", "images/byui-logo-white.png");
        body.classList.add('dark');
        h2heading.classList.add('dark-h2');
        
    } else {
        // Change colors and logo back to light theme
        logo.setAttribute("src", "images/byui-logo-blue.webp");
        body.classList.remove('dark');
        h2heading.classList.remove('dark-h2');
    }
}   