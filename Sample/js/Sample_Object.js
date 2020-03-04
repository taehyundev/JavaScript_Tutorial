var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

/*
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
동일
파이썬의 딕셔너리 형태랑 많음
*/

var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

alert(grades['egoing']); // or grades.egoing  객체 참조

var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) { // grades 안에 원소를 각각 key에 한 쌍씩 넣는다.
    document.write("key : "+key+" value : "+grades[key]+"<br />");
}

var grades = {
    'list': {
        'egoing': 10, 
        'k8805': 6, 
        'sorialgi': 80
    },
    'show' : 
    function(){
        // list안에 있는 key 요소를 name에 넣음
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
// key : values 인데 key: 함수로 할 수도 있다.
//show를 불러오면 거기에 맞는 함수가 호출된다.

grades.show()//grades['show']();