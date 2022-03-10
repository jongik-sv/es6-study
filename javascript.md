# [호이스팅(나무위키 참조)](https://namu.wiki/w/%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)
## 정의 `변수의 선언과 초기화를 분리`
 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되어 변수의 선언을 항상 컨텍스트 내의 최상위로 끌어올리는 것을 의미한다. 이는 오로지 변수에만 해당되는 것은 아니고 함수도 가능하며, 자바스크립트에서 함수의 호출을 첫 줄에서 하고 마지막 줄에 함수를 정의해도 문제없이 작동되도록 하는 유용한 특성이다.
 아래와 같은 코드가 있을 경우 
```js
function sum (a, b) {
  var x = add(a,b);
  return x;

  function add (c, d) {
    var result = c+d;
    return result;
  }
}
```
자바스크립트는 아래와 같이 해석한다.

```js
function sum (a, b) {
  // 선언 부분을 위로 끌어 올린다.
  var x = undefined;
  function add (c, d) {
    var result = c+d;
    return result;
  }

  // 정의 부분을 실행한다.
  x = add(a,b);
  return x;
}
```
## `var` vs `let`

아래 코드를 실행 시켜보자
```js
console.log(name1)
var name1 = 'DK'
```
호이스팅으로 인해 에러 없이 실행되지만 `undefined`로 나오는 정상적인 코드는 아니다.
아래의 코드를 실행해보자
```js
console.log(name2)
let name2 = 'DK'
```
```
Uncaught ReferenceError: Cannot access 'name2' before initialization
```
이와 같이 에러 메시지가 출력된다. 

`var`와 `let`의 차이는 호이스팅 방법에 있다. 두 방법 모두 스코프 내부 어디에서든 변수 선언이 최상위에 선언된 것처럼 행동한다. 그러나 `var` 는 `undefined`로 초기화가 되어서 에러가 나지 않는 것이고 `let` 은 아무런 값도 할당하지 않고, 할당 후 사용할 수 있다. 값을 할당 하기 전에 사용하면 에러메시지가 출력된다.
> 선언부터 할당하기 전까지를 변수 사용을 못하는 구간을 TDZ(Temporal Dead Zone)라고 한다.


```js
var number = 7

function showNumber() {
    console.log(number)
    var number = 14
    console.log(number)
}

showNumber()
```


```js
let number = 7

function showNumber() {
    console.log(number)
    let number = 14
    console.log(number)
}
showNumber()
```
위 두개의 실행결과는 어떻게 나올까??

.
.
.
.
.
.
.
.
.
.
```
undefined
14
```
```
Uncaught ReferenceError: Cannot access 'number' before initialization
```
`var`를 사용한 코드는 인터프리터에서 실제로는 아래처럼 실행된다.

```js
var number = 7

function showNumber() {
    var number = undefined // 블럭안에서 호이스팅이 일어나서 선언부분이 위로 올라온다.
    console.log(number)
    number = 14            // 정의부분만 남는다. (원래 var number = 14였던 코드)
    console.log(number)
}
showNumber()
```

이런 호이스팅의 부작용으로 ES6 이후 var를 대체하여 let을 사용하고 있다.(우리만 빼고)

## const

```js
let name // 문제 없음
name = "Hello"

var name1 // 문제 없음
name1 = "Hello"

const name2 // Uncaught SyntaxError: Missing initializer in const declaration
name2 = "hello"
```
`const`는 `선언 + 초기화 + 할당`이 한 번에 일어나야 된다.

## 스코프
- var : 함수 스코프, 함수 내 어디서든 사용가능하다.
```js
for(var i = 0; i < 10; i ++) {}
console.log(i)

if(true){
    var name = 'hello'
}
console.log(name)

```
- let, const : 블록 스코프, 블록을 벗어나면 사용 불가능하다.
```js
for(let i = 0; i < 10; i ++) {}
console.log(i)

if(true){
    let name = 'hello'
}
console.log(name)
``` 

## 정리
버그와 부작용을 줄이기 위해 `var` 보다는 `let`과 `const`를 사용하자.

# 객체 리터럴

## 기본사용
```js
let user = {
  name : 'hi',
  age : 20
}
```

## 생성자 함수
### 기본사용
```js
function User(name, age) {
  this.name = name
  this.age = age
}

let user1 = new User('Hi', 30)
let user2 = new User('안녕', 30)
let user3 = new User('방가', 30)
```

### 맴버 추가
```js
function User(name, age) {
  this.name = name
  this.age = age
  this.sayName = function() {
    console.log(this.name)
  }
}
let user1 = new User('Hi', 30)
user1.sayName()

```