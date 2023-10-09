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
    shipCords = {
        "Carrier" : [],
        "Battleship": [],
        "Destroyer": [],
        "Submarine":[],
        "Patrol Boat": []
    }

    constructor(){

    }

    checkLegalPlacement(ship, isVertical, xCord, yCord){
        if (isVertical === true && yCord + ship.length <= 9){
            return true
        }
        else if(isVertical === false && xCord + ship.length <= 9){
            return true
        }
        else{
            return false
        }
    }

    setShipCords(ship, yCord, xCord){
        this.shipCords[ship.name].push([yCord, xCord])
    }

    getShipCords(ship){
       return this.shipCords[ship.name]
    }


    
    placeShip(ship, isVertical, xCord, yCord){
        if(this.checkLegalPlacement(ship, isVertical, xCord, yCord) === false){
            return 'that is not a legal placement'
        }
        else{
            for (let index = 0; index < ship.length; index++) {
                if(isVertical === true){
                    this.board[yCord+index][xCord] = 'X'
                    this.setShipCords(ship,yCord+index, xCord)
                }
                else if (isVertical === false){
                    this.board[yCord][xCord+index] = 'X'
                    this.setShipCords(ship,yCord, xCord+index)
                }
            }
            return this.board
        }
    }

    recieveAttack(xCord, yCord){
        if(this.board[yCord][xCord] === ''){
            this.board[yCord][xCord] = 'M'
        }
        else if(this.board[yCord][xCord] === 'X'){

            this.board[yCord][xCord] = 'H'
            

        }
    }


}


export default Gameboard