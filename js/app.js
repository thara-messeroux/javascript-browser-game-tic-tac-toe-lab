console.log("App initialized");

// State first → Screen second → Logic last
// STATE → RENDER → EVENT → STATE → RENDER → EVENT → ...
/*
The UI is a mirror.
State is the truth.
Events change the truth.
*/
// click → update state → render again



/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], /* top row */
    [3, 4, 5], /* middle row */
    [6, 7, 8], /* bottom row */

    [0, 3, 6], /* left column */
    [1, 4, 7], /* middle column */
    [2, 5, 8], /* right column */

    [0, 4, 8], /* diagonal */
    [2, 4, 6]  /* diagonal */
];




/*---------------------------- Variables (state) ----------------------------*/

// State first
// STATE

// a.Use a variable named board to represent the state of the squares on the board.

// b.Use a variable named turn to track whose turn it is.

// c.Use a variable named winner to represent if anyone has won yet.

// d.Use a variable named tie to represent if the game has ended in a tie.

let board;   // what’s in each square
let turn;    // whose turn it is
let winner;  // who won (or null)
let tie;     // did the game end in a tie?

/*------------------------ Cached Element References ------------------------*/

// Screen second
// RENDER

// a.In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('.sqr');
// b.In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.getElementById('message');
console.log('squareEls:', squareEls);
console.log('messageEl:', messageEl);


/*-------------------------------- Functions --------------------------------*/

// Screen second
// RENDER

function init() {

    console.log('init ran');

    // The board array represents the 3x3 grid of the Tic-Tac-Toe game.
    // Each element in the array corresponds to a square on the board,
    // with indices 0-2 for the first row, 3-5 for the second row, and 6-8 for the third row.
    // An empty string '' indicates an unoccupied square, while 'X' or 'O' indicates
    // that the square is occupied by player X or player O, respectively.

    board = Array(9).fill('');  // Start with an empty board

    turn = 'X';      // X always starts first
    winner = false;   // No winner at the start
    tie = false;     // No tie at the start
    render(); // Render the initial state of the game
    
}

init();

// Update the board display based on the current state
function render() {
    console.log('render ran'); 
    updateBoard();
    updateMessage();
    
}

// This function's job is ONLY to update what the player sees on the screen
// It does NOT change the game rules or memory
function updateBoard() {

    // This line just helps us check that the function actually ran
    console.log('updateBoard ran');

    // We go through EACH spot in our game memory (the board array)
    // Think: "Let's check square 0, then 1, then 2… all the way to 8"
    board.forEach((mark, index) => {

        // `mark` = what is stored in memory for this square
        // It could be:
        // 'X' → player X played here
        // 'O' → player O played here
        // ''  → nobody played here yet

        // `index` = which square number we are on (0–8)

        // Now we update the SCREEN to match the MEMORY
        // We find the square on the page that matches this index
        // and put the letter from memory inside it
        squareEls[index].textContent = mark;

        // style the square depending on the mark ('X', 'O', or '')
        squareEls[index].classList.toggle('x', mark === 'X');
        squareEls[index].classList.toggle('o', mark === 'O');

    });
}

// render function
// read state from memory but does NOT change anything in memory
function updateMessage() {
    console.log('updateMessage ran');

    if (winner === false && tie === false) {
        messageEl.textContent = `It's ${turn}'s turn!`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!";
    } else {
        messageEl.textContent = `${turn} wins!`;
    }
}

function handleClick(evt) {
    console.log('square clicked');

    const squareIndex = evt.target.id; /* 🐞 which square was clicked (0–8) */
    console.log('squareIndex:', squareIndex);
}






             

/*----------------------------- Event Listeners -----------------------------*/
// EVENT
// Logic last

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick); /* 🦋 listen for clicks */
});
