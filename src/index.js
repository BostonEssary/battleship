import Player from './player';
import dom from './dom';

const player1 = new Player('Boston');
const player2 = new Player('Computer');

player1.gameboard.placeShip(player1.gameboard.carrier, false, 0, 0);
player1.gameboard.placeShip(player1.gameboard.battleship, true, 4, 2);
player1.gameboard.placeShip(player1.gameboard.patrolBoat, false, 3, 7);
player1.gameboard.placeShip(player1.gameboard.destroyer, true, 7, 4);
player1.gameboard.placeShip(player1.gameboard.submarine, false, 7, 0);

player2.gameboard.placeShip(player2.gameboard.carrier, false, 0, 0);
player2.gameboard.placeShip(player2.gameboard.battleship, true, 4, 2);
player2.gameboard.placeShip(player2.gameboard.patrolBoat, false, 3, 7);
player2.gameboard.placeShip(player2.gameboard.destroyer, true, 7, 4);
player2.gameboard.placeShip(player2.gameboard.submarine, false, 7, 0);

player1.attackEnemy(player2, 0, 0);

const enemyBoardContainer = document.createElement('div');
enemyBoardContainer.id = 'enemy-board-container';
enemyBoardContainer.append(dom.drawEnemyBoard(player2, player1));
document.body.prepend(dom.drawPlayerBoard(player1));
document.body.prepend(enemyBoardContainer);

const enemySpots = document.querySelectorAll('.enemy-spot');
enemySpots.forEach((spot) => {
  spot.addEventListener('click', () => {
    const yCord = parseInt(spot.dataset.yCord);
    const xCord = parseInt(spot.dataset.xCord);
    player1.attackEnemy(player2, xCord, yCord);
    enemyBoardContainer.innerHTML = '';
    enemyBoardContainer.append(dom.drawEnemyBoard(player2));
  });
});
