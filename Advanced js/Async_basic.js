console.log("start");
for (let i = 0; i < 10000000000; i++) {} // Waits for for loop to complete i.e sync nature
console.log("end");

/**
 * setTimeOut is not native js code so it will not be synchronous
 * but for loop is native code so it wait for that much time to complete
 * we have event loop and event queue where all timer related code is been saved
 * and performed accordingly
 */

function process() {
  console.log("start");
  setTimeout(() => {
    console.log("Executed");
  }, 3000);

  for (let i = 0; i < 10000000000; i++) {}
  console.log("end");
}

process();
console.log("task done");

/**
 * here since we have 2 callbacks in process1 so it will be added into queue accordingly
 * and then last callback which is global will be added into queue and then queue will be deque
 * accordingly
 */

function process1() {
  console.log("start");
  setTimeout(() => {
    console.log("Executed in 3s");
  }, 3000);

  setTimeout(() => {
    console.log("Executed in 5s");
  }, 7000);

  for (let i = 0; i < 10000000000; i++) {}
  console.log("end");
}

process1();
setTimeout(() => {
  console.log("Executed in 7s");
}, 0);
