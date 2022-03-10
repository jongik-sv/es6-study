let numbers = [1, 2, 3, 4, 5];
let doubledNumbers1 = []; 
let doubledNumbers2 = []; 

// impelative = mutable(변할수 있다.)
for(let i =0; i < numbers.length; i++) {
    doubledNumbers1.push( numbers[i] * 2 );
}
console.log(doubledNumbers1);


// declarative = immutable(기존 값을 변화 되지 않는다.)
// state is a value of a variable at a moment.
numbers.forEach(number => doubledNumbers2.push(number * 2) )
console.log(doubledNumbers2);

// declarative(map 1)
let doubledNumbersMap1 = numbers.map(function(number) {
    return number * 2;
})
console.log(doubledNumbersMap1);

// declarative(map 2)
let doubledNumbersMap2 = numbers.map(number => number * 2)
console.log(doubledNumbersMap2);