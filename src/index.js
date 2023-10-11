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

const enemyBoardContainer = document.createElement('div');
enemyBoardContainer.id = 'enemy-board-container';
enemyBoardContainer.append(dom.drawEnemyBoard(player2, player1));
const playerBoardContainer = document.createElement('div');
playerBoardContainer.id = 'player-board-container';
playerBoardContainer.append(dom.drawPlayerBoard(player1));
document.body.prepend(playerBoardContainer);
document.body.prepend(enemyBoardContainer);
