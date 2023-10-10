import Gameboard from './gameboard';

class Player {
  gameboard = new Gameboard();

  playerBoard = this.gameboard.board;

  constructor(name) {
    this.name = name;
  }

  attackEnemy(enemy, xCord, yCord) {
    enemy.gameboard.recieveAttack(xCord, yCord);
    console.log(enemy.gameboard.board);
  }
}

export default Player;
