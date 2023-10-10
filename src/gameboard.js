import Ship from "./ship"
class Gameboard{

    board = [['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','',''],
             ['','','','','','','','','','']]
    
    carrier = new Ship(5, 'Carrier')
    
    battleship = new Ship(4, 'Battleship')
    
    destroyer = new Ship(3, 'Destroyer')
   
    submarine = new Ship(3, 'Submarine')
    
    patrolBoat = new Ship(2, 'Patrol Boat')
   

    ships = [this.carrier, this.battleship, this.destroyer, this.submarine, this.patrolBoat]
 

    constructor(){

    }

    checkLegalPlacement(ship, isVertical, xCord, yCord){
        if (isVertical === true && yCord + ship.length <= 10){
            return true
        }
        else if(isVertical === false && xCord + ship.length <= 10){
            return true
        }
        else{
            return false
        }
    }

    
    



    
    placeShip(ship, isVertical, xCord, yCord){
        if(this.checkLegalPlacement(ship, isVertical, xCord, yCord) === false){
            return 'that is not a legal placement'
        }
        else{
            for (let index = 0; index < ship.length; index++) {
                if(isVertical === true){
                    this.board[yCord+index][xCord] = 'X'
                    ship.setCords(xCord, yCord+index)
                }
                else if (isVertical === false){
                    this.board[yCord][xCord+index] = 'X'
                    ship.setCords(xCord+index, yCord)
                   
                }
            }
        }
    }

    getShipAtCoords(xCord, yCord){
        let attack = [yCord, xCord]
        let foundCoord = false
        let shipAtCoord
        this.ships.forEach(ship =>{
            ship.coords.forEach(coord => {
                if(JSON.stringify(coord) === JSON.stringify(attack)){
                    shipAtCoord = ship
                    foundCoord = true
                }
            })
        })
        if(foundCoord === true){
            return shipAtCoord
        }
        
    }

    recieveAttack(xCord, yCord){
        if(this.board[yCord][xCord] === ''){
            this.board[yCord][xCord] = 'M'
        }
        else if(this.board[yCord][xCord] === 'X'){
            let ship = this.getShipAtCoords(xCord, yCord)
            this.board[yCord][xCord] = 'H'
            ship.hit()

        }
        this.ships.forEach(ship =>{
            ship.isSunk()
        })
    }
    
    checkAllShipsAreSunk(){
        let allShipsSunk = true
        this.ships.forEach(ship => {
            if(ship.sunk === false){
                allShipsSunk = false
            }
        });

        return allShipsSunk
    }
    


}


export default Gameboard