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
생성자 함수는 `new` 키워드로 생성한다.
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
    console.log(`저의 이름은 ${this.name} 입니다.`)
  }
}
let user1 = new User('Hi', 30)
user1.sayName()

```

# Object

## Computed property

```js
let a = 'a'

const user = {
  name : 'Hi',
  [a + 'ge'] : 30, // computed property [ ] 기호 안에 연산할 내용을 적는다.
  [1 + 2 ] : 3
}
```
## Object 객체
### 키/값 <--> 배열 변환
```js
let a = 'a'
let nameString = 'name'

const user = {
  [nameString] : 'Hi', // computed property
  [a + 'ge'] : 30,  
  [1 + 2 ] : 3
}
// Key/Value를 Array로 변환
userArr = Object.entries(user)
console.log(userArr)

// Array를 Key/Value로 변환
userKeyValue = Object.fromEntries(userArr)
console.log(userKeyValue)

```

```
▼(3) [Array(2), Array(2), Array(2)]
 ▶0: (2) ['3', 3]
 ▶1: (2) ['name', 'Hi']
 ▶2: (2) ['age', 30]
   length: 3
 ▶[[Prototype]]: Array(0)

▼{3: 3, name: 'Hi', age: 30}
   3: 3
   age: 30
   name: "Hi"
 ▶[[Prototype]]: Object
```
### Object.assign() 복사

```js
const user = {
  name: "hi",
  age : 20
}

const copyUser = Object.assign({}, user)
copyUser.name = "bye"
console.log(user)
console.log(copyUser)
```

```
{name: 'hi', age: 20}
{name: 'bye', age: 20}
```

### Object.keys() 키 추출, Object.values() 값 추출

```js
const user = {
  name: "hi",
  age : 20
}

const keys = Object.keys(user)
const values = Object.values(user)
console.log(keys)
console.log(values)
```

```
['name', 'age']
['hi', 20]
```

# Array
## 기초
- push()
- pop()
- unshift() 앞에 삽입
- shift()  뒤에 삭제
## 심화구문
### Array.splice()
지정된 요소를 지우고, 필요에 따라 요소를 추가 한다. 지워진 요소는 리턴값으로 반환한다.
- arr.splice(시작, 개수) : 특정요소 지움
- arr.splice(시작, 개수, `추가요소`) : 지우고 `추가요소` 추가



```js
let arr = [1, 2, 3, 4, 5]
let result = arr.splice(1, 2) // [2, 3] 지움
console.log(arr) // [1, 4, 5]
console.log(result) // [2, 3]
```
```js
let arr = [1, 2, 3, 4, 5]
let result = arr.splice(1, 3, 100, 200) // [2, 3, 4] 지움, [100, 200] 추가
console.log(arr) // [1, 100, 200, 5]
console.log(result) // [2, 3, 4]
```
```js
let arr = [1, 2, 3, 4, 5]
let result = arr.splice(1, 0, 100, 200) // 지울게 없네, [100, 200] 추가
console.log(arr) // [1, 100, 200, 2, 3, 4, 5]
console.log(result) // [2, 3, 4]
```
### Array.slice()
- arr.slice(n, m) : n번째 부터 m번째 까지 반환 (m을 안쓰면 마지막까지, 전부 안쓰면 전체 복사)

```js
let arr = [1, 2, 3, 4, 5]
console.log(arr.slice()) // [1, 2, 3, 4, 5]
console.log(arr.slice(1)) // [2, 3, 4, 5]
console.log(arr.slice(1, 4)) // [2, 3, 4]
```
### Array.concat()
- arr1.concat(arr2, arr3, ...) : 배열들을 합쳐서 하나의 새 배열로 생성

```js
let arr1 = [1, 2]
let arr2 = [3, 4]
const newArray = arr1.concat(arr2, [5, 6], 7, 8)
console.log(newArray) // [1, 2, 3, 4, 5, 6, 7, 8]
```

### Array.forEach(fn) : 배열 반복

```js
let array = "my name is hi".split(" ")

array.forEach((item, index, arr) => {
  // arr은 해당 배열 자체이고 보통 생략한다.
  console.log(`${index} : ${item}`)
})
```

### Array.indexOf() / Array.lastindexOf()

```js
let arr = [1, 2, 3, 4, 5, 1, 2, 3]

arr.indexOf(3) // 2 
arr.indexOf(3, 3) // 7, 인덱스 3 이후의 3을 찾아 인덱스를 알려준다.
arr.lastIndexOf(3) // 7, 뒤에서 3을 찾아서 인덱스를 리턴한다.
```


### Array.includes()  : 포함 확인
배열내 있으면 true 리턴, 없으면 false
```js
let arr = [1, 2, 3]

console.log(arr.includes(2)) // true
console.log(arr.includes(8)) // false
```

### Array.find(fn)/ Array.findIndex(fn) 
첫번째 true 값/인덱스만 반환하고 끝, 찾지 못하면 undefined를 반환, fn은 찾는 함수이다.
배열내 있으면 true 리턴, 없으면 false
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = arr.find((item) => item%2 === 0)
// same
const result1 = arr.find((item) => {return item%2 ===0})
// same
const result2 = arr.find(function(item) {
  return item % 2 === 0
})
console.log(result) // 2
```


### Array.filter(fn)
find()와 기능이 유사하지만 find()는 하나만 찾는데 반해 filter()는 조건을 만족하는 모든 값을 배열로 만들어 리턴한다.
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = arr.filter((item) => item%2 === 0)

console.log(result) // 2
```

### Array.reverse() : 역순으로 정렬 (실제 값의 위치가 바뀐다)

### Array.map(fn)
함수를 받아 특정 기능을 수행 후 새로운 배열을 반환


// https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=5845s