console.log([1, 2, 3, 4, 5, 6]);
console.log([1, 2, 3, 4, 5, 6].slice(2, 4)); // [ 3, 4 ] --> 2번째 인덱스 부터 4번째 전(3번째 인덱스) 까지의 인덱스 (4번째 인덱스를 포함 안함)
console.log([1, 2, 3, 4, 5, 6].concat([7, 8, 9])); // ...concat(7, 8, 9)와 동일
console.log([1, 2, 3, 4, 5, 6].concat(typeof window));
console.log([1, 2, 3, 4, 5, 6].concat({name : '홍길동'}));
console.log([1, 2, 3, 4, 5, 6].map(x => x*2)); // [ 2, 4, 6, 8, 10, 12 ]
console.log([1, 2, 3, 4, 5, 6].filter(x => x%2 === 0)); // [ 2, 4, 6 ]
console.log([1, 2, 3, 4, 5, 6].filter(() => true)); // [ 1, 2, 3, 4, 5, 6 ]
console.log([1, 2, 3, 4, 5, 6].filter(() => false)); // []
console.log([1, 2, 3, 4, 5, 6].reduce((acc, cur) => acc + cur, 10)); // 10은 초기값, 10 + 1 = 11, 11 + 2 = 13, 13 + 3 = 16, ...
