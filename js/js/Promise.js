function PromiseFunction(value){
    return new Promise((res,rej)=>{
        if(value){
            res("a")
        }else{
            rej("b")
        }
    })
}

PromiseFunction().then(
    success=>{
        console.log(success)
    },
    fail=>{

        console.log(fail)
    }
)