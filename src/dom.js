function drawPlayerBoard(player) {
  const playerBoard = document.createElement('div');
  playerBoard.id = 'player-board';
  playerBoard.classList.add('board');

  for (let i = 0; i < player.gameboard.board.length; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
      const spot = document.createElement('div');
      spot.classList.add('spot');
      spot.innerText = player.gameboard.board[i][j];
      spot.dataset.yCord = i;
      spot.dataset.xCord = j;
      newRow.append(spot);
    }
    playerBoard.append(newRow);
  }
  return playerBoard;
}

function drawEnemyBoard(player) {
  const playerBoard = document.createElement('div');
  playerBoard.id = 'enemy-board';
  playerBoard.classList.add('board');

  for (let i = 0; i < player.gameboard.board.length; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
      const spot = document.createElement('div');
      spot.classList.add('spot');
      spot.classList.add('enemy-spot');
      spot.innerText = player.gameboard.board[i][j];
      spot.dataset.yCord = i;
      spot.dataset.xCord = j;
      spot.addEventListener('click', () => {
        const enemyBoardContainer = document.getElementById('enemy-board-container');
        const yCord = parseInt(spot.dataset.yCord);
        const xCord = parseInt(spot.dataset.xCord);
        player.gameboard.recieveAttack(xCord, yCord);
        enemyBoardContainer.innerHTML = '';
        enemyBoardContainer.append(drawEnemyBoard(player));
      });
      newRow.append(spot);
    }
    playerBoard.append(newRow);
  }
  return playerBoard;
}

function handleEnemyBoardClicks(attackingPlayer, attackedPlayer) {
  const enemyBoardContainer = document.getElementById('enemy-board-container');

  const enemySpots = document.querySelectorAll('.enemy-spot');
  enemySpots.forEach((spot) => {
    spot.addEventListener('click', () => {
      const yCord = parseInt(spot.dataset.yCord);
      const xCord = parseInt(spot.dataset.xCord);
      attackingPlayer.attackEnemy(attackedPlayer, xCord, yCord);
      enemyBoardContainer.innerHTML = '';
      enemyBoardContainer.append(drawEnemyBoard(attackedPlayer));
    });
  });
}

export default { drawPlayerBoard, drawEnemyBoard, handleEnemyBoardClicks };
