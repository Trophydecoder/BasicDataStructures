const  array = [13 , 7 , 23 ,54 , 90 , 1]

//selection sort -> take the first index in the array(the sorted side) and search 
//through the unsorted for the smallest/biggest to compare and swap 

const selectionsort = array => {
const len = array.length;

for (let i = 0 ; i < len ; i++){
  minivalue = i;  //on the array we assume i is the smallest value
  for (let j = i + 1 ; j < len ; j++){
    if(array[j] < array[minivalue]){
      minivalue = j
    }

    if (minivalue !== i){  //if minivalue is not the same as the one we decalred first , swap
      //swap
      const temp = array[i] ;
      array[i] = array[minivalue]
      array[minivalue] = temp
      
    }
  }
 
}


return array

}
console.log(selectionsort(array))