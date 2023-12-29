const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
            // Implement logic to create a player object with image and strength
        // Your code here
    for (let i = 0; i < players.length; i++) {
        let player = {
            name: PLAYERS[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}

// Getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';
// Loop through players and accumulate HTML template
// depending on the type of player(hero|villain)
// Your code here

// Example structure of HTML template fragment for a player:

    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`;
        }
    }

    return fragment;
}


const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}
//Uncomment this after the code completes.
window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
