const array = [ 3 , 5 , 13 ,14 ,35 ,90]

const insertionsort = array =>{

    const len = array.length


for (let i = 1 ; i < len ; i++){
    let current = array[i]
    let previous = i - 1
    while(previous >= 0 && array[previous] > current){
        array[previous + 1] = array[previous]
        previous -- 
    }
    array [previous + 1] = current
}
return array
}


console.log(insertionsort(array))