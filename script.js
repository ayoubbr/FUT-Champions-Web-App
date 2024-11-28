const allPlayers = document.getElementById("players-all");

async function getData() {
    let data = await fetch("./players.json");
    let dataObject = await data.json();

    let players = dataObject.players;

    for (let index = 0; index < players.length; index++) {
        createDiv(players[index]);
    }
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
let listOfPLayers = getData();




const benchButton = document.getElementById('bench-button');
const players = document.getElementById('players');

benchButton.addEventListener('click', () => {
    players.classList.toggle('show-players');
    benchButton.firstElementChild.classList.toggle('rotate90')
})

const playersContainer = document.getElementById('players-container');
const playersAll = document.getElementById('players-all');
let activeSlot = null;

playersContainer.addEventListener('click', (event) => {
    const positionSlot = event.target.closest('.position-slot');
    if (positionSlot) {
        if (activeSlot) {
            activeSlot.classList.remove('highlighted');
        }
        positionSlot.classList.add('highlighted');
        activeSlot = positionSlot;
    }
});


playersAll.addEventListener('click', (event) => {
    const playerCard = event.target.closest('.card-full');

    if (playerCard && activeSlot) {
        activeSlot.innerHTML = playerCard.innerHTML;
        activeSlot.classList.add("card-full");
        activeSlot.classList.add("remove-bar");

        activeSlot.classList.add('filled');
        activeSlot.classList.remove('highlighted');
        activeSlot = null;
    }
});
