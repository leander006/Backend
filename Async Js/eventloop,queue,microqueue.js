// console.log("Start of the file");

// setTimeout(() => {
//   console.log("Timer 1");
// }, 0);

// for (let x = 0; x < 10000000; x++) {
//   // Something going
// }

// let x = Promise.resolve("Leander's promise");

// x.then(function processPromise(value) {
//   console.log("Whose promise", value);
// });

// setTimeout(() => {
//   console.log("Timer 2");
// }, 0);

// console.log("End of file");

function dummyProcess(params) {
  return new Promise(function process(resolve, reject) {
    setTimeout(() => {
      resolve("Timer's promise");
    }, 0);
  });
}

console.log("Start file");
setTimeout(() => {
  console.log("Timer 1 done");
  let y = dummyProcess();
  y.then(function process(value) {
    console.log("Whose promise ", value);
  });
}, 0);

let x = Promise.resolve("Leander Promise");

x.then(function processPromise(value) {
  console.log("Whose promise", value);
});

setTimeout(() => {
  console.log("Timer 2 done");
}, 0);

console.log("End of file");
