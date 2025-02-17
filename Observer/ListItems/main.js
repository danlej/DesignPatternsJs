class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(obj) {
        this.observers.forEach(observer => {
            observer.notify(obj)
        });
    }
}

class ItemSubject extends Subject {
    constructor() {
        super();
        this.items = []
    }

    notify(item) {
        this.items.push(item);
        super.notify(this);
    }
}

class ListObserver {

    constructor(tag) {
        this.tag = tag;
    }

    notify(subject) {
        this.tag.innerHTML = "";

        subject.items.forEach(e => {
            let div = document.createElement("div");
            div.innerHTML = `<p>${e.description} <b>${e.amount}</b></p>`;
            div.style = "padding: 5px 5px 5px 10px";
            this.tag.appendChild(div);
        });
    }
}

class TotalObserver {

    constructor(tag) {
        this.tag = tag;
    }

    notify(subject) {
        let total = subject.items.reduce(
            (ac, current) => ac + parseFloat(current.amount), 0
        );

        this.tag.innerHTML = total;
    }
}

class DynamicObserver {
    constructor(tag, fn) {
        this.tag = tag;
        this.fn = fn;
    }

    notify(subject) {
        this.fn(subject, this.tag);
    }
}

