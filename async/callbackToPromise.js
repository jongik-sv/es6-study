'use strict'

// console.log('1')
// setTimeout(() => console.log('2'), 3000)
// console.log('3')

// // Synchronous callback
// function printImmediately(print) {
//     print()
// }
// printImmediately(() => console.log('hello'))

// // Asynchronous callback
// function printWithDelay(print, timeout) {
//     setTimeout(print, timeout)
// }
// printWithDelay(() => console.log('hello2'), 2000)


// callback 지옥
class UserStorage {
    loginUser(id, password) { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(id === 't0132' && password === 'pass') {
                    resolve(id);
                } else {
                    reject(new Error('로그인 실패'));
                }
            }, 500);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 't0132') {
                    resolve({name:'t0132', role: 'admin'})
                } else {
                    reject(new Error('권한검색 실패'))
                }
            }, 500)
        })

    }
}

const userStorage = new UserStorage();
const id = 't0132'; // 
const password = 'pass'; // prompt('enter your password')
userStorage.loginUser(id, password)
    .then(userStorage.getRoles) //.then(user => userStorage.getRoles(user))
    .then(console.log) // then(user => console.log(user))
    .catch(console.log); // .catch(error => console.log(error));