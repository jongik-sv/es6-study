let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '74px' },
]

// images에서 height만 뽑아서 새로운 배열을 만들어라.
let heights
heights = images.map(({height: height}) => height)
console.log(heights)
// 
let trips = [
    { distance: 34, time: 10},
    { distance: 90, time: 50},
    { distance: 59, time: 25},
]

// trips의 데이터로 distance/time로 계산해서 새로운 배열을 만들어라.
let speeds
speeds = trips.map(({distance, time}) => distance/time)
console.log(speeds)