const array = [ 3 , 5 , 33 ,14 ,35 ,90]

const insertionsort = array =>{

    const len = array.length


for (let i = 1 ; i < len ; i++){
    let current = array[i]    //current index lets say its 5(based on unsorted array)
    let previous = i - 1       //prevous one willl use to compare its 3 , i - 1 (based on index)
   
    while(previous >= 0 && array[previous] > current){ //while previous is bigger than current 
        array[previous + 1] = array[previous]    //change the current to use the previous one
        previous -- //change the current to use the current one
    }
    
    array [previous + 1] = current
}
return array
}


console.log(insertionsort(array))