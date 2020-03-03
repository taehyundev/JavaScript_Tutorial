/*Array*/
var member = ['abc','12344','taehyundev'];
document.write(member[0]+"<br>"+member[1]+"<br>"+member[2]+"<br><br>");

var arr = [1,2,3,4];
document.write("array Length : "+arr.length+"<br><br>");

for(var i=0; i <arr.length; i++){
    document.write("array ["+ i+"] index element : "+arr[i]+"<br>");
}

/*최대값/최소값 구하기 */
max = arr[0];
min = arr[0];
for(var i=1; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
    if(min > arr[i]){
        min = arr[i];
    }
}

document.write("Max : "+ max +"<br> Min : " + min);

/*
변수.push(value);
라고하면 배열에 원소 추가됨.

변수.pop()
뒤에 원소 제거

변수.shift()
앞에 원소 제거

변수.sort()
정렬

변수.reverse();
반대로

*/
a = [3,4,2,3,5,6,7,8];
document.write("<br><br>"+a.sort());
document.write("<br><br>"+a.reverse());