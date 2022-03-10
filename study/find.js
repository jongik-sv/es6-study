let heroes = [ 
    { name: 'superman', age: 35 }, 
    { name: '돈부man', age: 40 }, 
    { name: '전부man', age: 15 }, 
    { name: '삽질man', age: 30 },    
]


// age가 30 초과하는 hero 한명 추출
let filteredHeroes3 = heroes.find(({age: age}) => age > 19)
console.log(filteredHeroes3)

let isEveryAdult = heroes.every(({age}) => age > 19)
console.log('모두 어른이다 : ' + isEveryAdult)

let isSomeAdult = heroes.some((hero) => hero.age > 19)
console.log('어른이 있다 : ' + isSomeAdult)