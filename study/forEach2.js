let images = [
    {height: 10, width: 100},
    {height: 100, width: 60},
    {height: 30, width: 1000},
]

// 면적 = 높이 * 폭
let areas1 = [];
let areas2 = [];
let areas3 = [];
let areas4 = [];

// impelative
console.log
for(let i = 0;i < images.length; i++) {
    areas1.push(images[i]['height'] * images[i]['width'])
}
console.log(areas1);
//declarative 1
images.forEach(function(image) { 
    areas2.push(image.height * image.width)
})
console.log(areas2);

//declarative 2
images.forEach(function(height, width) {  // (height, width) === ({height, width})
    areas3.push(height * width)
})
console.log(areas2);

//declarative 3
images.forEach(({height, width}) => areas4.push(height * width))  // ({height, width}) !== (height, width)
console.log(areas4);
