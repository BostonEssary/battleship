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

  computerPlaceShips() {
    this.gameboard.ships.forEach((ship) => {
      const verticalShip = Math.floor(Math.random() * 2);
      if (verticalShip === 0) {
        const xCoord = Math.floor(Math.random() * (10 - ship.length));
        const yCoord = Math.floor(Math.random() * 10);

        this.gameboard.placeShip(ship, false, xCoord, yCoord);
        console.log(this.gameboard.placeShip(ship, false, xCoord, yCoord));
      } else {
        const xCoord = Math.floor(Math.random() * 10);
        const yCoord = Math.floor(Math.random() * (10 - ship.length));
        console.log(ship);
        console.log([xCoord, yCoord]);
        this.gameboard.placeShip(ship, true, xCoord, yCoord);
      }
    });
  }
}

export default Player;
