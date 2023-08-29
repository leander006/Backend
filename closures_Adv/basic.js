function process() {
  let x = 0;
  function innerProcess() {
    x += 1;
    return x;
  }
  return innerProcess;
}

let x = process();
let obj = { func: res };
console.log("first time ", x());
console.log("second time ", x());
console.log("third time ", x());
