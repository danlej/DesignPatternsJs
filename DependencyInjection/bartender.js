class Drink {
    constructor(type, name, alcohol) {
        this.type = type;
        this.name = name;
        this.alcohol = alcohol;
    }
}

class Beer extends Drink {
    constructor(name, alcohol) {
        super("Beer", name, alcohol);
    }
}

class Whisky extends Drink {
    constructor(name, alcohol) {
        super("Whisky", name, alcohol);
    }
}

class Bartender {
    constructor(name) {
        this.name = name;
    }

    serve(drink) {
        console.log(`El cantinero ${this.name} sirviendo ${drink.type} ${drink.name} al cliente, con ${drink.alcohol} % de alcohol.`)
    }
}

let bartender = new Bartender("Juan");
let beer = new Beer("Quilmes", 6);
let whisky = new Whisky("White Horse", 42);

bartender.serve(beer);
bartender.serve(whisky);
