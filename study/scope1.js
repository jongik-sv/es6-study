// var의 변수 스코프
var varMessage = "hi";
{
    var varMessage = "bye";
}
console.log("var의 변수 스코프 : " + varMessage);


// var의 변수 스코프(function)
var varFunctionMessage = "hi";
function greet() {
    var varFunctionMessage = "bye";
}
console.log("varFunction의 변수 스코프 : " + varFunctionMessage);

// let의 변수의 스코프
let letMessage  = "hi";
{
    let letMessage = "bye";
}
console.log("let의 변수의 스코프 : " + letMessage);

// const의 변수 스코프
const constMessage  = "hi";
{
    const constMessage = "bye";
}
// constMessage = "hello"; // TypeError: Assignment to constant variable.
console.log("const의 변수 스코프 : " + constMessage);