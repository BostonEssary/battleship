import Gameboard from "./gameboard";

let gameboard = new Gameboard()
gameboard.placeShip(gameboard.patrolBoat, true, 0, 0)
console.log(gameboard.board)
console.log(gameboard.patrolBoat.coords)