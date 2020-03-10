var dummyJsonData = {
    'A' : 3,
    'B' : 2
}
document.querySelector(".search").addEventListener('click', function(){
    var inputData =document.forms[0].elements[0].value;
    searchMain('http://localhost:3000/search_result', inputData);
})

function searchMain(url, data){
    var data = {'searchFocus' : data}
    data = JSON.stringify(data);
    var xhr =new  XMLHttpRequest();
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-Type',"application/json");
    xhr.send(data);
    xhr.addEventListener('load', function(){
        
       var result = JSON.parse(xhr.responseText);
       Compare(result);
    })
}

function Compare(value){
    var sw =false;
    var txt ;
    var key = Object.keys(dummyJsonData);
    for(var i =0; i< key.length; i++){
        if(key[i] === value.searchFocus){
            sw = true;
            break;
        }
    }
    if(sw === true){
        txt= `${value.searchFocus}에 대한 검색 결과가 존재합니다.<br> ${dummyJsonData[value.searchFocus]} `
    }else{
        txt= `${value.searchFocus}에 대한 검색 결과가 존재하지않습니다. `
    }

    document.querySelector(".result").innerHTML = `${value.searchFocus} 검색 결과<br> ${txt}`; 
}
