import Gameboard from './gameboard';

class Player {
  gameboard = new Gameboard();

  playerBoard = this.gameboard.board;

  constructor(name) {
    this.name = name;
  }

  // eslint-disable-next-line class-methods-use-this
  attackEnemy(enemy, xCord, yCord) {
    enemy.gameboard.recieveAttack(xCord, yCord);
  }

  // eslint-disable-next-line class-methods-use-this
  computerMove(enemy) {
    let xCoord = Math.floor(Math.random() * 10);
    let yCoord = Math.floor(Math.random() * 10);
    let chosenLegalMove = false;
    while (chosenLegalMove === false) {
      if (enemy.gameboard.board[yCoord][xCoord] === '' || enemy.gameboard.board[yCoord][xCoord] === 'X') {
        enemy.gameboard.recieveAttack(xCoord, yCoord);
        chosenLegalMove = true;
      } else {
        xCoord = Math.floor(Math.random() * 10);
        yCoord = Math.floor(Math.random() * 10);
      }
    }
  }
}

export default Player;
