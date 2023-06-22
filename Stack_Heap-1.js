// Stack Example:-

function greet() {
    const message = 'Hello, world!';
    console.log(message);
  }
  
  function main() {
    const name = 'John';
    greet();
    console.log(`Welcome, ${name}!`);
  }
  
  main();
  
  /*
  In this example, the main() function is called first, which then calls the greet() function. Each function call creates a stack frame that contains the local variables and function context. The stack frames are stacked on top of each other. When the greet() function finishes execution, its stack frame is popped off, and the program returns to the main() function to continue execution.
  */

// Heap Example:-

function createPerson(name, age) {
    return { name, age };
  }
  
  const person = createPerson('John', 25);
  console.log(person);

  /*
  In this example, the createPerson() function dynamically creates an object on the heap by using object literal syntax. The function returns the created object, which is assigned to the person variable. The object is stored in the heap, and the person variable holds a reference to it.
  JavaScript takes care of memory management for the object, and it will be automatically cleaned up by the garbage collector when it is no longer referenced.
  */
  