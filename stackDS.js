class Stack {
    constructor() {
      this.items = [] // we keep all our values in this array
    }
  
    // Add (push) a value to the top
    push(value) {
      this.items.push(value)
      console.log(value + " added to stack")
    }
  
    // Remove (pop) the value from the top
    pop() {
      if (this.items.length === 0) {
        console.log("Stack is empty")
        return null
      }
      let removed = this.items.pop()
      console.log(removed + " removed from stack")
      return removed
    }
  
    // Show the current top value 
    currenttop() {
      if (this.items.length === 0) {
        console.log("Stack is empty")
        return null
      }
      return this.items[this.items.length - 1]
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
  
  console.log("Top is:", stack.currenttop()) 
  
  stack.pop()           
  stack.size()
  stack.print()         


  