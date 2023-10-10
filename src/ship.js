class Ship {
    hits = 0
    sunk = false
    coords = []

    constructor(length, name) {
        this.length = length
        this.name = name
    }

    hit() {
        this.hits = this.hits + 1
    }

    isSunk(){
        if (this.hits === this.length){
            this.sunk = true
        }
    }

    setCords(xCord, yCord){
        let arr = [yCord, xCord]
        this.coords.push(arr)
    }


}

export default Ship