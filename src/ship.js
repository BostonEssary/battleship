class Ship {
    hits = 0
    sunk = false

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


}

export default Ship