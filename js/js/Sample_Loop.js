/* 따로 js를 분리 */
/*반복문 */
max = prompt('별찍기 몇개 : ');
for(var i=0; i < max; i++){
    for(var j=i; j<max; j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<br>');
document.write('<br>');

var x = 1;
var sum =0;
while(x<=10){
    sum += x;
    if(x==10){
        document.write(x+'=');
    }else{
        document.write(x+'+');
    }
    x++;
}
document.write(sum);