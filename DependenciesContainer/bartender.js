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

class Container {
    constructor() {
        this.services = new Map();
        this.#dependenciesInitializer(); // Inicializa las dependencias al instanciar el contenedor
    }

    // Registra una dependencia de forma explícita
    #register(name, instance) {
        this.services.set(name, instance);
    }

    addDependency(name, instance) {
        console.log(`Se agrega la dependencia ${name}.`)
        this.#register(name, instance);
    }

    // Resuelve una dependencia
    resolve(name) {
        if(!this.services.has(name)) {
            throw new Error(`La dependencia ${name} no está registrada en el contenedor.`);
        }

        return this.services.get(name);
    }

    // Método privado para inicializar dependencias base
    #dependenciesInitializer() {
        this.#register("bartender", new Bartender("Juan"));
        this.#register("beer", new Beer("Quilmes", 6));
        this.#register("whisky", new Whisky("White Horse", 42));
    }
}

// Uso del contenedor
const container = new Container();
const bartender = container.resolve("bartender");
const beer = container.resolve("beer");
const whisky = container.resolve("whisky");

bartender.serve(beer);
bartender.serve(whisky);

// Registro adicional de una dependencia
container.addDependency("wine", new Drink("Wine", "Merlot", 13));
const wine = container.resolve("wine");
bartender.serve(wine);

// Intentar sobrescribir una dependencia
// container.register("beer", new Beer("Otra Cerveza", 5)); // Esto lanzará un error

// Intenta servir una bebida no registrada
// const conac = container.resolve("conac");
