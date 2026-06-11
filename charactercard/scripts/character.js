const body = document.querySelector('body');

const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images\\snortleblat.webp",
    imgAlt: "The Snortleblat monster",

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
        }
        if (this.health <= 0){
            alert("The character has died");
        }
        renderCard(this);
    },

    levelUp: function() {
        if (this.health > 0) {
            this.level += 1;
        }
        renderCard(this);
    }

}

function renderCard(char) {
    let html = `
    <div class="card">
        <img class="image" src="${char.image}" alt="${char.imgAlt}">
        <h1 class="name">${char.name}</h1>
        <div class="stats">
            <p>Class: ${char.class}</p>
            <p>Level: ${char.level}</p>
            <p>Health: ${char.health}</p>
        </div>
        <div class="buttons">
            <button class="attacked">Attacked</button>
            <button class="level-up">Level Up</button>
        </div>
    </div>
    `

    body.innerHTML = html;

    // Assign event listeners to buttons
    body.querySelector('.attacked').addEventListener("click", () => char.attacked());
    body.querySelector('.level-up').addEventListener("click", () => char.levelUp());
}

// Render the inital card
renderCard(character);