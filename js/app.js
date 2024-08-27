/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board;  
let turn;   
let winner;
let tie;    
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');  
const messageEl = document.getElementById('message');

/*-------------------------------- Functions --------------------------------*/
function init() {
  console.log('Initializing the game...');
  board = Array(9).fill('');  
  tie = false;
  render();                   
}

/*----------------------------- Event Listeners -----------------------------*/

// Call function to start game
init();
