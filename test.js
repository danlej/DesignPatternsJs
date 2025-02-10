const people = [
    { name: "Kyle", age: 28},
    { name: "Sally", age: 45},
    { name: "John", age: 43},
    { name: "Sally", age: 28},
];

// const g = people.reduce((group, person) => {
//     if(group[person.name] == null) {
//         group[person.name] = [];
//     }

//     group[person.name].push(person);
//     return group;
// }, {});

const g = Object.groupBy(people, person => person.name);
// const g = Object.groupBy(people, person => person.name[0]);

console.log(g);