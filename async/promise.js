'use strict'

// // state : pending -. fulfilled or rejected
// // producer vs consumer

// // 1. producer
// const promise = new Promise((resolve, reject) => {
//     console.log('Promise를 생성하면 바로 실행 되는 코드, 2초후 resolve/reject 발생');
//     setTimeout(() => {
//         resolve('resolve를 실행 시켜 보았다.')
//         // reject(new Error('reject를 발생 시켜 보았다.'))
//     }, 2000);
// });

// // 2. consumer
// promise //
//     .then(value => console.log(value))
//     .catch(error => console.log(error))
//     .finally(()=> console.log('finally : resolve/reject 관계없이 마지막에 수행 된다.'))


// // 3. promise chaining
// const fetchNumber = new Promise((resolve, reject) => {
//     console.log('Promise를 생성하면 바로 실행 되는 코드, 1초후 resolve(1)');
//     setTimeout(() => {
//         console.log('서버에 갔다 왔다')
//         resolve(1)
    
//     }, 1000);
// });

// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => {
//     // then에서는 값을 리턴해도 되고 다른 promise를 생성해서 리턴해도 된다.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num - 1), 1000)
//     });
// })
// .then(num => console.log(num));

// //4. Error Handling
// const getHen = () => new Promise((resolve, reject) => {
//     setTimeout(() => resolve('닭', 1000));
// });

// const getEgg = (hen) => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} -> 계란`, 1000));
// });

// const cook = (egg) => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} -> 계란프라이`, 1000));
// });


// // getHen()
// // .then(hen => getEgg(hen))
// // .then(egg => cook(egg))
// // .then(meal => console.log(meal));

// getHen()// 위와 동일 
//     .then(getEgg)
//     .then(cook)
//     .then(console.log)


//4-2. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭', 1000));
});


const getEgg = (hen) => new Promise((resolve, reject) => {
    // 만약 계란 받는데 실패하면 error 처리
    // setTimeout(() => resolve(`${hen} -> 계란`, 500));
    setTimeout(() => reject(new Error(`erorr! ${hen} => 계란`)), 1000);
});

const cook = (egg) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} -> 요리`, 1000));
});

getHen()// 위와 동일 
    .then(getEgg)
    //    .catch(error => '빵')
    .then(cook)
    .catch(error => new Error('에이 안먹어'))
    .then(console.log)
    .catch(console.log)
    //.finally(console.log(`음식 잘 먹었다. 근데 이게 먼저 수행이 되네`))