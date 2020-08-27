function add(n=3,m=3){
    return n+m
}

console.log(add())
console.log(add(5))
console.log(add(5,8))
/*
C++ 의 클래스나 함수에서 함수의 중복을 간략화 시킨것처럼
인자값 자체에 디폴트값을 설정할 수 있다.
*/

function errorFunction(){
    return new Error("인수값이 부족합니다.")
}

//n에 값이 없으면 errorFunction으로 들어가서 오류를 return 시킴
function a(n= errorFunction()){
    return n;
}
console.log(a(12))

/*
가변길이 인수의 함수
*/

function sum(...nums){
    var result =0;
    for(var i=0; i< nums.length; i++){
        if(typeof nums[i] !== 'number'){
            throw new Error("숫자가 아닙니다.")
        }
        result += nums[i]
    }
    return result
}
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3))
//console.log(sum(1,2,3,"ㅁㄴ"))

/*
Callback function
*/
function arrayWalk(data,f){
    for(var key in data){
        f(data[key], key)
    }
}

var result =0;
function sumElement(value,key){
    result += value;
}

var ary = [1,2,4,8,16]
arrayWalk(ary,sumElement)
console.log(result)