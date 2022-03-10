let heroes = [ 
    { name: 'superman', age: 35 }, 
    { name: '돈부man', age: 40 }, 
    { name: '전부man', age: 15 }, 
]

function pluck (array, property) {
    return array.map((hero) => hero[property])
}

let names = pluck(heroes, 'name'); // returns ['superman', '돈부man', '전부man']
let ages = pluck(heroes, 'age'); // returns ['superman', '돈부man', '전부man']
console.log(names)
console.log(ages)