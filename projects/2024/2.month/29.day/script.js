const names = [
    "Adamec Ondřej",
    "Beutler Filip",
    "Brož Matěj",
    "Do Tony",
    "Hladík Vojtěch",
    "Klaška Josef",
    "Kodeš Ondřej",
    "Koritko Jan",
    "Kratochvíl Jakub",
    "Levchenko Radomyr",
    "Očenáš František Filip",
    "Pecha Jakub",
    "Poddaný Lukáš",
    "Podolský Jiří",
    "Porubský Max",
    "Prokeš Tomáš",
    "Sanejstr Filip",
    "Schod Filip",
    "Štros Svatoplus",
    "Tůma Kryštof",
    "Vašíček Martin",
    "Verner Michal"
]
let players = names;

let winners = [];
let losers = [];

const playerName = document.querySelectorAll(".p-text");

playerName[0].innerHTML = getRandomPlayer();
playerName[1].innerHTML = getRandomPlayer();

function getRandomPlayer(){
    let random = Math.floor(Math.random() * names.length);
    return players[random];   
}

function battle(p1, p2){
    if (Math.random <= 0.5){
        winners.push(p1);
        losers.push(p2);
    }
    else{
        losers.push(p1);
        winners.push(p2);
    }
}