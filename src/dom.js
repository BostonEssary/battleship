function addSpotsWithIcons(player, newRow, i) {
  for (let j = 0; j < player.gameboard.board[i].length; j += 1) {
    const spot = document.createElement('div');
    spot.classList.add('spot');
    if (player.gameboard.board[i][j] === 'X') {
      spot.innerText = 'X';
    } else if (player.gameboard.board[i][j] === 'M') {
      const wave = document.createElement('img');
      wave.src = '../assets/icons/waves.svg';
      wave.classList.add('icon');
      spot.append(wave);
    } else if (player.gameboard.board[i][j] === 'S') {
      const skull = document.createElement('img');
      skull.src = '../assets/icons/skull.svg';
      skull.classList.add('icon');
      spot.append(skull);
    } else if (player.gameboard.board[i][j] === 'H') {
      const explosion = document.createElement('img');
      explosion.src = '../assets/icons/explosion.svg';
      explosion.classList.add('icon');
      spot.append(explosion);
    } else { spot.innerText = player.gameboard.board[i][j]; }
    spot.dataset.yCord = i;
    spot.dataset.xCord = j;
    newRow.append(spot);
  }
}

function addRows(player, playerBoard) {
  for (let i = 0; i < player.gameboard.board.length; i += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    addSpotsWithIcons(player, newRow, i);
    playerBoard.append(newRow);
  }
}

function displayWinner(player, computer) {
  if (player.gameboard.checkAllShipsAreSunk() === true) {
    console.log(`${player.name} has lost`);
  } else if (computer.gameboard.checkAllShipsAreSunk() === true) {
    console.log(`${computer.name} has lost`);
  }
}

function drawPlayerBoard(player) {
  const playerBoard = document.createElement('div');
  const boardHeader = document.createElement('h2');
  boardHeader.textContent = 'Your Board';
  playerBoard.id = 'player-board';
  playerBoard.classList.add('board');
  addRows(player, playerBoard);
  playerBoard.prepend(boardHeader);
  return playerBoard;
}

function drawEnemyBoard(player, enemy) {
  const playerBoard = document.createElement('div');
  const boardHeader = document.createElement('h2');
  boardHeader.textContent = `${player.name}'s Board`;
  playerBoard.id = 'enemy-board';
  playerBoard.classList.add('board');
  playerBoard.prepend(boardHeader);
  for (let i = 0; i < player.gameboard.board.length; i += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let j = 0; j < player.gameboard.board[i].length; j += 1) {
      const spot = document.createElement('div');
      spot.classList.add('spot');
      spot.classList.add('enemy-spot');
      if (player.gameboard.board[i][j] === 'X') {
        spot.innerText = '';
      } else if (player.gameboard.board[i][j] === 'M') {
        const wave = document.createElement('img');
        wave.src = '../assets/icons/waves.svg';
        wave.classList.add('icon');
        spot.append(wave);
      } else if (player.gameboard.board[i][j] === 'S') {
        const skull = document.createElement('img');
        skull.src = '../assets/icons/skull.svg';
        skull.classList.add('icon');
        spot.append(skull);
      } else if (player.gameboard.board[i][j] === 'H') {
        const explosion = document.createElement('img');
        explosion.src = '../assets/icons/explosion.svg';
        explosion.classList.add('icon');
        spot.append(explosion);
      } else { spot.innerText = player.gameboard.board[i][j]; }
      spot.dataset.yCord = i;
      spot.dataset.xCord = j;
      spot.addEventListener('click', () => {
        // eslint-disable-next-line no-use-before-define
        drawBoardWithNewMoves(player, enemy, spot);
        displayWinner(player, enemy);
      });
      newRow.append(spot);
    }
    playerBoard.append(newRow);
  }
  return playerBoard;
}

function drawBoardWithNewMoves(player, enemy, spot) {
  const enemyBoardContainer = document.getElementById('enemy-board-container');
  const playerBoardContainer = document.getElementById('player-board-container');
  const yCord = parseInt(spot.dataset.yCord, 10);
  const xCord = parseInt(spot.dataset.xCord, 10);
  player.gameboard.recieveAttack(xCord, yCord);

  player.computerMove(enemy);
  enemyBoardContainer.innerHTML = '';
  playerBoardContainer.innerHTML = '';
  enemyBoardContainer.append(drawEnemyBoard(player, enemy));
  playerBoardContainer.append(drawPlayerBoard(enemy));
}

function handleEnemyBoardClicks(attackingPlayer, attackedPlayer) {
  const enemyBoardContainer = document.getElementById('enemy-board-container');

  const enemySpots = document.querySelectorAll('.enemy-spot');
  enemySpots.forEach((spot) => {
    spot.addEventListener('click', () => {
      const yCord = parseInt(spot.dataset.yCord, 10);
      const xCord = parseInt(spot.dataset.xCord, 10);
      attackingPlayer.attackEnemy(attackedPlayer, xCord, yCord);
      enemyBoardContainer.innerHTML = '';
      enemyBoardContainer.append(drawEnemyBoard(attackedPlayer));
    });
  });
}

export default { drawPlayerBoard, drawEnemyBoard, handleEnemyBoardClicks };
