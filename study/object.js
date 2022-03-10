let name = "yesman"
let age = 30

let obj = {
    "name": name,
    age, // age: age에서 생략함
    "yesman":"yes",
    answer: function() {
        console.log('yes!!');
    },
    doSomething() {
        console.log('oh~ yes!! ')
    },
    "isOk": ()=>console.log('yeah~~s!! '),

}
console.log('name : ', obj.name)
console.log('obj[name] : ', obj[name]) // let name = "yesman" 참조
console.log('age :' + obj[age])
obj.answer()
obj["answer"]()
// obj[answer]() // 오류 발생


