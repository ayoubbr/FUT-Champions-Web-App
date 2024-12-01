const allPlayers = document.getElementById("players-all");
let dataOfPlayers;

const benchButton = document.getElementById('bench-button');
const players = document.getElementById('players');
const playersContainer = document.getElementById('players-container');

async function getData() {
    const storedData = localStorage.getItem("playersData");
    if (storedData) {
        dataOfPlayers = JSON.parse(storedData);
    } else {
        const data = await fetch("./players.json");
        const dataObject = await data.json();
        dataOfPlayers = dataObject.players;
        saveToLocalStorage();
    }
    renderPlayers();
}

function renderPlayers() {
    allPlayers.innerHTML = "";
    dataOfPlayers.forEach((player) => createDiv(player));
}

function createDiv(player) {
    const element = document.createElement('div');
    element.classList.add("card-full");
    element.innerHTML = ` <img src="assets/player-card.webp" class="first-image" alt="">
                        <div class="card" ></div>`;
    allPlayers.appendChild(element);
    const theCard = element.querySelector(".card");;

    theCard.innerHTML = `<div class="card-inner">
                            <div class="card-top">
                                <div class="info">
                                    <div class="value">${player.rating}</div>
                                    <div class="position">${player.position}</div>
                                </div>
                                <div class="image">
                                    <img src="${player.photo}" alt="">
                                </div>
                                 <div class="player-error-position">
                                   <span>!!!</span>
                                </div>
                            </div>
                            <div class="card-bottom">
                                <div class="name">${player.name}</div>
                                <div class="stats">
                                    <div>${player.position !== "GK" ?
            `<ul>
                                            <li><span>PAC</span><span>${player.pace}</span></li>
                                            <li><span>SHO</span><span>${player.shooting}</span></li>
                                            <li><span>PAS</span><span>${player.passing}</span></li>
                                            <li><span>DRI</span><span>${player.dribbling}</span></li>
                                            <li><span>DEF</span><span>${player.defending}</span></li>
                                            <li><span>PHY</span><span>${player.physical}</span></li>
                                        </ul> `:
            `<ul>
                                            <li><span>DIV</span><span>${player.diving}</span></li>
                                            <li><span>HAN</span><span>${player.handling}</span></li>
                                            <li><span>KIC</span><span>${player.kicking}</span></li>
                                            <li><span>REF</span><span>${player.reflexes}</span></li>
                                            <li><span>SPD</span><span>${player.speed}</span></li>
                                            <li><span>POS</span><span>${player.positioning}</span></li>
                                        </ul>`
        }
                                    </div>
                                </div>
                                <div class="country-club">
                                    <div class="country">
                                        <img src="${player.flag}" alt="">
                                    </div>
                                    <div class="club">
                                        <img src="${player.logo}" alt="">
                                    </div>
                                </div>
                            </div>
                            </div>`;
}

let filtredData = [];
let activeSlot = null;

benchButton.addEventListener('click', () => {
    players.classList.toggle('show-players');
    benchButton.classList.toggle('active-bench');

    if (activeSlot) {
        activeSlot.classList.remove('highlighted');
        activeSlot = null
    }

    allPlayers.innerHTML = '';
    const unselectedPlayers = dataOfPlayers.filter(player => !selectedPlayers.includes(player.name));
    unselectedPlayers.forEach(player => createDiv(player));
})

document.querySelectorAll('.position-slot').forEach(slot => {
    const beforeStyles = window.getComputedStyle(slot, '::before');
    const beforeContent = beforeStyles.getPropertyValue('content').slice(1, -1);
    slot.setAttribute('dataPosition', beforeContent);
});

let selectedPlayers = [];
const scrollToPayers = document.getElementById('scroll-to-players');

