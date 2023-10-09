import Gameboard from "./gameboard";

let gameboard = new Gameboard()

console.log(gameboard.board)

console.log(gameboard.placeShip(gameboard.patrolBoat, false, 0, 0))
console.log(gameboard.recieveAttack(0,0))
console.log(gameboard.shipCords)
console.log(gameboard.getKeyByValue)
console.log(gameboard.getKeyByValue(gameboard.shipCords, [0, 0]))