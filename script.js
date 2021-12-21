
// Search bar with an array of strings
    const searchBar = (value) => {

    const filteredPlayers = playerNamess.filter(playerName =>  playerName.toLowerCase().includes(value.toLowerCase()));

    if (filteredPlayers.length > 0 && value.length > 0) {
        document.getElementById("result").innerText = filteredPlayers.join(" , ");
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("result").style.display = "none";
    }
    console.log(filteredPlayers);
}


// Search bar with an array of Objects
const searchPlayer = (value) => {

    const filteredPlayers = playerNames.filter(playerName =>  playerName.name.toLowerCase().includes(value.toLowerCase()));

    if (filteredPlayers.length > 0 && value.length > 0) {
        document.getElementById("display").innerText = filteredPlayers.map(player => player.name).join(" , ")
        document.getElementById("display").style.display = "block";
    } else {
        document.getElementById("display").style.display = "none";
    }  
    console.log(filteredPlayers);
}



// Getting player name by selection of player country.
const selector = (value) => {
    
    const selectPlayer = playerNames.filter(playerName => playerName.country.includes(value));

    if (selector.length > 0 && value.length > 0){
        document.getElementById("select").innerText = selectPlayer.map(playerName => playerName.name).join(" , ")
        document.getElementById("select").style.display = "block"
    } else{
        document.getElementById("select").style.display = "none"
    }

    console.log(selectPlayer)
    
} 


