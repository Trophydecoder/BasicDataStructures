//give a number 'n' find the elements of the fibonacci sequence//

function fibonacci(n) {
    let fib =[0 , 1]  //the first numbers for a fibonacci sequence is 0 and 1//
    for (let i = 2 ; i <= n ; i++){ //we loop from 2 to n because 1 already exists//
    fib[i] = fib[i -1 ] + fib[i -2 ] //We use fib[i] to store each new Fibonacci number//
}
return fib
}
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(10))

