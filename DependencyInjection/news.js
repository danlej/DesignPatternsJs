class News {
    constructor(url) {
        this.url = url;
    }

    async get() {
        let posts = await fetch(this.url)
        .then(response => response.json())
        .then(json => json);

        return posts;
    }
}

class Writer {
    // Este contructor recibe la dependencia de la clase News, lo cual es incorrecto.
    // constructor(url) {
    //     this.news = new News(url);
    // }

    constructor(news) {
        this.news = news;
    }

    async show() {
        this.posts = await this.news.get();
        this.posts.forEach(element => {
            console.log(element.title);
        });
    }
}

let news = new News("https://jsonplaceholder.typicode.com/todos");
let writer = new Writer(news);
writer.show();