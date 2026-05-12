const btn = document.querySelector(".menu-btn");
const menu = document.querySelector('nav')

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

btn.addEventListener('click', toggleMenu);