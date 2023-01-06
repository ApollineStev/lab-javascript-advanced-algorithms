class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush(MAX_SIZE, stackControl) {
    if (MAX_SIZE = 10){
      return false
    } else if (stackControl === 0){
      return true
    }
     
    // ... your code goes here
  }

  isEmpty(stackControl) {
    if (stackControl.length == -1) return true
    // ... your code goes here
  }

  push(item) {
    // ... your code goes here
  }

  pop() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
