function balancedParens(string) {
    // [].reduce
    // (method) Array<undefined>.reduce(callbackfn: (previousValue: undefined, currentValue: undefined, currentIndex: number, array: undefined[]) => undefined): undefined (+2 overloads)
    return !string.split("").reduce(function(acc, char) {
        if(char === "(") { return ++ acc}
        if(char === ")") { return -- acc}
        return acc;
        
    }, 0)
}

console.log(balancedParens("()))")) // false
console.log(balancedParens("((ddafd(dddd)44ddfgas))")) // true

const numbers = [1, 1, 1, 2, 3, 4, 5, 12, 3 ,3 , 3, 4, 5, 2]
let mapReduce = numbers.reduce((map, number) => {
   if(map[number] === undefined) map[number] = 0
   map[number] ++
   return map
}, {})

console.log(mapReduce)