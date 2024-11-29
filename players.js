const allPlayers = document.getElementById("players-all");
let dataOfPlayers = [];

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

function saveToLocalStorage() {
    localStorage.setItem("playersData", JSON.stringify(dataOfPlayers));
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
const submitButton = document.getElementById('submit-button');



position.addEventListener('change', (event) => {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';

    if (event.target.value === "GK") {
        statsContainer.innerHTML =
            `<div class="one-line">         
            <div class="one-input-box">
                <label for="diving">diving</label>
                <div class="one-input">
                    <input type="number" id="diving" placeholder="e.g 99">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-exclamation"></i>
                    <small>Error message</small>
                </div>
            </div>
            <div class="one-input-box">
                <label for="handling">handling</label>
                <div class="one-input">
                    <input type="number" id="handling" placeholder="e.g 99">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-exclamation"></i>
                    <small>Error message</small>
                </div>
            </div>
            <div class="one-input-box">
                <label for="kicking">kicking</label>
                <div class="one-input">
                    <input type="number" id="kicking" placeholder="e.g 99">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-exclamation"></i>
                    <small>Error message</small>
                </div>
            </div>
            </div>
            <div class="one-line">
            <div class="one-input-box">
                <label for="reflexes">reflexes</label>
                <div class="one-input">
                    <input type="number" id="reflexes" placeholder="e.g 99">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-exclamation"></i>
                    <small>Error message</small>
                </div>
            </div>
            <div class="one-input-box">
                <label for="speed">speed</label>
                <div class="one-input">
                    <input type="number" id="speed" placeholder="e.g 99">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-exclamation"></i>
                    <small>Error message</small>
                </div>
            </div>
            <div class="one-input-box">
                <label for="positioning">positioning</label>
                <div class="one-input">
                    <input type="number" id="positioning" placeholder="e.g 99">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-exclamation"></i>
                    <small>Error message</small>
                </div>
            </div>
        </div>`
    } else {
        statsContainer.innerHTML =
            `<div class="one-line">
        <div class="one-input-box">
            <label for="pace">Pace</label>
            <div class="one-input">
                <input type="number" id="pace" placeholder="e.g 99">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-exclamat ion"></i>
                <small>Error message</small>
            </div>
        </div>
        <div class="one-input-box">
            <label for="shooting">Shooting</label>
            <div class="one-input">
                <input type="number" id="shooting" placeholder="e.g 99">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-exclamation"></i>
                <small>Error message</small>
            </div>
        </div>
        <div class="one-input-box">
            <label for="passing">Passing</label>
            <div class="one-input">
                <input type="number" id="passing" placeholder="e.g 99">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-exclamation"></i>
                <small>Error message</small>
            </div>
        </div>
        </div>
        <div class="one-line">
        <div class="one-input-box">
            <label for="dribbling">Dribbling</label>
            <div class="one-input">
                <input type="number" id="dribbling" placeholder="e.g 99">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-exclamation"></i>
                <small>Error message</small>
            </div>
        </div>
        <div class="one-input-box">
            <label for="defending">Defending</label>
            <div class="one-input">
                <input type="number" id="defending" placeholder="e.g 99">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-exclamation"></i>
                <small>Error message</small>
            </div>
        </div>
        <div class="one-input-box">
            <label for="physical">Physical</label>
            <div class="one-input">
                <input type="number" id="physical" placeholder="e.g 99">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-exclamation"></i>
                <small>Error message</small>
            </div>
        </div>
    </div>`
    }
})


function checkInputs() {
    let isValid = true;

    const playerNameValue = playerName.value.trim();
    const photoValue = photo.value.trim();
    const positionValue = position.value.trim();
    const nationalityValue = nationality.value.trim();
    const flagValue = flag.value.trim();
    const clubValue = club.value.trim();
    const logoValue = logo.value.trim();
    const ratingValue = rating.value.trim();

    let paceValue, shootingValue, passingValue, dribblingValue, defendingValue, physicalValue;
    let divingValue, handlingValue, kickingValue, reflexesValue, speedValue, positioningValue;

    if (positionValue === "GK") {
        divingValue = document.getElementById("diving")?.value.trim();
        handlingValue = document.getElementById("handling")?.value.trim();
        kickingValue = document.getElementById("kicking")?.value.trim();
        reflexesValue = document.getElementById("reflexes")?.value.trim();
        speedValue = document.getElementById("speed")?.value.trim();
        positioningValue = document.getElementById("positioning")?.value.trim();

        if (divingValue === '') {
            setErrorFor(diving, 'diving cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(diving);
        }
        if (handlingValue === '') {
            setErrorFor(handling, 'handling cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(handling);
        }
        if (kickingValue === '') {
            setErrorFor(kicking, 'kicking cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(kicking);
        }
        if (reflexesValue === '') {
            setErrorFor(reflexes, 'reflexes cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(reflexes);
        }
        if (speedValue === '') {
            setErrorFor(speed, 'speedl cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(speed);
        }
        if (positioningValue === '') {
            setErrorFor(positioning, 'positioning cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(positioning);
        }

    } else {
        paceValue = document.getElementById("pace")?.value.trim();
        shootingValue = document.getElementById("shooting")?.value.trim();
        passingValue = document.getElementById("passing")?.value.trim();
        dribblingValue = document.getElementById("dribbling")?.value.trim();
        defendingValue = document.getElementById("defending")?.value.trim();
        physicalValue = document.getElementById("physical")?.value.trim();

        if (paceValue === '') {
            setErrorFor(pace, 'Pace cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(pace);
        }
        if (shootingValue === '') {
            setErrorFor(shooting, 'Shooting cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(shooting);
        }
        if (passingValue === '') {
            setErrorFor(passing, 'Passing cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(passing);
        }
        if (dribblingValue === '') {
            setErrorFor(dribbling, 'Dribbling cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(dribbling);
        }
        if (defendingValue === '') {
            setErrorFor(defending, 'Defending cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(defending);
        }

        if (physicalValue === '') {
            setErrorFor(physical, 'Physical cannot be empty!');
            isValid = false;
        } else {
            setSuccessFor(physical);
        }
    }


    if (playerNameValue === '') {
        setErrorFor(playerName, 'Player name cannot be empty!');
        isValid = false;
    } else {
        setSuccessFor(playerName);
    }
    if (photoValue === '') {
        setErrorFor(photo, 'Photo cannot be empty!');
        isValid = false;
    } else if (!URL.canParse(photoValue)) {
        setErrorFor(photo, 'Photo url is not valid!');
        isValid = false;
    } else {
        setSuccessFor(photo);
    }
    if (positionValue === '') {
        setErrorFor(position, 'Position cannot be empty!');
        isValid = false;
    } else {
        setSuccessFor(position);
    }
    if (nationalityValue === '') {
        setErrorFor(nationality, 'Nationality cannot be empty!');
        isValid = false;
    } else {
        setSuccessFor(nationality);
    }
    if (flagValue === '') {
        setErrorFor(flag, 'Flag cannot be empty!');
        isValid = false;
    } else if (!URL.canParse(flagValue)) {
        setErrorFor(flag, 'flag url is not valid!');
        isValid = false;
    } else {
        setSuccessFor(flag);
    }
    if (clubValue === '') {
        setErrorFor(club, 'Club cannot be empty!');
        isValid = false;
    } else {
        setSuccessFor(club);
    }
    if (logoValue === '') {
        setErrorFor(logo, 'Logo cannot be empty!');
        isValid = false;
    } else if (!URL.canParse(logoValue)) {
        setErrorFor(logo, 'logo url is not valid!');
        isValid = false;
    } else {
        setSuccessFor(logo);
    }
    if (ratingValue === '') {
        setErrorFor(rating, 'Rating be empty!');
        isValid = false;
    } else {
        setSuccessFor(rating);
    }

    return isValid;
}

function setErrorFor(input, message) {
    if (!input) return;
    const oneInput = input.parentElement;
    if (!oneInput) return;
    const small = oneInput.querySelector('small');
    small.innerText = message;
    oneInput.className = 'one-input error';
}

function setSuccessFor(input) {
    if (!input) return;
    const oneInput = input.parentElement;
    if (!oneInput) return;
    oneInput.className = 'one-input success';
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkInputs()) {
        const newPlayer = {
            name: playerName.value.trim(),
            photo: photo.value.trim(),
            position: position.value.trim(),
            nationality: nationality.value.trim(),
            flag: flag.value.trim(),
            logo: logo.value.trim(),
            rating: rating.value.trim(),
            ...(position.value.trim() === "GK"
                ? {
                    diving: document.getElementById("diving").value.trim(),
                    handling: document.getElementById("handling").value.trim(),
                    kicking: document.getElementById("kicking").value.trim(),
                    reflexes: document.getElementById("reflexes").value.trim(),
                    speed: document.getElementById("speed").value.trim(),
                    positioning: document.getElementById("positioning").value.trim(),
                }
                : {
                    pace: document.getElementById("pace").value.trim(),
                    shooting: document.getElementById("shooting").value.trim(),
                    passing: document.getElementById("passing").value.trim(),
                    dribbling: document.getElementById("dribbling").value.trim(),
                    defending: document.getElementById("defending").value.trim(),
                    physical: document.getElementById("physical").value.trim(),
                }),


        };

        dataOfPlayers.push(newPlayer);
        saveToLocalStorage();
        createDiv(newPlayer);
        modalContainer.classList.remove("show");
        form.reset();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    getData();
});



