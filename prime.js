function findprime(n){
    let prime = 1 
    for(let i = 2 ; i <= n ; i++){
        prime = prime / i
    }
    return prime
}
console.log(findprime(3))