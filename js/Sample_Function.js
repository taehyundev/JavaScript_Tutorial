function plus(n,m){
    return parseInt(n)+parseInt(m);
}
function minus(n,m){
    return parseInt(n)-parseInt(m);
}

n = prompt('n값 : ');
m = prompt('m값 : ');
document.write("더하기 값 : "+plus(n,m)+"<br>");
document.write("빼기 값 : "+minus(n,m));


