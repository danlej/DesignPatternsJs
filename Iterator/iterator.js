// var Iterator = function(elements) {
//     this.elements = elements;
//     this.index = 0;
// }

// Iterator.prototype = {
//     hasNext: function() {
//         return this.index < this.elements.length;
//     },
//     next: function() {
//         return this.elements[this.index++];
//     },
//     first: function() {
//         return this.elements[0];
//     },
//     reset: function() {
//         this.index = 0;
//     }
// }

class Iterator {
    constructor(elements) {
        this.elements = elements;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.elements.length;
    }
    next() {
        return this.elements[this.index++];
    }
    first() {
        return this.elements[0];
    }
    reset() {
        this.index = 0;
    }
}

let url = "https://jsonplaceholder.typicode.com/todos";
let elements = [];
for (let id = 1; id < 5; id++) {
    elements.push(async () => {
        let response = await fetch(`${url}/${id}`);
        let data = await response.json();
        return data;
    });
}

let iterator = new Iterator(elements);
while(iterator.hasNext()) {
    let element = iterator.next();

    let data = element().then(result => {
        console.log(result);
    });
}

// class IteratorAsync extends Iterator {
//     async nextAsync() {
//         if(this.hasNext()) {
//             return await this.next();
//         }
//     }
// }

// let iteratorAsync = new IteratorAsync(elements);
// (async () => {
//     while(iteratorAsync.hasNext()) {
//         const result = await iteratorAsync.nextAsync();
//         console.log(result);
//     }
// });