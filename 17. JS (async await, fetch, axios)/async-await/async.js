// const x = new Promise((resolve, reject) => {
//   const val = 25;
//   if (val > 0) {
//     resolve(val);
//   } else {
//     reject('status error');
//   }
// });

// //promise status - rejected, result - -25
// x.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('promise done!');
// })

// // Synchronous Function
// function syncFunction() {
//   console.log("Sync Function: Start");
//   console.log("Sync Function: End");
// }
// syncFunction();

// // Asynchronous Function - returns Promise
// async function asyncFunction() {
//   console.log("Async Function: Start");
//   const x = await new Promise((resolve) => resolve(5)); // Simulates async behavior ? - 5
//   console.log(x); //Promise - status - fulfilled, result - 5
//   console.log("Async Function: End");
//   return x; //5
// }
// const result = asyncFunction();
// console.log('label: ',result);

function performTask(taskSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskSuccess) {
        resolve("Task completed successfully!");
      } else {
        reject("Task failed!");
      }
    }, 1000);
  });
}

// Chaining Promises
performTask(true)
  .then((result) => {
    console.log("Success:", result);
    return "Next Task";
  })
  .then((next) => console.log("Next:", next))
  .catch((error) => console.error("Error:", error));

// Handling rejection
performTask(false).catch((error) => console.error("Caught Error:", error));
