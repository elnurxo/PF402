//IIFE -> Immediatily Invoked Function Expression

const res = (function (fName) {
  console.log(`name is: ${fName}`);
  console.log("IIFE executed!");

  return 5;
})("John");

// console.log("result: ", res);

const Counter = (function() {
    let count = 0;

    return {
        increment: function(incrementor) {
            count+=incrementor;
            console.log(`Count: ${count}`);
        },
        reset: function() {
            count = 0;
            console.log("Count reset.");
        }
    };
})();

Counter.increment(5); // Output: Count: 1
Counter.increment(3); // Output: Count: 2
Counter.reset();      // Output: Count reset.
