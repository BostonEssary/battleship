import Ship from "./ship"


describe("Ship", () => {
    

    test('returns a ship with a length of 2', () => {
        const ship = new Ship(2)
        expect(ship.length).toBe(2)
    })
    
    test('returns a ship with 0 hits', () =>{
        const ship = new Ship(2)
        expect(ship.hits).toBe(0)
    })

    test('returns a ship with 1 hit', () =>{
        const ship = new Ship(2)
        ship.hit()
        expect(ship.hits).toBe(1)
    })

    test('returns a ship with 2 hits', () => {
        const ship = new Ship(2)
        ship.hit()
        ship.hit()
        expect(ship.hits).toBe(2)
    })

    test('returns sunk, which should be false', () => {
        const ship = new Ship(2)
        expect(ship.sunk).toBe(false)
    })

    test('returns a ship with hits equal to its length and the isSunk function, which should return true', () =>{
        const ship = new Ship(2)
        ship.hit()
        ship.hit()
        ship.isSunk()
        expect(ship.sunk).toBe(true)
    })

    
})