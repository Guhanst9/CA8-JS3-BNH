// welcome the player and get name
const choices = ["Bear", "Ninja", "Hunter"];
let playAgain = true;

while (playAgain) {
    // welcome and name prompt
    let playerName = prompt("Welcome to Bear Ninja Hunter! Please enter your name:");

    if (playerName === null || playerName.trim() === "") {
        alert("Invalid input. Please enter your name to start the game.");
        break;
    }

    // alert to greet
    alert(`Hello ${playerName}! Let's play Bear Ninja Hunter!`);

    // prompt for the player's choice
    let playerChoice = prompt("Choose your character: Bear, Ninja, or Hunter?");

    // cancel check for player choice
    if (playerChoice === null) {
        alert("Game cancelled. Reload the page to start over.");
        break;
    }

    // check empty or invalid input before forcing case
    if (playerChoice.trim() === "") {
        alert("Invalid input. Please type Bear, Ninja, or Hunter exactly as shown.");
        break;
    }

    // force case
    playerChoice = playerChoice.trim().toLowerCase();

    // validate input after forced case
    if (!choices.map(choice => choice.toLowerCase()).includes(playerChoice)) {
        alert("Invalid input. Please type Bear, Ninja, or Hunter exactly as shown.");
        break;
    }

    // capitalize first letter to match array items
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    // random computer choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // create personalized message
    let gameResults = `${playerName} chose ${playerChoice}. Computer chose ${computerChoice}.`;

    // determine winner using if/elseif statements
    let winner = '';
    if (playerChoice === 'Bear' && computerChoice === 'Bear') {
        winner = 'Tie';
    } 
    else if (playerChoice === 'Ninja' && computerChoice === 'Ninja') {
        winner = 'Tie';
    } 
    else if (playerChoice === 'Hunter' && computerChoice === 'Hunter') {
        winner = 'Tie';
    } 
    else if (playerChoice === 'Bear' && computerChoice === 'Ninja') {
        winner = 'User';
    } 
    else if (playerChoice === 'Ninja' && computerChoice === 'Hunter') {
        winner = 'User';
    } 
    else if (playerChoice === 'Hunter' && computerChoice === 'Bear') {
        winner = 'User';
    } 
    else if (playerChoice === 'Hunter' && computerChoice === 'Ninja') {
        winner = 'Computer';
    } 
    else if (playerChoice === 'Bear' && computerChoice === 'Hunter') {
        winner = 'Computer';
    } 
    else if (playerChoice === 'Ninja' && computerChoice === 'Bear') {
        winner = 'Computer';
    }

    // use switch to create winner message
    let winnerMessage = '';
    switch (winner) {
        case 'Tie':
            winnerMessage = 'It\'s a tie!';
            break;
        case 'User':
            winnerMessage = `${playerName} wins!`;
            break;
        case 'Computer':
            winnerMessage = 'Computer wins!';
            break;
    }

    // combine game results with announcement
    let finalResults = gameResults + ' ' + winnerMessage;

    // output to page 
    document.getElementById('demo').innerHTML = finalResults;

    // output to console with concatenation
    console.log(finalResults);

    // different concatenation method
    console.log("Player: " + playerName + ", Choice: " + playerChoice + "!");

    // ask to play again
    let again = prompt("Do you want to play again? Yes or No");
    if (again === null) {
        alert("Game cancelled. Thanks for playing!");
        break;
    }

    again = again.trim().toLowerCase();
    if (again !== "yes") {
        alert("Thanks for playing Bear Ninja Hunter!");
        playAgain = false;
    }
}