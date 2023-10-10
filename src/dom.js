function drawPlayerBoard(player, id) {
  const playerBoard = document.createElement('div');
  playerBoard.id = id;
  playerBoard.classList.add('board');

  for (let i = 0; i < player.gameboard.board.length; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
      const spot = document.createElement('div');
      spot.classList.add('spot');
      spot.innerText = player.gameboard.board[i][j];
      newRow.append(spot);
    }
    playerBoard.append(newRow);
  }
  return playerBoard;
}

export default { drawPlayerBoard };
