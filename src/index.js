import Gameboard from "./gameboard";

let gameboard = new Gameboard()
gameboard.placeShip(gameboard.patrolBoat, true, 0, 0)
gameboard.placeShip(gameboard.carrier, true, 5, 0)
console.log(gameboard.patrolBoat)
console.log(gameboard.carrier)
gameboard.recieveAttack(0,0)
console.log(gameboard.getShipAtCoords(5,0))


