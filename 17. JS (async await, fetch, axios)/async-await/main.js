//sync code
// for (let i = 0; i < 1_000_000; i++) {
//     console.log('loop');
// }
// console.log("İkinci");
// console.log("Üçüncü");

//async code
// console.log("x");

// setTimeout(() => {
//   console.log("y");
// }, 0);

// console.log("z");

// //1 - ? (x)
// //2 - ? (z)
// //3 - ? (y)

//sync
// function getData() {
//   return [1, 2, 3, 4, 5];
// }

// //all async functions return 'Promise'
// async function asyncGetData() {
//   //   throw new Error("hey");
//   //resolve
//   return "hey there!";
// }

// const result = getData();
// const asyncResult = asyncGetData();

// console.log(result);
// console.log(asyncResult); //promise (state: fulfilled, result)

// const x = await asyncResult;
// console.log(x);

// asyncResult.then((res) => {
//   console.log("result: ", res);
//   return res;
// }).then((x)=>{
//     console.log(x);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('promise done!')
// });

//Promise chaining
// asyncResult
//   .then((data) => data)
//   .then((x) => {
//     console.log("x: ", x); //x: hey there!
//   })
//   .then((y) => {
//     console.log("y: ", y); //y: hey there!
//   })
//   .catch((err) => {
//     console.log(err);
//   }).finally(()=>{
//     console.log('finally!');
//   });