playersContainer.addEventListener('click', (event) => {
    const positionSlot = event.target.closest('.position-slot');
    if (positionSlot) {
        if (!benchButton.classList.contains('active-bench')) {
            benchButton.classList.add('active-bench');
        }
        if (activeSlot) {
            activeSlot.classList.remove('highlighted');
        }
        positionSlot.classList.add('highlighted');
        players.classList.add('show-players');
        players.style.cursor = "pointer";

        scrollToPayers.click();
        activeSlot = positionSlot;
        const slotPosition = positionSlot.getAttribute('dataPosition');

        filtredData = dataOfPlayers.filter(player =>
            player.position === slotPosition && !selectedPlayers.includes(player.name)
        );

        allPlayers.innerHTML = '';
        filtredData.forEach(player => createDiv(player));
    }
});



allPlayers.addEventListener('click', (event) => {
    const playerCard = event.target.closest('.card-full');

    if (playerCard && activeSlot) {
        const playerName = playerCard.querySelector('.name').textContent.trim();

        if (activeSlot.classList.contains('filled')) {

            const previousPlayerName = activeSlot.querySelector('.name').textContent.trim();
            const index = selectedPlayers.indexOf(previousPlayerName);

            if (index > -1) {
                selectedPlayers.splice(index, 1);
            }
        }

        activeSlot.innerHTML = playerCard.innerHTML;
        activeSlot.classList.add("card-full");
        activeSlot.classList.add("remove-bar");
        activeSlot.classList.add('filled');
        activeSlot.classList.remove('highlighted');
        benchButton.click();

        scrollTo(0, 0);
        selectedPlayers.push(playerName);
        activeSlot = null;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    getData();
});

const formation433 = document.getElementById('formation-433');
const formation442 = document.getElementById('formation-442');
const formation343 = document.getElementById('formation-343');
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const player5 = document.getElementById("player5");
const player6 = document.getElementById("player6");
const player7 = document.getElementById("player7");
const player8 = document.getElementById("player8");
const player9 = document.getElementById("player9");
const player10 = document.getElementById("player10");
const player11 = document.getElementById("player11");



formation433.addEventListener('click', () => {
    playersContainer.classList.remove('formation-442', 'formation-343');
    playersContainer.classList.add('formation-433');
    player5.attributes.dataPosition.value = "LB";
    player6.attributes.dataPosition.value = "CM";
    player7.attributes.dataPosition.value = "CDM";
    player9.attributes.dataPosition.value = "RW";
    player11.attributes.dataPosition.value = "LW";
    formation433.classList.add('active');
    formation442.classList.remove('active');
    formation343.classList.remove('active');

    const errorPosition = player6.children[1].children[0].children[1].children[0].innerText;

    filtredData = dataOfPlayers.find(player =>
        player.name === errorPosition
    );

    if (player6.attributes.dataPosition.value != filtredData.position) {
        player6.children[1].children[0].children[0].children[2].style.display = "flex";
    }
});

formation442.addEventListener('click', () => {
    playersContainer.classList.remove('formation-433', 'formation-343');
    playersContainer.classList.add('formation-442');
    player6.attributes.dataPosition.value = "RW";
    player5.attributes.dataPosition.value = "LB";
    player7.attributes.dataPosition.value = "CM";
    player9.attributes.dataPosition.value = "LW";
    player11.attributes.dataPosition.value = "ST";
    formation442.classList.add('active');
    formation433.classList.remove('active');
    formation343.classList.remove('active');
});

formation343.addEventListener('click', () => {
    playersContainer.classList.remove('formation-433', 'formation-442');
    playersContainer.classList.add('formation-343');
    player2.attributes.dataPosition.value = "CB";
    player5.attributes.dataPosition.value = "CM";
    player6.attributes.dataPosition.value = "CM";
    player7.attributes.dataPosition.value = "CM";
    player9.attributes.dataPosition.value = "RW";
    player11.attributes.dataPosition.value = "LW";
    formation343.classList.add('active');
    formation433.classList.remove('active');
    formation442.classList.remove('active');
});