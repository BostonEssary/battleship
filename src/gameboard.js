/* eslint-disable class-methods-use-this */
import Ship from './ship';

class Gameboard {
  board = [['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']];

  carrier = new Ship(5, 'Carrier');

  battleship = new Ship(4, 'Battleship');

  destroyer = new Ship(3, 'Destroyer');

  submarine = new Ship(3, 'Submarine');

  patrolBoat = new Ship(2, 'Patrol Boat');

  ships = [this.carrier, this.battleship, this.destroyer, this.submarine, this.patrolBoat];

  checkLegalPlacement(ship, isVertical, xCord, yCord) {
    if (isVertical === true && yCord + ship.length <= 10) {
      return true;
    }
    if (isVertical === false && xCord + ship.length <= 10) {
      return true;
    }

    return false;
  }

  checkSpotsTaken(ship, isVertical, xCord, yCord) {
    let spotTaken = false;
    if (isVertical) {
      for (let index = 0; index < ship.length; index += 1) {
        if (this.board[yCord + index][xCord] !== '') {
          spotTaken = true;
        }
      }
    } else if (!isVertical) {
      for (let index = 0; index < ship.length; index += 1) {
        if (this.board[yCord][xCord + index] !== '') {
          spotTaken = true;
        }
      }
    }

    return spotTaken;
  }

  // eslint-disable-next-line consistent-return
  placeShip(ship, isVertical, xCord, yCord) {
    if (this.checkLegalPlacement(ship, isVertical, xCord, yCord) === false) {
      return 'that is not a legal placement';
    }
    if (this.checkSpotsTaken(ship, isVertical, xCord, yCord) === true) {
      return 'that is not a legal placement';
    }

    for (let index = 0; index < ship.length; index += 1) {
      if (isVertical === true) {
        this.board[yCord + index][xCord] = 'X';
        ship.setCords(xCord, yCord + index);
      } else if (isVertical === false) {
        this.board[yCord][xCord + index] = 'X';
        ship.setCords(xCord + index, yCord);
      }
    }
  }

  // eslint-disable-next-line consistent-return
  getShipAtCoords(xCord, yCord) {
    const attack = [yCord, xCord];
    let foundCoord = false;
    let shipAtCoord;
    this.ships.forEach((ship) => {
      ship.coords.forEach((coord) => {
        if (JSON.stringify(coord) === JSON.stringify(attack)) {
          shipAtCoord = ship;
          foundCoord = true;
        }
      });
    });
    if (foundCoord === true) {
      return shipAtCoord;
    }
  }

  sinkShip(ship) {
    if (ship.sunk === true) {
      ship.coords.forEach((coord) => {
        this.board[coord[0]][coord[1]] = 'S';
      });
    }
  }

  recieveAttack(xCord, yCord) {
    let ship;
    if (this.board[yCord][xCord] === '') {
      this.board[yCord][xCord] = 'M';
    } else if (this.board[yCord][xCord] === 'X') {
      ship = this.getShipAtCoords(xCord, yCord);
      this.board[yCord][xCord] = 'H';
      ship.hit();
    }
    this.ships.forEach((currentShip) => {
      currentShip.isSunk();
    });
    if (ship !== undefined) {
      this.sinkShip(ship);
    }
  }

  checkAllShipsAreSunk() {
    let allShipsSunk = true;
    this.ships.forEach((ship) => {
      if (ship.sunk === false) {
        allShipsSunk = false;
      }
    });

    return allShipsSunk;
  }
}

export default Gameboard;
