function fun(n){
    if(n<=2){
    return n
    }
    return fun(n-1)+fun(n-2)
}
let n=5
console.log(fun(n))