import { spells } from './data.js';

const scrollCardContainer = document.querySelector("#card-region");
const scrollRightButton = document.querySelector("#right-button");
const scrollLeftButton = document.querySelector("#left-button");
let currentNumCards = 0; // Tracks the number of cards currently displayed
let currentCardIndex = 0; // Tracks the position of currently displayed cards

const searchContainer = document.querySelector('#search-results');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

const modal = document.querySelector('dialog');
const closeModalButton = document.querySelector('.close-viewer');
const modalContainer = document.querySelector('#modal-container')

const cardsObserver = new ResizeObserver((entry) => {
    // Determine if the number of cards to display has changed, 
    // if so then re-render the card region. 
    if (currentNumCards != getNumCards()){
        // Update currentCardIndex if we are expanding the viewport and there is not
        // an additional spell to add to the right
        if (currentCardIndex + getNumCards() > spells.length)
            currentCardIndex--;

        renderCards(currentCardIndex);
    }
});

function cardHTML(spell){
    let div = document.createElement('div');
    div.classList.add('spell-card')
    div.innerHTML =  `
        <h4 class="spell-name">${spell.name}</h4>
        <img class="card-img" src="${spell.imgSrc}" alt="${spell.imgAlt}">
        <p class="short-description">
            ${spell.level} level ${spell.school}<br>
            Casting time: ${spell.castingTime}<br><br>
            ${spell.shortDescription} 
        </p>
        <button type="button" class="spell-button">More Info</button>`
    
    // Add event listener to button to open modal
    div.querySelector('button').addEventListener('click', () => openModal(spell));

    return div;
}

function getNumCards() {
    // Calculate how many cards will fit in the current viewport size. 
    let numCards = Math.trunc(scrollCardContainer.clientWidth / 290);
    if (numCards < 1) numCards = 1;
    return numCards;
}

function renderCards(startIndex = 0) {
    let numCards = getNumCards();
    currentNumCards = numCards;
    currentCardIndex = startIndex;
    
    scrollCardContainer.innerHTML = ""

    // Loop through the first 'numCards' spells in the spell list and add them
    // to the container
    for (let i = startIndex; i < numCards + startIndex; i++) {
        if (i < spells.length) {
            scrollCardContainer.appendChild(cardHTML(spells[i]));
        }
    }

    // Start fade-in animation
    setTimeout( () => {
        scrollCardContainer.childNodes.forEach((c) => {
            c.classList.add('fade-in');
        });
    }, 100);
}

function scrollCards(offset) {
    // Ensure that scrolling this direction will remain inside the spells array
    if (currentCardIndex + offset < 0 || 
        currentCardIndex + offset + currentNumCards > spells.length)
    {
        // Outside of array, just return
        return;    
    }

    // Remove animation style to reset 
    scrollCardContainer.childNodes.forEach((c) => {
        c.classList.remove('fade-in');
    });

    // Adjust tracker
    currentCardIndex += offset;

    // Allow animation time to fade, then update cards
    setTimeout( () => {
        // Determine scroll direction, append child to correct end of container
        if (offset === -1) {
            // Scroll left
            scrollCardContainer.lastElementChild.remove();
            let card = cardHTML(spells[currentCardIndex]);
            scrollCardContainer.prepend(card);
        }
        else {
            // Scroll right
            scrollCardContainer.firstElementChild.remove();
            let card = cardHTML(spells[currentCardIndex + currentNumCards - 1]);
            scrollCardContainer.append(card);
        }
    }, 500);

    // Start fade-in animation
    setTimeout( () => {
        scrollCardContainer.childNodes.forEach((c) => {
            c.classList.add('fade-in');
        });
    }, 1000);

}

function search() {
    let searchQuery = searchInput.value.toLowerCase();

    // Filter search results and sort by spell name
    let sortedSpells = spells.filter(function(spell) {
        return (
            spell.name.toLowerCase().includes(searchQuery) ||
            spell.level.toLowerCase().includes(searchQuery) || 
            spell.school.toLowerCase().includes(searchQuery) ||
            spell.castingTime.toLowerCase().includes(searchQuery) ||
            spell.range.toLowerCase().includes(searchQuery) ||
            spell.duration.toLowerCase().includes(searchQuery) ||
            spell.shortDescription.toLowerCase().includes(searchQuery) ||
            spell.longDescription.toLowerCase().includes(searchQuery) ||
            spell.higherLevels.toLowerCase().includes(searchQuery)
        );
    }).sort(compareSpells);

    // Render the sorted spells
    renderSearchSpells(sortedSpells)
}

function compareSpells(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function renderSearchSpells(spells) {

    // Remove animation style to reset 
    searchContainer.childNodes.forEach((c) => {
        if (c.nodeType === 1)
            c.classList.remove('fade-in');
    });

    // Allow animation time to fade, then update search results
    setTimeout( () => {
        searchContainer.innerHTML = ""

        spells.forEach( (spell) => {
            searchContainer.appendChild(searchHTML(spell));
        });
    }, 500);

    // Start fade-in animation
    setTimeout( () => {
        searchContainer.childNodes.forEach((c) => {
            c.classList.add('fade-in');
        });
    }, 1000);

}

function searchHTML(spell) {
    let searchCard = document.createElement('div');
    searchCard.classList.add('search-card');
    searchCard.innerHTML = `
        <div class="search-info">
            <h4 class="spell-name">${spell.name}</h4>
            <p class="short-description">${spell.longDescription}</p>
            <button type="button" class="spell-button">More Info</button>
        </div>
        <img class="search-img" src="${spell.imgSrc}" alt="${spell.imgAlt}">
    `;

    // Add event listener to button to open modal
    searchCard.querySelector('button').addEventListener('click', () => openModal(spell));

    return searchCard;
}

function openModal(spell) {
    
    // Inject spell info into modal
    modalContainer.innerHTML = modalHTML(spell);

    // Render modal to screen
    modal.showModal();
}

function modalHTML(spell) {
    let html = `
        <h1 id="modal-title">${spell.name}</h1>
        <img class="modal-img" src="${spell.imgSrc}" alt="${spell.imgAlt}">
        <h2>${spell.level} level ${spell.school} spell</h2>
        <p><strong>Casting Time: </strong>${spell.castingTime}</p>
        <p><strong>Range: </strong>${spell.range}</p>
        <p><strong>Components: </strong>${spell.components.join(', ')}</p>
        <p><strong>Duration: </strong>${spell.duration}</p>
        <p>${spell.longDescription}</p>
    `;
    if (spell.higherLevels != "") {
        html += `
            <p><strong>At Higher Levels: </strong>${spell.higherLevels}</p>
        `;
    }

    return html;
}

function init() {
    // Add an event listener to the window resizing, will re-render the spell cards
    cardsObserver.observe(scrollCardContainer);

    // Add event listeners for buttons
    scrollLeftButton.addEventListener('click', () => scrollCards(-1));
    scrollRightButton.addEventListener('click', () => scrollCards(1));

    // Add event listeners for search button and enter keypress
    searchButton.addEventListener('click', search);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    })

    // Add event listeners for modal clicks
    closeModalButton.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}

init();