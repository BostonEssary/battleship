import Gameboard from './gameboard'

describe("Gameboard", () => {

    test('returns gameboard which is an arr', () => {
        let gameboard = new Gameboard()
        expect(Array.isArray(gameboard.board)).toBe(true)
    })

    test('Places ship at a starting coordinate. Entire ship should be on board represented as X', () => {
        let gameboard = new Gameboard()
        expect(gameboard.placeShip(gameboard.patrolBoat, true, 0, 0)).toStrictEqual([['X','','','','','','','','',''],
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
        expect(gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)).toStrictEqual([['X','X','','','','','','','',''],
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
        expect(gameboard.placeShip(gameboard.carrier, false, 0, 0)).toStrictEqual([['X','X','X','X','X','','','','',''],
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

    test('Place a patrol boat ship in a illegal spot. Should return a string stating that the move was not legal', () =>{
        let gameboard = new Gameboard()
        expect(gameboard.placeShip(gameboard.patrolBoat, false, 9, 0)).toBe('that is not a legal placement')
    })

    test('Return all ship coordinates as 2d arr', () => {
        let gameboard = new Gameboard()
        gameboard.placeShip(gameboard.patrolBoat, false, 0, 0)
        expect(gameboard.getShipCords(gameboard.patrolBoat)).toStrictEqual([[0,0], [0,1]])
        
    })

    test('Place a carrier ship in a illegal spot. Should return a string stating that the move was not legal', () =>{
        let gameboard = new Gameboard()
        expect(gameboard.placeShip(gameboard.carrier, false, 6, 0)).toBe('that is not a legal placement')
    })
    
    
})