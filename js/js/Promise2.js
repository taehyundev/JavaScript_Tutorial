function PromiseFunction(value){
    return new Promise((res,rej)=>{
        if(value){
            res(`input : ${value}`)
        }else{
            rej("b")
        }
    })
}

PromiseFunction("b")
.then(
    success=>{
        console.log(success)
        return PromiseFunction("a")
    }
)
.then(
    success=>{
        console.log(success)
    },
    fail=>{
        console.log(fail)
    }
)
Promise.all([
    PromiseFunction("cccc"),
    PromiseFunction("ddd"),
    PromiseFunction("ddee")
]).then(
    success=>{
        console.log(success)
    },
    fail=>{
        console.log(fail)
    }
)