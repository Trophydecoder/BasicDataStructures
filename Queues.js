//QUEUES ARE A DATA STRUCTURE WHERE YOU ADD OR REMOVE ITEMS FOLLOWING THE
//FIFO (First in first out)
//element that is first in an array Is the first element that will be out 
//when we remove 
//its also the first elemet whebn we push multiple elements

class Stack {
    constructor() {
      this.items = [] // we keep all our values in this array
    }
  
    // psuh the values in the array
    push(value) {
      this.items.push(value)
      console.log(value + " added to stack")
    }
  
    // Remove shfit the value from the first element in the array
   shift() {
      if (this.items.length === 0) {
        console.log("Stack is empty")
        return null
      }
      let removed = this.items.shift()
      console.log(removed + " removed from stack")
      return removed
    }
  
    // Show the current first value 
    currentfirst() {
      if (this.items.length === 0) {
        console.log("Stack is empty")
        return null
      }
      return this.items[this.items.length - 2]
    }
  
    // Show how many items are in the stack
    size() {
      console.log(this.items.length)
    }
  
    // Show the whole stack
    print() {
      console.log(this.items)
    }
  };
  

//was confused by the stack class on top where i create methods
//so we can call them here on a new one 
  const stack = new Stack()
  
  stack.push("apple")   
  stack.push("banana")  
  stack.push("cherry")  
  
  stack.print()        
  
 
  
  stack.shift()   
  console.log("currentfirst is:", stack.currentfirst())         
  stack.size()
  stack.print()         


  

  