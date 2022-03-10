let heroes = [ 
    { name: 'superman', age: 35 }, 
    { name: '돈부man', age: 40 }, 
    { name: '전부man', age: 15 }, 
    { name: '삽질man', age: 30 },    
]


// age가 30 초과하는 hero 추출
let filteredHeroes1 = [];

// Imperative
for(let i = 0; i < heroes.length; i ++) {
    if(heroes[i].age > 30) {
        filteredHeroes1.push(heroes[i])
    }
}
console.log(filteredHeroes1)

// Declarative
let filteredHeroes2 = heroes.filter(({age}) => age > 30)
console.log(filteredHeroes2)
