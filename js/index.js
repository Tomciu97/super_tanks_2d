class Tank {
    constructor (nameOfTank) {
        this.tank = document.querySelector(nameOfTank)
        this.position = this.tank.getBoundingClientRect();
    }
    moveRight() {
        console.log(this.position)
        this.tank.style.left = "30px"
    }
}

tank = new Tank('#tank')
tank.moveRight();
