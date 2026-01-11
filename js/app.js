console.log("App initialized");

// State first → Screen second → Logic last


/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

// State first 

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

// a.In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('.sqr');
// b.In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.getElementById('message');
console.log('squareEls:', squareEls);
console.log('messageEl:', messageEl);


/*-------------------------------- Functions --------------------------------*/

//  Logic last

function init() {

    console.log('init ran');

    // The board array represents the 3x3 grid of the Tic-Tac-Toe game.
    // Each element in the array corresponds to a square on the board,
    // with indices 0-2 for the first row, 3-5 for the second row, and 6-8 for the third row.
    // An empty string '' indicates an unoccupied square, while 'X' or 'O' indicates
    // that the square is occupied by player X or player O, respectively.

    board = ['', '', '',
        '', '', '',
        '', '', ''];

    turn = 'X';      // X always starts first
    winner = false;   // No winner at the start
    tie = false;     // No tie at the start
    render(); // Render the initial state of the game

}

init();

// Update the board display based on the current state
function render() {
    console.log('render ran'); 
    
}


// initialize 9-element board array representing 3x3 grid and document empty ('') vs 'X'/'O' markers




             

/*----------------------------- Event Listeners -----------------------------*/

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

