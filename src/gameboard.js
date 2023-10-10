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