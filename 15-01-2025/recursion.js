function recursion(n){
    if(n<=5){
        console.log(n)
        recursion(n+1)
        console.log(n)
    }else{
        return
    }
}

recursion(1)
