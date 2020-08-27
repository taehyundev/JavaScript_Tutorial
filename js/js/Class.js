/*
ES2015이전의 버전에서의 js에서는 class가 없었다.
프로토타입 기반의 객체 지향이다.
*/

//ES2015 이전
function Member(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function(){
        return this.lastName + ' ' + this.firstName
    }
}

var mem = new Member("태현","강")
console.log(mem.getName())


//이후
class Member2{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getName(){
        return this.lastName + ' ' + this.firstName
    }
}
var m = new Member2("태현", "강")
console.log(m.getName())