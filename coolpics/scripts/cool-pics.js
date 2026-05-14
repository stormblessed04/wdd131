// Modal constants
const grid = document.querySelector('#img-grid');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Menu constants
const menuBtn = document.getElementById('menu-button');
const menu = document.querySelector('nav');

function toggleMenu() {
    // Toggle visibility of the menu links
    menu.classList.toggle('hide');
}

// Close modal on close button click
closeButton.addEventListener('click', () => modal.close());

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Event listener for opening the modal
grid.addEventListener('click', (event) => modal.showModal());

// Even listener for toggling the mobile menu
menuBtn.addEventListener('click', toggleMenu);