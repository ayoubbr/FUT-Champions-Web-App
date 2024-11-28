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


const addPlayer = document.getElementById('add-player');
const modalContainer = document.getElementById('modal-container');
const close = document.getElementById('close');

addPlayer.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

const form = document.getElementById('form');
const playerName = document.getElementById('name');
const photo = document.getElementById('photo');
const position = document.getElementById('position');
const nationality = document.getElementById('nationality');
const flag = document.getElementById('flag');
const club = document.getElementById('club');
const logo = document.getElementById('logo');
const rating = document.getElementById('rating');
const pace = document.getElementById('pace');
const shooting = document.getElementById('shooting');
const passing = document.getElementById('passing');
const dribbling = document.getElementById('dribbling');
const defending = document.getElementById('defending');
const physical = document.getElementById('physical');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
});



function checkInputs() {
    const playerNameValue = playerName.value.trim();
    const photoValue = photo.value.trim();
    const positionValue = position.value.trim();
    const nationalityValue = nationality.value.trim();
    const flagValue = flag.value.trim();
    const clubValue = club.value.trim();
    const logoValue = logo.value.trim();
    const ratingValue = rating.value.trim();
    const paceValue = pace.value.trim();
    const shootingValue = shooting.value.trim();
    const passingValue = passing.value.trim();
    const dribblingValue = dribbling.value.trim();
    const defendingValue = defending.value.trim();
    const physicalValue = physical.value.trim();

    console.log(photoValue);


    if (playerNameValue === '') {
        setErrorFor(playerName, 'Player name cannot be empty!');
    } else {
        setSuccessFor(playerName);
    }

    if (photoValue === '') {
        setErrorFor(photo, 'Photo cannot be empty!');
    }
    else if (!URL.canParse(photoValue)) {
        setErrorFor(photo, 'Photo url is not valid!');
    }
    else {
        setSuccessFor(photo);
    }

    if (positionValue === '') {
        setErrorFor(position, 'Position cannot be empty!');
    } else {
        setSuccessFor(position);
    }

    if (nationalityValue === '') {
        setErrorFor(nationality, 'Nationality cannot be empty!');
    } else {
        setSuccessFor(nationality);
    }

    if (flagValue === '') {
        setErrorFor(flag, 'Flag cannot be empty!');
    } else if (!URL.canParse(flagValue)) {
        setErrorFor(flag, 'flag url is not valid!');
    } else {
        setSuccessFor(flag);
    }

    if (clubValue === '') {
        setErrorFor(club, 'Club cannot be empty!');
    } else {
        setSuccessFor(club);
    }

    if (logoValue === '') {
        setErrorFor(logo, 'Logo cannot be empty!');
    } else if (!URL.canParse(logoValue)) {
        setErrorFor(logo, 'logo url is not valid!');
    } else {
        setSuccessFor(logo);
    }

    if (ratingValue === '') {
        setErrorFor(rating, 'Rating be empty!');
    } else {
        setSuccessFor(rating);
    }

    if (paceValue === '') {
        setErrorFor(pace, 'Pace cannot be empty!');
    } else {
        setSuccessFor(pace);
    }

    if (shootingValue === '') {
        setErrorFor(shooting, 'Shooting cannot be empty!');
    } else {
        setSuccessFor(shooting);
    }

    if (passingValue === '') {
        setErrorFor(passing, 'Passing cannot be empty!');
    } else {
        setSuccessFor(passing);
    }

    if (dribblingValue === '') {
        setErrorFor(dribbling, 'Dribbling cannot be empty!');
    } else {

        setSuccessFor(dribbling);
    }

    if (defendingValue === '') {
        setErrorFor(defending, 'Defending cannot be empty!');
    } else {
        setSuccessFor(defending);
    }

    if (physicalValue === '') {
        setErrorFor(physical, 'Physical cannot be empty!');
    } else {
        setSuccessFor(physical);
    }

}

function setErrorFor(input, message) {
    const oneInput = input.parentElement;
    const small = oneInput.querySelector('small');
    small.innerText = message;
    oneInput.className = 'one-input error';
}

function setSuccessFor(input) {
    const oneInput = input.parentElement;
    oneInput.className = 'one-input success';
}