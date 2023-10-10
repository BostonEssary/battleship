import { experiments } from 'webpack'
import Gameboard from './gameboard'

describe("Gameboard", () => {

    test('returns gameboard which is an arr', () => {
        let gameboard = new Gameboard()
        expect(Array.isArray(gameboard.board)).toBe(true)
    })

    test('Places ship at a starting coordinate. Entire ship should be on board represented as X', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, true, 0, 0)
        expect(gameboard.board).toStrictEqual([['X','','','','','','','','',''],
                                                                  ['X','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','','']])
    })

    test('Places patrol boat ship at a starting coordinate. Entire ship should be on board represented as X. Horizontaly', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        expect(gameboard.board).toStrictEqual([['X','X','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','','']])
    })

    test('Places carrier ship at a starting coordinate. Entire ship should be on board represented as X. Horizontaly', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.carrier, false, 0, 0)
        expect(gameboard.board).toStrictEqual([['X','X','X','X','X','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','',''],
                                                                  ['','','','','','','','','','']])
    })

    test('Places carrier ship at a starting coordinate. Entire ship should be on board represented as X. Horizontaly', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.carrier, true, 5, 0)
        expect(gameboard.board).toStrictEqual([                                     ['','','','','','X','','','',''],
                                                                                   ['','','','','','X','','','',''],
                                                                                   ['','','','','','X','','','',''],
                                                                                   ['','','','','','X','','','',''],
                                                                                   ['','','','','','X','','','',''],
                                                                                   ['','','','','','','','','',''],
                                                                                   ['','','','','','','','','',''],
                                                                                   ['','','','','','','','','',''],
                                                                                   ['','','','','','','','','',''],
                                                                                   ['','','','','','','','','','']])
    })

    test('Place a patrol boat ship in a illegal spot. Should return a string stating that the move was not legal', () =>{
        let gameboard = new Gameboard()
        expect(gameboard.placeShip(gameboard.patrolBoat, false, 9, 0)).toBe('that is not a legal placement')
    })


    test('Place a carrier ship in a illegal spot. Should return a string stating that the move was not legal', () =>{
        let gameboard = new Gameboard()
        expect(gameboard.placeShip(gameboard.carrier, false, 6, 0)).toBe('that is not a legal placement')
    })

    test('Recieve attack, which hits a patrol boat on 0,0 0,1. Marks hit on board', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        gameboard.recieveAttack(0, 0)
        expect(gameboard.board).toStrictEqual([['H','X','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','']])
    })

    test('Recieve attack, which hits an empty spot on the board. Marks miss on board', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        gameboard.recieveAttack(1, 1)
        expect(gameboard.board).toStrictEqual([['X','X','','','','','','','',''],
        ['','M','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','']])
    })

    test('place patrol boat on 0,0 0,1 and verify coords were placed into the patrolBoat object', () => {
        let gameboard = new Gameboard();
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        expect(gameboard.patrolBoat.coords).toStrictEqual([[0,0],[0,1]])
    })

    test('function should return the ship that was at 0,5 where the attack was recieved', () => {
        let gameboard = new Gameboard();
        gameboard.placeShip(gameboard.carrier, false, 0, 5)
        gameboard.recieveAttack(0, 5)
        expect(gameboard.getShipAtCoords(0,5)).toBe(gameboard.carrier)
    })

    test('retrieve attack function should now get ship at attack location and add a hit to the ship object', () => {
        let gameboard = new Gameboard();
        gameboard.placeShip(gameboard.carrier, false, 0, 5)
        gameboard.recieveAttack(0, 5)
        expect(gameboard.carrier.hits).toBe(1)
    })

    test('Places all ships on board. all ship should be on board represented as X.', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        gameboard.placeShip(gameboard.submarine, true, 1, 1 )
        gameboard.placeShip(gameboard.destroyer, true, 0,1)
        gameboard.placeShip(gameboard.battleship, false, 4,4)
        gameboard.placeShip(gameboard.carrier, true, 0,5)
        expect(gameboard.board).toStrictEqual([                   ['X','X','','','','','','','',''],
                                                                  ['X','X','','','','','','','',''],
                                                                  ['X','X','','','','','','','',''],
                                                                  ['X','X','','','','','','','',''],
                                                                  ['','','','','X','X','X','X','',''],
                                                                  ['X','','','','','','','','',''],
                                                                  ['X','','','','','','','','',''],
                                                                  ['X','','','','','','','','',''],
                                                                  ['X','','','','','','','','',''],
                                                                  ['X','','','','','','','','','']])
    })

    test('Places all ships on board. and then attacks patrolBoat. patrolBoat.sunk should then return true', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        gameboard.placeShip(gameboard.submarine, true, 1, 1 )
        gameboard.placeShip(gameboard.destroyer, true, 0,1)
        gameboard.placeShip(gameboard.battleship, false, 4,4)
        gameboard.placeShip(gameboard.carrier, true, 0,5)
        gameboard.recieveAttack(0,0)
        gameboard.recieveAttack(1,0)
        expect(gameboard.patrolBoat.sunk).toBe(true)
    })

    test('Places all ships on board and then executes checkAllShipsAreSunk() which should return false', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        gameboard.placeShip(gameboard.submarine, true, 1, 1 )
        gameboard.placeShip(gameboard.destroyer, true, 0,1)
        gameboard.placeShip(gameboard.battleship, false, 4,4)
        gameboard.placeShip(gameboard.carrier, true, 0,5)
        gameboard.recieveAttack(0,0)
        gameboard.recieveAttack(1,0)
        
        expect(gameboard.checkAllShipsAreSunk()).toBe(false)
    })

    test('Places all ships on board, attack and sink ships, and then executes checkAllShipsAreSunk() which should return true', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        gameboard.placeShip(gameboard.submarine, true, 1, 1 )
        gameboard.placeShip(gameboard.destroyer, true, 0,1)
        gameboard.placeShip(gameboard.battleship, false, 4,4)
        gameboard.placeShip(gameboard.carrier, true, 0,5)
        gameboard.recieveAttack(0,0)
        gameboard.recieveAttack(1,0)
        gameboard.recieveAttack(0,1)
        gameboard.recieveAttack(1,1)
        gameboard.recieveAttack(0,2)
        gameboard.recieveAttack(1,2)
        gameboard.recieveAttack(0,3)
        gameboard.recieveAttack(1,3)
        gameboard.recieveAttack(4,4)
        gameboard.recieveAttack(5,4)
        gameboard.recieveAttack(6,4)
        gameboard.recieveAttack(7,4)
        gameboard.recieveAttack(0,5)
        gameboard.recieveAttack(0,6)
        gameboard.recieveAttack(0,7)
        gameboard.recieveAttack(0,8)
        gameboard.recieveAttack(0,9)
        expect(gameboard.checkAllShipsAreSunk()).toBe(true)
    })
    
    
    
})

