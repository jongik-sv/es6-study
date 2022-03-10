// 상수에 문자 대입
const constValue = '상수대입';
console.log(constValue)

// 상수에 function 대입
const constFunction = function(message, handler) {
    handler(message);
}
constFunction('함수 대입', console.log);


// Object 대입
const constObject = {
    /*  주석 스위치 앞에 //로 주석 처리 하면 스위칭 됨
    /*/
    handleMessage: function(message, handler) {
        handler(message);
    },
    /*/
   handleMessage: (message, handler) => handler(message),
   /*/
    recive: function(reciveMessageString) {
        this.handleMessage(reciveMessageString, (message) => {
            console.log(message);
        });
    }
    /*/
   recive: function(reciveMessageString){
       this.handleMessage(reciveMessageString, (message) => console.log(message))
   }
   //*/
}
constObject.recive("object 대입");