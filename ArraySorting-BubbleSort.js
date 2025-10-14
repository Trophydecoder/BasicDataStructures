
const array = [ 6 , 1 , 11 , 19 , 27 , 3]


//first iteration  [1 , 6 , 11 , 19 , 3 ,27]
//second iteration [1 , 6 , 11 , 3 , 19 ,27]
//third  iteration [1 , 6 , 3 , 11 , 19 ,27]
//fourth iteration [1 , 3 , 6 , 11 , 19 ,27]

const bubblesort = array => {
const len = array.length;

for (let i = 0 ; i < len ; i++){
  for(let j = i + 1; j < len; j++){
    if(array[j] < array[i]){
      //swap
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp

    }
   
  }
}
return array

}


console.log(bubblesort(array))