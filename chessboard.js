let whiteQueen = [0, 5];
let blackQueen = [5, 0];
const generatedBoard = (whiteQueen, blackQueen) => {
  
  let chessBoard = [];
  //create board with zeros
  for (let i = 0; i < 8; i++ ){
    let row = [];
    for (let j = 0; j < 8; j++){
      row.push(0);
    }
    chessBoard.push(row);
  }
  //add queen positions
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return chessBoard;
}

const queenThreat = (chessBoard) => {
  let queensPosition = [];
  // find the queens => there are 2 ways
  // Retrieve the position from the board input as done below or
  // Use the White and Black Queen declared variables directly for position comparison
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chessBoard[i][j] === 1){
        queensPosition.push([i, j]);
      } 
    }
  }
  //Threat to Queens, what positions can expose an attack?
  if (queensPosition[0][0] === queensPosition[1][0] || queensPosition[0][1] === queensPosition[1][1]
                          || queensPosition[0][0] === queensPosition[1][1]){
    return true;
  } else {
    return false;
  }

}

let board = generatedBoard(whiteQueen, blackQueen);

console.log(board);
console.log(queenThreat(board));