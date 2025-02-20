//give an integer'n' find the factorial of that integer//

function factorial(n){
    let result = 1 //it starts with a 1 as starting value because multiplication needs an identity value using 0 will affect it //
    for(let i = 2 ; i <= n ; i++){ // we loop it from 2 to n coz 1 already exists//
        result = result * i //we store the value from 1 multiply the numbers that come from the loop , we store in result//
    }
    return result
}
console.log(factorial(5))
console.log(factorial(10))