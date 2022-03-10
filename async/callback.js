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
    loginUser(id, password, onSuccess, onError) { // onSuccess, onError는 콜백
        setTimeout(() => {
            if(id === 't0132' && password === 'pass') {
                onSuccess(id)
            } else {
                onError(new Error('not ound'))
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 't0132') {
                onSuccess({name: 't0132', role: 'admin'})
            } else {
                onError(new Error('not ound'))
            }
        }, 2000)
    }
}

const userStorage = new UserStorage();
const id = 't0132'; // 
const password = 'pass'; // prompt('enter your password')
userStorage.loginUser(id, password, (user)=>{
    // 성공했다면 role을 받아 온다.
    userStorage.getRoles(user, (userWithRole) = {

    }, error => {

    });
}, error => {
    // 로그인 실패했다면

});