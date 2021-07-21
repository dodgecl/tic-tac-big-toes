const player = "X";
const computer = "O";

let board_full = false;
var play_board = ["","","","","","","","","",];

const board_container = document.getElementById("play-area");

const render_board = () => {
  board_container.innerHTML = "";
  play_board.forEach((val, index) =>{
      board_container.innerHTML += `<div id="block_${index}" class="block" onclick="addPlayerMove(${index})">${play_board[index]}</div>`;
    
      if (val === "X"|| val === "O")
        {
          document.querySelector(`#block_${index}`).classList.add("occupied");
        }
  });
};

const addPlayerMove = function(value) {
  if (!board_full && index === "") {
    play_board[index] = player;
    render_board();
    addComputerMove();
  }
};

const addComputerMove = () => {
    if(!board_full){
        let selected;
        do{
            let selected = Math.floor(Math.random() * 9);
        }while(play_board[selected] != "");
        play_board[selected] = computer;
        render_board();
    }
};

const check_board_complete = function() {
    let flag = true;
    debugger;
    play_board.forEach(value => {
        if (element != player && element != computer) {
            flag = false;
        }
    });

}

const game_func = () => {
render_board();
check_board_complete();
};



render_board();