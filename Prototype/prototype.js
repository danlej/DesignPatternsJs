class ConnectionPrototype {
    constructor(proto) {
        this.proto = proto;
        return this.clone();
    }

    clone() {
        let connection = new Connection();
        connection.driver = this.proto.driver;
        connection.server = this.proto.server;
        connection.database = this.proto.database;
        connection.user = this.proto.user;
        connection.password = this.proto.password;
        return connection;
    }
}

class Connection {
    constructor(driver, server, database, user, password) {
        this.driver = driver;
        this.server = server;
        this.database = database;
        this.user = user;
        this.password = password;

        this.status = 0;
    }

    getConnection() {
        this.status = 1;
        return `${this.driver}://server=${this.server};database=${this.database};user=${this.user};password=${this.password}`;
    }

    close() {
        this.status = 0;
    }
}

let connectionSQLServerPrototype = new Connection("sqlserver", "localhost", "beerdb", "sa", "123456");
let connectionMySQLPrototype = new Connection("mysql", "localhost", "beerdb", "sa", "123456");

let connectionSQLServer = new ConnectionPrototype(connectionSQLServerPrototype);
let connectionMySQL = new ConnectionPrototype(connectionMySQLPrototype);

console.log(connectionSQLServer);
console.log(connectionMySQL);

// Operador Spread - también se utiliza para clonar objetos aunque no tiene en cuenta ciertos atributos 
// que van a tener una vida útil posterior a la creación. Si llamo a getConnection()  el atributo this.status = 1
// hace que el clone tenga un status code diferente al status en el clone(), por lo tanto Spread no resuelve Prototype.
console.log(connectionMySQL.getConnection());
let myClone = {...connectionMySQL};
console.log(myClone);
